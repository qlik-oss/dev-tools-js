import type { OxlintConfig } from "oxlint";
import { execFileSync } from "node:child_process";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import qlik from "../src/index.js";

const presetNames = ["recommended", "react", "jest", "vitest"] as const;
const testFiles = [
  "**/__test{,s}__/**/*.{js,jsx,ts,tsx}",
  "**/{test{,s},mock{,s}}/**/*.{js,jsx,ts,tsx}",
  "**/*.{test,spec}.{js,jsx,ts,tsx}",
] as const;

type PresetName = (typeof presetNames)[number];
type TestOxlintConfig = Omit<OxlintConfig, "extends"> & {
  extends?: string[];
};

type OxlintDiagnostic = {
  code: string;
  severity: string;
};

type OxlintLintResult = {
  diagnostics: OxlintDiagnostic[];
};

const rootVitestPluginConfig: TestOxlintConfig = {
  plugins: ["unicorn", "typescript", "oxc", "import", "vitest"],
  env: {
    browser: true,
    builtin: true,
    vitest: true,
  },
};

const overrideVitestPluginConfig: TestOxlintConfig = {
  overrides: [
    {
      files: [...testFiles],
      plugins: ["unicorn", "typescript", "oxc", "import", "vitest"],
      env: {
        browser: true,
        builtin: true,
        vitest: true,
      },
    },
  ],
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

function getDiagnostics(result: OxlintLintResult): string[] {
  return result.diagnostics.map((diagnostic) => `${diagnostic.code}:${diagnostic.severity}`);
}

function getRulesTableRows(output: string): string[] {
  return output.split("\n").reduce<string[]>((rows, line) => {
    if (!line.includes("|")) {
      return rows;
    }

    if (/^\s+\|/u.test(line) && rows.length > 0) {
      const previousRow = rows[rows.length - 1];
      return [...rows.slice(0, -1), `${previousRow}${line.trimStart()}`];
    }

    return [...rows, line];
  }, []);
}

function isRuleEnabled(output: string, ruleName: string, source: string): boolean {
  const ruleRow = getRulesTableRows(output).find((candidate) => {
    const cells = candidate
      .split("|")
      .slice(1, -1)
      .map((cell) => cell.trim());
    return cells[0] === ruleName && cells[1] === source;
  });

  if (!ruleRow) {
    throw new Error(`Missing rule row for ${source}/${ruleName}`);
  }

  const cells = ruleRow
    .split("|")
    .slice(1, -1)
    .map((cell) => cell.trim());
  return cells[3] === "✅";
}

function getStableRulesCommandEnv(): NodeJS.ProcessEnv {
  const environment: NodeJS.ProcessEnv = {
    ...process.env,
    COLUMNS: "220",
    NO_COLOR: "1",
    TERM: "xterm-256color",
  };

  // `oxlint --rules` changes its captured output in CI mode, which hides the rows this test asserts on.
  delete environment.CI;
  delete environment.GITHUB_ACTIONS;

  return environment;
}

async function lintWithConfig(config: TestOxlintConfig, filePath: string, contents: string): Promise<OxlintLintResult> {
  const runId = fileCounter++;
  const configFile = path.join(tempDir, `config-${runId}.json`);
  const targetFile = path.join(tempDir, filePath);

  await fs.mkdir(path.dirname(targetFile), { recursive: true });
  await fs.writeFile(targetFile, contents, "utf8");
  await fs.writeFile(configFile, `${JSON.stringify(config, null, 2)}\n`, "utf8");

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

async function lintWithPresets(
  extendsPresets: PresetName[],
  filePath: string,
  contents: string,
): Promise<OxlintLintResult> {
  return lintWithConfig(
    {
      extends: extendsPresets.map((preset) => presetPaths[preset]),
    },
    filePath,
    contents,
  );
}

describe("preset extension resolution", () => {
  async function listRulesWithPresets(extendsPresets: PresetName[]): Promise<string> {
    const runId = fileCounter++;
    const configFile = path.join(tempDir, `rules-config-${runId}.ts`);
    const extendsList = extendsPresets.map((preset) => `qlik.${preset}`).join(", ");
    const configContents = [
      'import qlik from "../src/index.js";',
      'import { defineConfig } from "oxlint";',
      "",
      "export default defineConfig({",
      `  extends: [${extendsList}],`,
      "});",
    ].join("\n");

    await fs.writeFile(configFile, `${configContents}\n`, "utf8");

    return execFileSync(oxlintBin, ["--rules", "--config", configFile], {
      cwd: packageRoot,
      encoding: "utf8",
      env: getStableRulesCommandEnv(),
      stdio: ["ignore", "pipe", "pipe"],
    });
  }
  it("only gets the native Vitest default rules when the plugin is enabled at the root", async () => {
    const rootResult = await lintWithConfig(
      rootVitestPluginConfig,
      "src/plugin-root.test.ts",
      'it.skip("skipped", () => {});\n',
    );
    const overrideResult = await lintWithConfig(
      overrideVitestPluginConfig,
      "src/plugin-override.test.ts",
      'it.skip("skipped", () => {});\n',
    );

    expect(getDiagnostics(rootResult)).toContain("eslint-plugin-vitest(no-disabled-tests):warning");
    expect(overrideResult.diagnostics).toHaveLength(0);
  });

  it("keeps browser rules on non-test files when vitest is extended at the root", async () => {
    const result = await lintWithPresets(
      ["recommended", "react", "vitest"],
      "src/component.tsx",
      "const value: any = 1;\nconsole.log(value);\n",
    );
    const diagnostics = getDiagnostics(result);

    expect(diagnostics).toContain("eslint(no-console):warning");
    expect(diagnostics).toContain("typescript-eslint(no-explicit-any):error");
  });

  it("applies vitest-specific relaxations only to matching test files", async () => {
    const result = await lintWithPresets(
      ["recommended", "react", "vitest"],
      "src/component.test.tsx",
      "const value: any = 1;\nconsole.log(value);\n",
    );
    const diagnostics = getDiagnostics(result);

    expect(diagnostics).toContain("eslint(no-console):warning");
    expect(diagnostics).toContain("typescript-eslint(no-explicit-any):warning");
  });

  it("keeps only Vitest plugin rules in the vitest preset", async () => {
    const result = await lintWithPresets(
      ["recommended", "react", "vitest"],
      "src/vitest-only.test.ts",
      'it.skip("skipped", () => {});\n',
    );
    const diagnostics = getDiagnostics(result);

    expect(diagnostics).toContain("eslint-plugin-vitest(no-disabled-tests):error");
    expect(diagnostics).not.toContain("eslint-plugin-jest(no-disabled-tests):error");
  });

  it("exposes Jest plugin rules through the jest preset", async () => {
    const result = await lintWithPresets(
      ["recommended", "react", "jest"],
      "src/jest-only.test.ts",
      'it.skip("skipped", () => {});\nconsole.log("still warn");\n',
    );
    const diagnostics = getDiagnostics(result);

    expect(diagnostics).toContain("eslint(no-console):warning");
    expect(diagnostics).toContain("eslint-plugin-jest(no-disabled-tests):error");
    expect(diagnostics).not.toContain("eslint-plugin-vitest(no-disabled-tests):error");
  });

  it("still allows console usage in CommonJS files", async () => {
    const result = await lintWithPresets(["recommended", "react"], "eslint.config.cjs", 'console.log("x");\n');

    expect(result.diagnostics).toHaveLength(0);
  });

  it.each([
    {
      preset: "vitest" as const,
      ruleName: "require-awaited-expect-poll",
      source: "vitest",
    },
    {
      preset: "jest" as const,
      ruleName: "prefer-snapshot-hint",
      source: "jest",
    },
  ])("marks $preset preset rules as enabled in oxlint --rules output", async ({ preset, ruleName, source }) => {
    const withoutPresetRules = await listRulesWithPresets(["recommended", "react"]);
    const withPresetRules = await listRulesWithPresets(["recommended", "react", preset]);

    expect(isRuleEnabled(withoutPresetRules, ruleName, source)).toBe(false);
    expect(isRuleEnabled(withPresetRules, ruleName, source)).toBe(true);
  });
});
