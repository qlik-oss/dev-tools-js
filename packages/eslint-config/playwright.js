module.exports = {
  overrides: [
    {
      files: ["playwright.config.{js,ts}", "**/{test,tests}/**/*.{ts,js}"],
      extends: ["plugin:playwright/playwright-test"],
      rules: {
        "import/no-extraneous-dependencies": "off",
        "playwright/no-networkidle": "off",
      },
    },
  ],
};
