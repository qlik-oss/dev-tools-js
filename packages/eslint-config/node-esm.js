module.exports = {
  parserOptions: {
    ecmaVersion: 2022,
  },
  env: {
    node: true,
    browser: false,
  },
  extends: ["airbnb-base", "@qlik/eslint-config-base", "prettier"],
  rules: {
    "no-console": "off",
    "import/extensions": ["error", "ignorePackages"],
  },
};
