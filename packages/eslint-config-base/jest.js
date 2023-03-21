module.exports = {
  overrides: [
    {
      files: [
        "test/**/*",
        "**/__test__/**",
        "**/__tests__/**",
        "**/*.spec.{js,ts,jsx,tsx}",
        "**/*.test.{js,ts,jsx,tsx}",
      ],
      extends: ["plugin:jest/recommended"],
      plugins: ["jest", "testing-library"],
      env: {
        commonjs: true,
        node: true,
        "jest/globals": true,
      },
      rules: {
        "import/no-extraneous-dependencies": "off",
      },
    },
  ],
};
