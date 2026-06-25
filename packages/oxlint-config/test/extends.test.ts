import type { OxlintConfig } from "oxlint";
import { execFileSync } from "node:child_process";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import qlik, { recommended } from "../src/index.js";

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

    expect(getDiagnostics(rootResult)).toContain("vitest(no-disabled-tests):warning");
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
    expect(diagnostics).toContain("typescript(no-explicit-any):error");
  });

  it("applies vitest-specific relaxations only to matching test files", async () => {
    const result = await lintWithPresets(
      ["recommended", "react", "vitest"],
      "src/component.test.tsx",
      "const value: any = 1;\nconsole.log(value);\n",
    );
    const diagnostics = getDiagnostics(result);

    expect(diagnostics).toContain("eslint(no-console):warning");
    expect(diagnostics).toContain("typescript(no-explicit-any):warning");
  });

  it("keeps only Vitest plugin rules in the vitest preset", async () => {
    const result = await lintWithPresets(
      ["recommended", "react", "vitest"],
      "src/vitest-only.test.ts",
      'it.skip("skipped", () => {});\n',
    );
    const diagnostics = getDiagnostics(result);

    expect(diagnostics).toContain("vitest(no-disabled-tests):error");
    expect(diagnostics).not.toContain("jest(no-disabled-tests):error");
  });

  it("exposes Jest plugin rules through the jest preset", async () => {
    const result = await lintWithPresets(
      ["recommended", "react", "jest"],
      "src/jest-only.test.ts",
      'it.skip("skipped", () => {});\nconsole.log("still warn");\n',
    );
    const diagnostics = getDiagnostics(result);

    expect(diagnostics).toContain("eslint(no-console):warning");
    expect(diagnostics).toContain("jest(no-disabled-tests):error");
    expect(diagnostics).not.toContain("vitest(no-disabled-tests):error");
  });

  it("still allows console usage in CommonJS files", async () => {
    const result = await lintWithPresets(["recommended", "react"], "eslint.config.cjs", 'console.log("x");\n');

    expect(result.diagnostics).toHaveLength(0);
  });

  it("does not restrict common callback parameter names as browser globals", async () => {
    expect(recommended.rules?.["no-restricted-globals"]).not.toEqual(
      expect.arrayContaining([expect.objectContaining({ name: "event" })]),
    );

    const result = await lintWithPresets(
      ["recommended", "react"],
      "src/event-handler.ts",
      "function handleContextMenu(event: Event) {\n  event.preventDefault();\n}\nhandleContextMenu(new Event('contextmenu'));\n",
    );

    expect(getDiagnostics(result)).not.toContain("eslint(no-restricted-globals):error");
  });

  it.each([
    {
      preset: "vitest" as const,
      diagnostic: "vitest(expect-expect):error",
    },
    {
      preset: "jest" as const,
      diagnostic: "jest(expect-expect):error",
    },
  ])("enables $preset preset rules", async ({ preset, diagnostic }) => {
    const contents = 'it("has no assertions", () => {});\n';
    const withoutPresetResult = await lintWithPresets(
      ["recommended", "react"],
      `src/${preset}-disabled.test.ts`,
      contents,
    );
    const withPresetResult = await lintWithPresets(
      ["recommended", "react", preset],
      `src/${preset}-disabled.test.ts`,
      contents,
    );

    expect(getDiagnostics(withoutPresetResult)).not.toContain(diagnostic);
    expect(getDiagnostics(withPresetResult)).toContain(diagnostic);
  });
});
