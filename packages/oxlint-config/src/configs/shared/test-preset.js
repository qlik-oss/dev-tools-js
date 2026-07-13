// @ts-check
import testRules from "./default-rules/test.js";
import testFiles from "./test-files.js";
import { jsFilesTypeAwareOff } from "./type-aware-rules.js";

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
 * Environment-specific rules that test presets should not override.
 * These belong to the base env config (esm, recommended, etc.) and
 * should not be re-set by a test preset when composed via `extends`.
 */
const envSpecificRules = new Set(["no-console"]);

/**
 * Turns test-runner rules on at the root so `oxlint --rules` reports them as enabled,
 * then turns them back off for non-test files.
 *
 * Test presets are environment-agnostic: they do not set `env` or override
 * environment-specific rules (e.g. `no-console`) at the root level, so they
 * compose cleanly with any base preset via `extends: [esm, vitest]`.
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
  // Strip env-specific rules from the root so test presets don't override
  // settings from base configs when composed via `extends`.
  const baseRulesWithoutEnv = Object.fromEntries(
    Object.entries(baseConfig.rules ?? {}).filter(([rule]) => !envSpecificRules.has(rule)),
  );

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
    ...baseConfig,
    // Don't set env at root — let the extending base config own that.
    env: undefined,
    plugins,
    rules: {
      ...baseRulesWithoutEnv,
      ...rootRules,
    },
    overrides: [commonjsOverride, jsFilesTypeAwareOff, resetOverride, runnerOverride],
  };
}

export { createScopedTestRunnerPreset };
