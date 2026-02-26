// @ts-check
import eslintCoreRules from "./eslint-core.js";

/**
 * @satisfies {import("../../../types/index.js").ESLintFlatConfig["rules"]}
 *
 * typesscript-eslint core recommended config https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/eslintrc/recommended-type-checked.ts
 */
const rules = {
  // modify/add rules from typescript-eslint package here additionally to the recommended rules

  // turn off core rules superseded by @typescript-eslint equivalents
  // shadows from outer scopes are not allowed
  // https://typescript-eslint.io/rules/no-shadow
  "no-shadow": "off",
  "@typescript-eslint/no-shadow": eslintCoreRules["no-shadow"],

  // Replace camelcase' rule with '@typescript-eslint/naming-convention'
  // https://typescript-eslint.io/rules/naming-convention/
  camelcase: "off",
  // The `@typescript-eslint/naming-convention` rule allows `leadingUnderscore` and `trailingUnderscore` settings. However, the existing `no-underscore-dangle` rule already takes care of this.
  "@typescript-eslint/naming-convention": [
    "error",
    // Allow camelCase variables (23.2), PascalCase variables (23.8), and UPPER_CASE variables (23.10)
    {
      selector: "variable",
      format: ["camelCase", "PascalCase", "UPPER_CASE"],
    },
    // Allow camelCase functions (23.2), and PascalCase functions (23.8)
    {
      selector: "function",
      format: ["camelCase", "PascalCase"],
    },
    // Qlik recommends PascalCase for classes (23.3),
    {
      selector: "typeLike",
      format: ["PascalCase"],
    },
  ],

  // use tsconfig's noImplicitReturns option rather than this rule
  "consistent-return": "off",
};

export default rules;
