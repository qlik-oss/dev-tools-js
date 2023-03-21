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
  },
};
