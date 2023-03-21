module.exports = {
  overrides: [
    {
      files: ["test/**/*", "**/__test__/**", "**/*.spec.{js,ts,jsx,tsx}", "**/*.test.{js,ts,jsx,tsx}"],
      plugins: ["vitest"],
      rules: {
        "import/no-extraneous-dependencies": "off",
      },
    },
  ],
};
