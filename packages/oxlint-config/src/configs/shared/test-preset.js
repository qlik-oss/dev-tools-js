// @ts-check
import testRules from "./default-rules/test.js";
import testFiles from "./test-files.js";

/** @type {NonNullable<NonNullable<import("oxlint").OxlintConfig["overrides"]>[number]["files"]>} */
const lintedCodeFiles = ["**/*.{js,jsx,ts,tsx,cjs,cts,mjs,mts}"];

/**
 * @param {import("oxlint").OxlintConfig["rules"]} rules
 * @returns {NonNullable<import("oxlint").OxlintConfig["rules"]>}
 */
function disableRules(rules) {
  return Object.fromEntries(Object.keys(rules ?? {}).map((rule) => [rule, "off"]));
}

/**
 * Turns test-runner rules on at the root so `oxlint --rules` reports them as enabled,
 * then turns them back off for non-test files.
 *
 * @param {{
 *   plugins: NonNullable<import("oxlint").OxlintConfig["plugins"]>,
 *   rootRules: NonNullable<import("oxlint").OxlintConfig["rules"]>,
 *   runnerRules: NonNullable<import("oxlint").OxlintConfig["rules"]>,
 *   runnerEnvName: "jest" | "vitest",
 * }} options
 * @returns {import("oxlint").OxlintConfig}
 */
function createScopedTestRunnerPreset({ plugins, rootRules, runnerRules, runnerEnvName }) {
  const resetOverride = {
    files: lintedCodeFiles,
    rules: disableRules(rootRules),
  };

  const runnerOverride = {
    files: testFiles,
    env: {
      builtin: true,
      [runnerEnvName]: true,
    },
    rules: {
      ...testRules,
      ...runnerRules,
    },
  };

  return {
    plugins,
    rules: rootRules,
    overrides: [resetOverride, runnerOverride],
  };
}

export { createScopedTestRunnerPreset };
