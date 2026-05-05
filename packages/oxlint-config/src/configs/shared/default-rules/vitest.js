// @ts-check

/** @type {NonNullable<import("oxlint").OxlintConfig["rules"]>} */
const rules = {
  "vitest/consistent-each-for": "error",
  "vitest/consistent-test-filename": "warn",
  "vitest/expect-expect": "error",
  "vitest/hoisted-apis-on-top": "error",
  "vitest/no-commented-out-tests": "error",
  "vitest/no-conditional-expect": "error",
  "vitest/no-conditional-tests": "error",
  "vitest/no-disabled-tests": "error",
  "vitest/no-focused-tests": "error",
  "vitest/no-identical-title": "warn",
  "vitest/prefer-to-be-object": "warn",
  "vitest/prefer-to-contain": "warn",
  "vitest/require-awaited-expect-poll": "error",
  "vitest/require-local-test-context-for-concurrent-snapshots": "error",
  "vitest/require-mock-type-parameters": "off",
  "vitest/valid-expect": "error",
  "vitest/valid-title": "error",
  "vitest/warn-todo": "error",
};

export default rules;
