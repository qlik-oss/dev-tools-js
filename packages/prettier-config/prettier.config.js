const config = {
  printWidth: 120,
  plugins: [
    require.resolve("prettier-plugin-organize-imports"),
    require.resolve("prettier-plugin-packagejson"),
    require.resolve("prettier-plugin-svelte"),
    require.resolve("prettier-plugin-sh"),
  ],
  organizeImportsSkipDestructiveCodeActions: true,
};

module.exports = config;
