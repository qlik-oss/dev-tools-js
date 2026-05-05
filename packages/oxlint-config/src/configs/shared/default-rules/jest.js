// @ts-check

/** @type {NonNullable<import("oxlint").OxlintConfig["rules"]>} */
const rules = {
  "jest/expect-expect": "error",
  "jest/no-commented-out-tests": "error",
  "jest/no-conditional-expect": "error",
  "jest/no-disabled-tests": "error",
  "jest/no-export": "error",
  "jest/no-focused-tests": "error",
  "jest/no-identical-title": "warn",
  "jest/no-standalone-expect": "error",
  "jest/prefer-snapshot-hint": "error",
  "jest/prefer-to-contain": "warn",
  "jest/prefer-to-have-length": "warn",
  "jest/require-to-throw-message": "error",
  "jest/valid-describe-callback": "error",
  "jest/valid-expect": "error",
  "jest/valid-expect-in-promise": "error",
  "jest/valid-title": "error",
};

export default rules;
