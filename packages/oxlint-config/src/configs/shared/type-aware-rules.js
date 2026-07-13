// @ts-check

/**
 * Rules that require type information (typeAware / typeCheck).
 * JS files don't have type information available, so these rules
 * must be disabled for them to avoid false positives.
 */

/** @type {string[]} */
const typeAwareRuleNames = [
  "typescript/await-thenable",
  "typescript/consistent-type-exports",
  "typescript/no-confusing-void-expression",
  "typescript/no-deprecated",
  "typescript/no-floating-promises",
  "typescript/no-misused-promises",
  "typescript/no-mixed-enums",
  "typescript/no-unnecessary-condition",
  "typescript/no-unnecessary-qualifier",
  "typescript/no-unsafe-argument",
  "typescript/no-unsafe-assignment",
  "typescript/no-unsafe-call",
  "typescript/no-unsafe-member-access",
  "typescript/no-unsafe-return",
  "typescript/prefer-promise-reject-errors",
  "typescript/prefer-reduce-type-parameter",
  "typescript/prefer-return-this-type",
  "typescript/switch-exhaustiveness-check",
  "typescript/use-unknown-in-catch-callback-variable",
];

/** @type {NonNullable<import("oxlint").OxlintConfig["rules"]>} */
const typeAwareRulesOff = Object.fromEntries(typeAwareRuleNames.map((rule) => [rule, "off"]));

/** @type {NonNullable<import("oxlint").OxlintConfig["overrides"]>[number]} */
const jsFilesTypeAwareOff = {
  files: ["**/*.{js,jsx,mjs,cjs}"],
  rules: typeAwareRulesOff,
};

export { typeAwareRuleNames, typeAwareRulesOff, jsFilesTypeAwareOff };
