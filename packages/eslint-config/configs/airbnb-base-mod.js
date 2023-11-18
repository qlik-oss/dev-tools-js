module.exports = {
  rules: {
    // modifies airbnb default rules
    "no-void": "off",
    "no-underscore-dangle": "off",
    "class-methods-use-this": "off",
    "no-plusplus": "off",
    "prefer-destructuring": ["error", { object: true, array: false }],
    "guard-for-in": "off",
    // allow prev to be re-assigned in reducers
    "no-param-reassign": [
      "error",
      {
        props: true,
        ignorePropertyModificationsFor: [
          "prev", // for reduce accumulators
          "acc", // for reduce accumulators
          "accumulator", // for reduce accumulators
          "e", // for e.returnvalue
          "ctx", // for Koa routing
          "context", // for Koa routing
          "req", // for Express requests
          "request", // for Express requests
          "res", // for Express responses
          "response", // for Express responses
          "$scope", // for Angular 1 scopes
          "staticContext", // for ReactRouter context
        ],
      },
    ],

    // eslint import/order and prettier-plugin-organize-imports are currently incompatible
    "import/order": "off",

    // allows for..in and for..of
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

    // modifies airbnb ts default rules
    "lines-between-class-members": "off",
    "no-use-before-define": "off",
    "dot-notation": "off",

    // import plugin
    "import/prefer-default-export": "off",
    "import/no-extraneous-dependencies": [
      "off",
      {
        devDependencies: [
          "**/webpack.config.js",
          "**/svelte.config.js",
          "**/playwright.config.ts",
          "**/playwright.config.js",
        ],
      },
    ],
  },
};
