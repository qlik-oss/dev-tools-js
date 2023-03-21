module.exports = {
  extends: ["./index.js"],
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      extends: ["airbnb-base", "airbnb-typescript/base", "@qlik/eslint-config-base/typescript", "prettier"],
    },
  ],
};
