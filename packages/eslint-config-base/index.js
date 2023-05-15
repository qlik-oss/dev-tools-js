module.exports = {
  extends: ["eslint:recommended"],
  parserOptions: {
    ecmaVersion: 2022,
  },
  rules: {
    // modifies airbnb rules

    // https://eslint.org/docs/rules/no-underscore-dangle
    "no-underscore-dangle": "off",

    // https://eslint.org/docs/rules/class-methods-use-this
    "class-methods-use-this": "off",

    // https://eslint.org/docs/rules/no-plusplus
    "no-plusplus": "off",

    // https://eslint.org/docs/rules/prefer-destructuring
    "prefer-destructuring": ["error", { object: true, array: false }],

    // https://eslint.org/docs/latest/rules/guard-for-in
    "guard-for-in": "off",

    // https://typescript-eslint.io/rules/no-use-before-define
    "no-use-before-define": "off",

    // https://typescript-eslint.io/rules/lines-between-class-members
    "lines-between-class-members": "off",

    // https://typescript-eslint.io/rules/dot-notation/
    "dot-notation": "off",

    // allows for..in and for..of
    // https://eslint.org/docs/rules/no-restricted-syntax
    "no-restricted-syntax": [
      "error",
      // {
      //   selector: "ForInStatement",
      //   message:
      //     "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.",
      // },
      // {
      //   selector: "ForOfStatement",
      //   message:
      //     "iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.",
      // },
      {
        selector: "LabeledStatement",
        message: "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.",
      },
      {
        selector: "WithStatement",
        message: "`with` is disallowed in strict mode because it makes code impossible to predict and optimize.",
      },
    ],
  },
};
