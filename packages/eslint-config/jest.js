module.exports = {
  overrides: [
    {
      files: [
        "test/**/*.{js,ts,jsx,tsx}",
        "**/__test__/**/*.{js,ts,jsx,tsx}",
        "**/__tests__/**/*.{js,ts,jsx,tsx}",
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
