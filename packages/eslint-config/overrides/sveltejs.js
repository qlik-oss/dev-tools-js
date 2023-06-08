module.exports = {
  overrides: [
    {
      files: ["*.svelte"],
      extends: [
        "airbnb-base",
        "../configs/airbnb-base-mod",
        "plugin:svelte/recommended",
        "plugin:svelte/prettier",
        "prettier",
        "../configs/env",
      ],
      parser: "svelte-eslint-parser",

      parserOptions: {
        extraFileExtensions: [".svelte"],
      },
      rules: {
        "no-undef-init": "off",
        "no-unused-vars": "off",
        "import/no-mutable-exports": "off",
      },
    },
  ],
};
