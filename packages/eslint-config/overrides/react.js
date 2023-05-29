module.exports = {
  overrides: [
    {
      files: ["*.js", "*.jsx"],
      extends: ["airbnb", "../configs/airbnb-mod", "prettier", "../configs/env"],
    },
    {
      files: ["*.ts", "*.tsx"],
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "airbnb",
        "airbnb-typescript",
        "../configs/airbnb-ts-mod",
        "prettier",
        "../configs/env",
      ],
      plugins: ["@typescript-eslint"],
      parser: "@typescript-eslint/parser",
    },
  ],
};
