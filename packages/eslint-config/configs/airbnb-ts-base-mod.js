module.exports = {
  extends: ["./airbnb-base-mod"],
  rules: {
    // modifies airbnb ts default rules
    "lines-between-class-members": "off",
    "@typescript-eslint/lines-between-class-members": "off",

    // discouraged https://palantir.github.io/tslint/rules/no-use-before-declare/
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": "off",

    "dot-notation": "off",
    "@typescript-eslint/dot-notation": "off",

    "@typescript-eslint/prefer-ts-expect-error": "error",
    "@typescript-eslint/no-misused-promises": [
      "error",
      {
        checksConditionals: false,
      },
    ],

    // no-unsafe-* does not work good
    "@typescript-eslint/no-unsafe-call": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "@typescript-eslint/no-unsafe-return": "off",
    "@typescript-eslint/no-unsafe-argument": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
  },
};
