module.exports = {
  overrides: [
    {
      files: ["playwright.config.{js,ts}", "**/{test,tests}/**"],
      extends: ["plugin:playwright/playwright-test"],
      rules: {
        "import/no-extraneous-dependencies": "off",
      },
    },
  ],
};
