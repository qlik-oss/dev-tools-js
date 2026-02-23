/**
 * Generates test/generated/*.json snapshot files for each oxlint config preset.
 *
 * Each snapshot is produced by writing a temporary oxlint.config.mjs that
 * extends the preset, running `oxlint --print-config` against a dummy file,
 * and capturing the fully-resolved JSON output.  This lets reviewers see the
 * exact rules oxlint will enforce at a glance, without running the linter.
 *
 * Usage:
 *   node test/generate-configs.js
 */

import { execSync } from "node:child_process";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const generatedDir = path.resolve(__dirname, "generated");

await fs.mkdir(generatedDir, { recursive: true });

/**
 * Configs to snapshot.
 * Each entry maps a name to the import path (relative to the package root).
 */
const configs = {
  recommended: "../recommended.js",
  react: "../react.js",
  node: "../node.js",
  vitest: "../vitest.js",
  jest: "../jest.js",
};

// Reusable dummy file for --print-config (just needs to exist)
const dummyFile = path.resolve(root, "_print-config-dummy.js");
await fs.writeFile(dummyFile, "");

for (const [name, importPath] of Object.entries(configs)) {
  // Write the ephemeral config inside the package root so that Node can
  // resolve both "oxlint" and the local preset via the workspace node_modules.
  const configFile = path.resolve(root, `_print-config-${name}.mjs`);

  await fs.writeFile(
    configFile,
    [
      `import { defineConfig } from "oxlint";`,
      `import preset from "${path.resolve(root, importPath)}";`,
      `export default defineConfig(preset);`,
    ].join("\n"),
  );

  let resolved;
  try {
    resolved = execSync(`node_modules/.bin/oxlint --config "${configFile}" --print-config "${dummyFile}"`, {
      cwd: root,
      encoding: "utf8",
    });
  } catch (err) {
    console.error(`Failed to resolve config for "${name}":`, err.message);
    process.exitCode = 1;
    continue;
  } finally {
    await fs.rm(configFile, { force: true });
  }

  // Pretty-print the JSON with sorted keys for stable diffs
  const parsed = JSON.parse(resolved);
  const sorted = sortKeys(parsed);
  const pretty = JSON.stringify(sorted, null, 2);

  const outFile = path.resolve(generatedDir, `${name}-final-config.json`);
  await fs.writeFile(outFile, pretty + "\n");
  console.log(`  ✓  ${name} → test/generated/${name}-final-config.json`);
}

// Clean up the shared dummy file
await fs.rm(dummyFile, { force: true });

/**
 * Recursively sorts object keys for a stable representation.
 * Arrays and primitives are left unchanged.
 * @param {unknown} value
 * @returns {unknown}
 */
function sortKeys(value) {
  if (Array.isArray(value)) {
    return value.map(sortKeys);
  }
  if (value !== null && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value)
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([k, v]) => [k, sortKeys(v)]),
    );
  }
  return value;
}
