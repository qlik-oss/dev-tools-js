// @ts-check
import eslintCoreRules from "./eslint-core.js";

/**
 * @satisfies {import("../../types/index.js").ESLintFlatConfig["rules"]}
 *
 * typescript-eslint package https://typescript-eslint.io/rules/
 */
const rules = {
  // note some eslint core rules are disabled by tsconfig https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/eslint-recommended-raw.ts

  // class methods don't have to use this, but should maybe be turned into static methods
  // https://typescript-eslint.io/rules/class-methods-use-this
  "class-methods-use-this": "off",
  "@typescript-eslint/class-methods-use-this": eslintCoreRules["class-methods-use-this"],

  // enforce consistent type imports
  // https://typescript-eslint.io/rules/consistent-type-imports
  "@typescript-eslint/consistent-type-imports": "error",

  // enforce default parameters to be last
  // https://typescript-eslint.io/rules/default-param-last
  "default-param-last": "off",
  "@typescript-eslint/default-param-last": eslintCoreRules["default-param-last"],

  // enforce exported functions to have return types
  // https://typescript-eslint.io/rules/explicit-module-boundary-types
  "@typescript-eslint/explicit-module-boundary-types": "off",

  // enforce method signatures has the same style
  // https://typescript-eslint.io/rules/method-signature-style
  "@typescript-eslint/method-signature-style": "error",

  // don't use the delete operator on dynamic properties
  // https://typescript-eslint.io/rules/no-dynamic-delete
  "@typescript-eslint/no-dynamic-delete": "error",

  // don't have classes with only static members
  // https://typescript-eslint.io/rules/no-extraneous-class
  "@typescript-eslint/no-extraneous-class": "error",

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

  // no magic numbers please
  // https://typescript-eslint.io/rules/no-magic-numbers
  "no-magic-numbers": "off",
  "@typescript-eslint/no-magic-numbers": eslintCoreRules["no-magic-numbers"],

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

  // useless exports can be removed
  // https://typescript-eslint.io/rules/no-useless-empty-export
  "@typescript-eslint/no-useless-empty-export": "error",

  // yes, please initialize your enums
  // https://typescript-eslint.io/rules/prefer-enum-initializers
  "@typescript-eslint/prefer-enum-initializers": "error",

  // allow classic for loops
  // https://typescript-eslint.io/rules/prefer-for-of
  "@typescript-eslint/prefer-for-of": "off",

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

  // Lots of false/iffy positives
  // watch out for always truthy conditions
  // https://typescript-eslint.io/rules/no-unnecessary-condition
  "@typescript-eslint/no-unnecessary-condition": "error",

  // no unnecessary namespace qualifiers.
  // https://typescript-eslint.io/rules/no-unnecessary-qualifier
  "@typescript-eslint/no-unnecessary-qualifier": "error",

  // no need for template literals if they just refer to a string
  // https://typescript-eslint.io/rules/no-unnecessary-template-expression
  "@typescript-eslint/no-unnecessary-template-expression": "error",

  // don't use type arguments when they're not needed
  // https://typescript-eslint.io/rules/no-unnecessary-type-arguments
  "@typescript-eslint/no-unnecessary-type-arguments": "error",

  // Not working 100%
  // don't use type parameters when they're not needed
  // https://typescript-eslint.io/rules/no-unnecessary-type-parameters
  "@typescript-eslint/no-unnecessary-type-parameters": "off",

  // reducers should be typed correctly
  // https://typescript-eslint.io/rules/prefer-reduce-type-parameter
  "@typescript-eslint/prefer-reduce-type-parameter": "error",

  // https://typescript-eslint.io/rules/prefer-return-this-type
  "@typescript-eslint/prefer-return-this-type": "error",

  // https://typescript-eslint.io/rules/ban-ts-comment
  "@typescript-eslint/ban-ts-comment": "error",

  // https://typescript-eslint.io/rules/require-array-sort-compare
  "@typescript-eslint/require-array-sort-compare": "error",

  // not sure about this one
  // https://typescript-eslint.io/rules/return-await
  "no-return-await": "off",
  "@typescript-eslint/return-await": "error",

  // Not sure about this one
  // disallow certain types in boolean expressions.
  // https://typescript-eslint.io/rules/strict-boolean-expressions
  "@typescript-eslint/strict-boolean-expressions": "off",

  // make sure switch statements are exhaustive
  // https://typescript-eslint.io/rules/switch-exhaustiveness-check
  "@typescript-eslint/switch-exhaustiveness-check": "error",

  // enforce typing arguments in Promise rejection callbacks as unknown
  // https://typescript-eslint.io/rules/use-unknown-in-catch-callback-variable
  "@typescript-eslint/use-unknown-in-catch-callback-variable": "error",

  // Replace camelcase' rule with '@typescript-eslint/naming-convention'
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md
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
};

export default rules;
