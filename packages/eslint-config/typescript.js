module.exports = {
  extends: ["./index.js"],
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      extends: ["airbnb-base", "airbnb-typescript/base", "@qlik/eslint-config-base/typescript", "prettier"],
      rules: {
        // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/prefer-default-export.md
        "import/prefer-default-export": "off",
        // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-extraneous-dependencies.md
        "import/no-extraneous-dependencies": [
          "off",
          {
            devDependencies: ["**/jest-setup.js", "**/webpack.config.js", "**/svelte.config.js"],
          },
        ],
      },
    },
  ],
};
