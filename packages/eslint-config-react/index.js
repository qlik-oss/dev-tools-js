module.exports = {
  overrides: [
    {
      files: ["**/*.js", "**/*.jsx"],
      extends: ["airbnb", "airbnb/hooks", "@qlik/eslint-config-base", "prettier"],
      rules: {
        // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-extraneous-dependencies.md
        "import/no-extraneous-dependencies": [
          "off",
          {
            devDependencies: ["**/jest-setup.js", "**/webpack.config.js", "**/svelte.config.js"],
          },
        ],
        "react/jsx-props-no-spreading": "off",
        "react/jsx-uses-react": "off",
        "react/react-in-jsx-scope": "off",
        "react/forbid-prop-types": "off",
        "react/function-component-definition": [
          2,
          {
            namedComponents: "arrow-function",
            unnamedComponents: "arrow-function",
          },
        ],
      },
    },
  ],
};
