module.exports = {
  overrides: [
    {
      files: ["*.ts"],
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "airbnb-base",
        "airbnb-typescript/base",
        "../configs/airbnb-ts-base-mod",
        "prettier",
        "../configs/env",
      ],
      settings: {
        "import/resolver": {
          typescript: {}, // this loads <rootdir>/tsconfig.json to eslint
        },
      },
      plugins: ["@typescript-eslint"],
      parser: "@typescript-eslint/parser",
    },
  ],
};
