module.exports = {
  overrides: [
    {
      files: ["**/*.js", "**/*.jsx"],
      extends: ["airbnb", "airbnb/hooks", "@qlik/eslint-config-base", "prettier"],
      rules: {
        "react/jsx-props-no-spreading": "off",
        "react/jsx-uses-react": "off",
        "react/react-in-jsx-scope": "off",
        "react/forbid-prop-types": "off",
        "import/no-extraneous-dependencies": [
          "off",
          {
            devDependencies: [
              "**/jest-setup.js", // jest setup
              "**/webpack.config.js", // webpack config
            ],
          },
        ],
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
