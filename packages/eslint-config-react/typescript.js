module.exports = {
  extends: ["./index.js"],
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      extends: ["airbnb", "airbnb-typescript", "airbnb/hooks", "@qlik/eslint-config-base/typescript", "prettier"],
      rules: {
        "react/jsx-props-no-spreading": "off",
        "react/jsx-uses-react": "off",
        "react/react-in-jsx-scope": "off",
        "react/require-default-props": "off", // not needed with typescript
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
