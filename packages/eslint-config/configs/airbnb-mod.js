module.exports = {
  extends: ["./airbnb-base-mod.js"],
  rules: {
    // modifies airbnb rules for react
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
};
