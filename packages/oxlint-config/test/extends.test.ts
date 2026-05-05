import { execFileSync } from "node:child_process";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import qlik from "../src/index.js";

const presetNames = ["recommended", "react", "vitest"] as const;

type PresetName = (typeof presetNames)[number];
type OxlintDiagnostic = {
  code: string;
  severity: string;
};

type OxlintLintResult = {
  diagnostics: OxlintDiagnostic[];
};

const currentDirectory = path.dirname(fileURLToPath(import.meta.url));
const packageRoot = path.resolve(currentDirectory, "..");
const oxlintBin = path.resolve(packageRoot, "node_modules/.bin/oxlint");

let tempDir: string;
let fileCounter = 0;
let presetPaths: Record<PresetName, string>;

beforeAll(async () => {
  tempDir = await fs.mkdtemp(path.join(packageRoot, ".tmp-oxlint-config-"));

  presetPaths = Object.fromEntries(
    presetNames.map((preset) => [preset, path.join(tempDir, `${preset}.json`)]),
  ) as Record<PresetName, string>;

  await Promise.all(
    presetNames.map((preset) => {
      return fs.writeFile(presetPaths[preset], `${JSON.stringify(qlik[preset], null, 2)}\n`, "utf8");
    }),
  );
});

afterAll(async () => {
  if (tempDir) {
    await fs.rm(tempDir, { recursive: true, force: true });
  }
});

function getLintOutput(error: unknown): string {
  if (typeof error === "object" && error !== null && "stdout" in error && typeof error.stdout === "string") {
    return error.stdout;
  }

  throw error;
}

async function lintFile(extendsPresets: PresetName[], filePath: string, contents: string): Promise<OxlintLintResult> {
  const runId = fileCounter++;
  const configFile = path.join(tempDir, `config-${runId}.json`);
  const targetFile = path.join(tempDir, filePath);

  await fs.mkdir(path.dirname(targetFile), { recursive: true });
  await fs.writeFile(targetFile, contents, "utf8");
  await fs.writeFile(
    configFile,
    `${JSON.stringify({ extends: extendsPresets.map((preset) => presetPaths[preset]) }, null, 2)}\n`,
    "utf8",
  );

  try {
    const lintOutput = execFileSync(oxlintBin, ["--config", configFile, "--format", "json", targetFile], {
      cwd: packageRoot,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "pipe"],
    });

    return JSON.parse(lintOutput) as OxlintLintResult;
  } catch (error) {
    return JSON.parse(getLintOutput(error)) as OxlintLintResult;
  }
}

describe("preset extension resolution", () => {
  it("keeps browser rules on non-test files when vitest is extended at the root", async () => {
    const result = await lintFile(
      ["recommended", "react", "vitest"],
      "src/component.tsx",
      "const value: any = 1;\nconsole.log(value);\n",
    );
    const diagnostics = result.diagnostics.map((diagnostic) => `${diagnostic.code}:${diagnostic.severity}`);

    expect(diagnostics).toContain("eslint(no-console):warning");
    expect(diagnostics).toContain("typescript-eslint(no-explicit-any):error");
  });

  it("applies vitest-specific relaxations only to matching test files", async () => {
    const result = await lintFile(
      ["recommended", "react", "vitest"],
      "src/component.test.tsx",
      "const value: any = 1;\nconsole.log(value);\n",
    );
    const diagnostics = result.diagnostics.map((diagnostic) => `${diagnostic.code}:${diagnostic.severity}`);

    expect(diagnostics).not.toContain("eslint(no-console):warning");
    expect(diagnostics).toContain("typescript-eslint(no-explicit-any):warning");
  });

  it("still allows console usage in CommonJS files", async () => {
    const result = await lintFile(["recommended", "react"], "eslint.config.cjs", 'console.log("x");\n');

    expect(result.diagnostics).toHaveLength(0);
  });
});
