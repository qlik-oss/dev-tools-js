module.exports = {
  parserOptions: {
    ecmaVersion: 2020,
  },
  env: {
    node: true,
    browser: false,
  },
  extends: ["airbnb-base", "@qlik/eslint-config-base", "prettier"],
  rules: {
    "no-console": "off",
  },
};
