module.exports = {
  overrides: [
    {
      files: ["**/__tests__/**", "**/*.{spec|test}.{jsx?,tsx?}"],
      plugins: ["vitest"],
      extends: ["plugin:vitest/recommended"],
      rules: {
        "import/no-extraneous-dependencies": "off",
      },
    },
  ],
};
