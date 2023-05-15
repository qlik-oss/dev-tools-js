module.exports = {
  parserOptions: {
    project: "**/tsconfig.eslint.json",
  },
  extends: [
    "./index",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
  ],
  plugins: [
    "@typescript-eslint", // add the TypeScript plugin
  ],
  rules: {
    // typescript specific rules
    "@typescript-eslint/lines-between-class-members": "off",

    // discouraged https://palantir.github.io/tslint/rules/no-use-before-declare/
    "@typescript-eslint/no-use-before-define": "off",

    // https://typescript-eslint.io/rules/prefer-ts-expect-error/
    "@typescript-eslint/prefer-ts-expect-error": "error",

    // https://typescript-eslint.io/rules/dot-notation/
    "@typescript-eslint/dot-notation": "off",

    // https://typescript-eslint.io/rules/no-misused-promises/
    "@typescript-eslint/no-misused-promises": [
      "error",
      {
        checksConditionals: false,
      },
    ],

    // no-unsafe-* does not work correctly
    // https://typescript-eslint.io/rules/no-unsafe-call/
    // https://typescript-eslint.io/rules/no-unsafe-member-access/
    // https://typescript-eslint.io/rules/no-unsafe-return/
    // https://typescript-eslint.io/rules/no-unsafe-argument/
    // https://typescript-eslint.io/rules/no-unsafe-assignment/
    "@typescript-eslint/no-unsafe-call": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "@typescript-eslint/no-unsafe-return": "off",
    "@typescript-eslint/no-unsafe-argument": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
  },
};
