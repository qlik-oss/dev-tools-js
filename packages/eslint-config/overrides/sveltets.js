module.exports = {
  overrides: [
    {
      files: ["*.svelte"],
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "airbnb-base",
        "airbnb-typescript/base",
        "../configs/airbnb-ts-base-mod",
        "plugin:svelte/recommended",
        "plugin:svelte/prettier",
        "prettier",
        "../configs/env",
      ],
      parser: "svelte-eslint-parser",

      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".svelte"],
      },
      rules: {
        "no-undef-init": "off",
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "import/no-mutable-exports": "off",
        // import/no-unresolved doesn't work properly in .svelte files, but ts takes care of this
        "import/no-unresolved": "off",
      },
    },
  ],
};
