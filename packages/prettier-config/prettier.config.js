const config = {
  printWidth: 120,
  plugins: [
    require.resolve("prettier-plugin-organize-imports"),
    require.resolve("prettier-plugin-packagejson"),
  ],
  organizeImportsSkipDestructiveCodeActions: true,
};

module.exports = config;
