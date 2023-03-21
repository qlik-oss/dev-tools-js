module.exports = {
  overrides: [
    {
      files: ["**/test/integration/**", "**/test/e2e/**", "playwright.config.ts", "playwright.config.js"],
      extends: ["plugin:playwright/playwright-test"],
      rules: {
        "no-console": "off",
        "import/no-extraneous-dependencies": "off",
      },
    },
  ],
};
