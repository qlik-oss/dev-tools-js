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
 *   baseConfig: import("oxlint").OxlintConfig,
 *   commonjsOverride: NonNullable<import("oxlint").OxlintConfig["overrides"]>[number],
 *   plugins: NonNullable<import("oxlint").OxlintConfig["plugins"]>,
 *   rootRules: NonNullable<import("oxlint").OxlintConfig["rules"]>,
 *   runnerRules: NonNullable<import("oxlint").OxlintConfig["rules"]>,
 *   runnerEnvName: "jest" | "vitest",
 * }} options
 * @returns {import("oxlint").OxlintConfig}
 */
function createScopedTestRunnerPreset({
  baseConfig,
  commonjsOverride,
  plugins,
  rootRules,
  runnerRules,
  runnerEnvName,
}) {
  const resetOverride = {
    files: lintedCodeFiles,
    rules: disableRules(rootRules),
  };

  const runnerOverride = {
    files: testFiles,
    env: {
      ...baseConfig.env,
      [runnerEnvName]: true,
    },
    rules: {
      ...testRules,
      ...runnerRules,
    },
  };

  return {
    ...baseConfig,
    plugins,
    rules: {
      ...baseConfig.rules,
      ...rootRules,
    },
    overrides: [commonjsOverride, resetOverride, runnerOverride],
  };
}

export { createScopedTestRunnerPreset };
