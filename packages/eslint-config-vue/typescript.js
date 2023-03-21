module.exports = {
  extends: ["@qlik/eslint-config/typescript"],
  overrides: [
    {
      files: ["**.vue"],
      parser: "vue-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        project: "**/tsconfig.eslint.json",
      },
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:vue/vue3-recommended",
        "@vue/typescript/recommended",
        "@vue/prettier",
      ],
      plugins: ["@typescript-eslint"],
    },
  ],
};
