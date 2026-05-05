// @ts-check
import jestRules from "./shared/default-rules/jest.js";
import vitestRules from "./shared/default-rules/vitest.js";
import { baseBrowserConfig, commonjsOverride } from "./shared/base.js";
import { vitestPlugins } from "./shared/plugins.js";
import { createScopedTestRunnerPreset } from "./shared/test-preset.js";

/** @type {NonNullable<import("oxlint").OxlintConfig["rules"]>} */
const conflictingJestRules = Object.fromEntries(
  Object.keys(vitestRules)
    .map((rule) => rule.replace(/^vitest\//u, ""))
    .filter((ruleName) => `jest/${ruleName}` in jestRules)
    .map((ruleName) => [`jest/${ruleName}`, "off"]),
);

/** @type {import("oxlint").OxlintConfig} */
const vitest = createScopedTestRunnerPreset({
  baseConfig: baseBrowserConfig,
  commonjsOverride,
  plugins: vitestPlugins,
  rootRules: vitestRules,
  runnerRules: {
    ...vitestRules,
    ...conflictingJestRules,
  },
  runnerEnvName: "vitest",
});

export default vitest;
