module.exports = {
  extends: ["plugin:svelte/recommended", "plugin:svelte/prettier"],
  parserOptions: {
    extraFileExtensions: [".svelte"],
  },
  overrides: [
    {
      files: ["*.svelte"],
      parser: "svelte-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
      },
      rules: {
        "no-undef-init": "off",
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "import/no-mutable-exports": "off",
      },
    },
  ],
};
