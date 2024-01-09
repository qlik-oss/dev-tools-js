module.exports = {
  overrides: [
    {
      files: ["**/__tests__/**/*.{js,ts,jsx,tsx}", "**/*.{spec,test}.{js,ts,jsx,tsx}"],
      plugins: ["vitest"],
      extends: ["plugin:vitest/recommended"],
      rules: {
        "import/no-extraneous-dependencies": "off",
      },
    },
  ],
};
