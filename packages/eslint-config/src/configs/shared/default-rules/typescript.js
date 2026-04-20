// @ts-check
import eslintCoreRules from "./eslint-core.js";

/**
 * @satisfies {import("../../../types/index.js").ESLintFlatConfig["rules"]}
 *
 * typesscript-eslint core recommended config https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/eslintrc/recommended-type-checked.ts
 */
const rules = {
  // modify/add rules from typescript-eslint package here additionally to the recommended rules

  // note some eslint core rules are disabled by tsconfig https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/eslint-recommended-raw.ts
  // turn off core rules superseded by @typescript-eslint equivalents

  // enforce consistent type imports
  // https://typescript-eslint.io/rules/consistent-type-imports
  "@typescript-eslint/consistent-type-imports": "error",

  // enforce default parameters to be last
  // https://typescript-eslint.io/rules/default-param-last
  "default-param-last": "off",
  "@typescript-eslint/default-param-last": eslintCoreRules["default-param-last"],

  // enforce method signatures has the same style
  // https://typescript-eslint.io/rules/method-signature-style
  "@typescript-eslint/method-signature-style": "error",

  // don't use the delete operator on dynamic properties
  // https://typescript-eslint.io/rules/no-dynamic-delete
  "@typescript-eslint/no-dynamic-delete": "error",

  // use top-level type imports
  // https://typescript-eslint.io/rules/no-import-type-side-effects
  "@typescript-eslint/no-import-type-side-effects": "error",

  // don't use void where it shouldn't be used
  // https://typescript-eslint.io/rules/no-invalid-void-type
  "@typescript-eslint/no-invalid-void-type": "error",

  // don't do weird things in loops
  // https://typescript-eslint.io/rules/no-loop-func
  "no-loop-func": "off",
  "@typescript-eslint/no-loop-func": eslintCoreRules["no-loop-func"],

  // disallow non-null assertions in the left operand of a nullish coalescing operator.
  // https://typescript-eslint.io/rules/no-non-null-asserted-nullish-coalescing
  "@typescript-eslint/no-non-null-asserted-nullish-coalescing": "error",

  // https://typescript-eslint.io/rules/no-non-null-assertion
  "@typescript-eslint/no-non-null-assertion": "error",

  // don't allow redeclaration of variables
  // https://typescript-eslint.io/rules/no-redeclare
  "no-redeclare": "off",
  "@typescript-eslint/no-redeclare": eslintCoreRules["no-redeclare"],

  // add forbidden imports if needed
  // https://typescript-eslint.io/rules/no-restricted-imports
  "no-restricted-imports": "off",
  "@typescript-eslint/no-restricted-imports": eslintCoreRules["no-restricted-imports"],

  // add forbidden types if needed
  // https://typescript-eslint.io/rules/no-restricted-types
  "@typescript-eslint/no-restricted-types": ["error", {}],

  // shadows from outer scopes are not allowed
  // https://typescript-eslint.io/rules/no-shadow
  "no-shadow": "off",
  "@typescript-eslint/no-shadow": eslintCoreRules["no-shadow"],

  // no unnecessary assignment of constructor property parameter.
  // https://typescript-eslint.io/rules/no-unnecessary-parameter-property-assignment
  "@typescript-eslint/no-unnecessary-parameter-property-assignment": "error",

  // don't use stuff that hasn't been defined
  // https://typescript-eslint.io/rules/no-useless-constructor
  "no-useless-constructor": "off",
  "@typescript-eslint/no-useless-constructor": eslintCoreRules["no-useless-constructor"],

  // yes, please initialize your enums
  // https://typescript-eslint.io/rules/prefer-enum-initializers
  "@typescript-eslint/prefer-enum-initializers": "error",

  // enums are not based on dynamic values
  // https://typescript-eslint.io/rules/prefer-literal-enum-member
  "@typescript-eslint/prefer-literal-enum-member": "error",

  // disallow two overloads that could be unified into one with a union or an optional/rest parameter.
  // https://typescript-eslint.io/rules/unified-signatures
  "@typescript-eslint/unified-signatures": "error",

  // enforce explicityly set type exports
  // https://typescript-eslint.io/rules/consistent-type-exports
  "@typescript-eslint/consistent-type-exports": "error",

  // void should not be assigned to variables
  // https://typescript-eslint.io/rules/no-confusing-void-expression
  "@typescript-eslint/no-confusing-void-expression": "error",

  // https://typescript-eslint.io/rules/no-floating-promises
  "@typescript-eslint/no-floating-promises": [
    "error",
    {
      ignoreIIFE: true,
    },
  ],

  // remove void when it's not needed
  // https://typescript-eslint.io/rules/no-meaningless-void-operator
  "@typescript-eslint/no-meaningless-void-operator": "error",

  // https://typescript-eslint.io/rules/no-misused-promises
  "@typescript-eslint/no-misused-promises": [
    "error",
    {
      checksConditionals: false,
    },
  ],

  // use constistent enum types
  // https://typescript-eslint.io/rules/no-mixed-enums
  "@typescript-eslint/no-mixed-enums": "error",

  // don't do silly comparisons
  // https://typescript-eslint.io/rules/no-unnecessary-boolean-literal-compare
  "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",

  // no unnecessary namespace qualifiers.
  // https://typescript-eslint.io/rules/no-unnecessary-qualifier
  "@typescript-eslint/no-unnecessary-qualifier": "error",

  // Disallow conditionals where the type is always truthy or always falsy - https://typescript-eslint.io/rules/no-unnecessary-condition
  "@typescript-eslint/no-unnecessary-condition": "error",

  // no need for template literals if they just refer to a string
  // https://typescript-eslint.io/rules/no-unnecessary-template-expression
  "@typescript-eslint/no-unnecessary-template-expression": "error",

  // don't use type arguments when they're not needed
  // https://typescript-eslint.io/rules/no-unnecessary-type-arguments
  "@typescript-eslint/no-unnecessary-type-arguments": "error",

  // reducers should be typed correctly
  // https://typescript-eslint.io/rules/prefer-reduce-type-parameter
  "@typescript-eslint/prefer-reduce-type-parameter": "error",

  // https://typescript-eslint.io/rules/prefer-return-this-type
  "@typescript-eslint/prefer-return-this-type": "error",

  // Require switch-case statements to be exhaustive - https://typescript-eslint.io/rules/switch-exhaustiveness-check
  "@typescript-eslint/switch-exhaustiveness-check": "error",

  // enforce typing arguments in Promise rejection callbacks as unknown
  // https://typescript-eslint.io/rules/use-unknown-in-catch-callback-variable
  "@typescript-eslint/use-unknown-in-catch-callback-variable": "error",

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
