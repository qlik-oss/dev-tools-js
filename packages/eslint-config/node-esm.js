module.exports = {
  env: {
    node: true,
    browser: false,
  },
  extends: ["airbnb-base", "@qlik/eslint-config-base", "prettier"],
  rules: {
    "no-console": "off",
    "import/extensions": ["error", "ignorePackages"],
    "import/prefer-default-export": "off",
  },
};
