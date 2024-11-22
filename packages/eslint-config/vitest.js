module.exports = {
  overrides: [
    {
      files: ["**/__tests__/**/*.{js,ts,jsx,tsx}", "**/*.{spec,test}.{js,ts,jsx,tsx}"],
      plugins: ["@vitest", "testing-library"],
      extends: ["plugin:@vitest/legacy-recommended"],
      rules: {
        "import/no-extraneous-dependencies": "off",
        "@typescript-eslint/unbound-method": "off",
      },
    },
  ],
};
