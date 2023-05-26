module.exports = {
  overrides: [
    {
      files: ["**/test/integration/**", "**/test/e2e/**"],
      extends: ["plugin:playwright/playwright-test"],
      rules: {
        "import/no-extraneous-dependencies": "off",
      },
    },
  ],
};
