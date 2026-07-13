// @ts-check

/** Type-aware rules enabled by the shared categories and explicit rule config. */
/** @type {readonly string[]} */
const typeAwareRuleNames = [
  "typescript/await-thenable",
  "typescript/consistent-return",
  "typescript/consistent-type-exports",
  "typescript/no-array-delete",
  "typescript/no-base-to-string",
  "typescript/no-confusing-void-expression",
  "typescript/no-deprecated",
  "typescript/no-duplicate-type-constituents",
  "typescript/no-floating-promises",
  "typescript/no-for-in-array",
  "typescript/no-implied-eval",
  "typescript/no-meaningless-void-operator",
  "typescript/no-misused-promises",
  "typescript/no-misused-spread",
  "typescript/no-mixed-enums",
  "typescript/no-redundant-type-constituents",
  "typescript/no-unnecessary-boolean-literal-compare",
  "typescript/no-unnecessary-condition",
  "typescript/no-unnecessary-qualifier",
  "typescript/no-unnecessary-template-expression",
  "typescript/no-unnecessary-type-arguments",
  "typescript/no-unnecessary-type-assertion",
  "typescript/no-unnecessary-type-conversion",
  "typescript/no-unnecessary-type-parameters",
  "typescript/no-unsafe-argument",
  "typescript/no-unsafe-assignment",
  "typescript/no-unsafe-call",
  "typescript/no-unsafe-enum-comparison",
  "typescript/no-unsafe-member-access",
  "typescript/no-unsafe-return",
  "typescript/no-unsafe-unary-minus",
  "typescript/no-useless-default-assignment",
  "typescript/prefer-promise-reject-errors",
  "typescript/prefer-reduce-type-parameter",
  "typescript/prefer-return-this-type",
  "typescript/require-array-sort-compare",
  "typescript/restrict-template-expressions",
  "typescript/switch-exhaustiveness-check",
  "typescript/unbound-method",
  "typescript/use-unknown-in-catch-callback-variable",
];

/** @type {NonNullable<import("oxlint").OxlintConfig["rules"]>} */
const typeAwareRulesOff = Object.fromEntries(typeAwareRuleNames.map((rule) => [rule, "off"]));

/** @type {NonNullable<import("oxlint").OxlintConfig["overrides"]>[number]} */
const jsFilesTypeAwareOff = {
  files: ["**/*.{js,jsx,mjs,cjs}"],
  rules: typeAwareRulesOff,
};

export { jsFilesTypeAwareOff, typeAwareRuleNames };
