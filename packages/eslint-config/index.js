module.exports = {
  extends: ["airbnb-base", "@qlik/eslint-config-base", "prettier"],
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
};
