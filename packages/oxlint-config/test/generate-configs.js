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
import qlik from "../src/index.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const generatedDir = path.resolve(__dirname, "generated");

await fs.mkdir(generatedDir, { recursive: true });

/**
 * Configs to snapshot.
 */
const configs = qlik.configs;
const testConfigNames = new Set(["jest", "vitest"]);

await Promise.all(
  Object.entries(configs).map(async ([name, config]) => {
    const configFile = path.resolve(__dirname, `_print-config-${name}.mjs`);
    const dummyExtension = testConfigNames.has(name) ? ".test.tsx" : ".js";
    const dummyFile = path.resolve(__dirname, `_print-config-${name}-dummy${dummyExtension}`);

    await fs.writeFile(dummyFile, "");

    await fs.writeFile(
      configFile,
      [
        `import { defineConfig } from "oxlint";`,
        `const preset = ${JSON.stringify(config, null, 2)};`,
        `export default defineConfig(preset);`,
      ].join("\n"),
    );

    let resolved;
    try {
      resolved = execSync(`../node_modules/.bin/oxlint --config "${configFile}" --print-config "${dummyFile}"`, {
        cwd: __dirname,
        encoding: "utf8",
      });
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      console.error(`Failed to resolve config for "${name}":`, message);
      process.exitCode = 1;
      return;
    } finally {
      await fs.rm(dummyFile, { force: true });
      await fs.rm(configFile, { force: true });
    }

    // Pretty-print the JSON with sorted keys for stable diffs
    const parsed = JSON.parse(resolved);
    const sorted = sortKeys(parsed);
    const pretty = JSON.stringify(sorted, null, 2);

    const outFile = path.resolve(generatedDir, `${name}-final-config.json`);
    await fs.writeFile(outFile, `${pretty}\n`);
    console.log(`  ✓  ${name} → test/generated/${name}-final-config.json`);
  }),
);

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
