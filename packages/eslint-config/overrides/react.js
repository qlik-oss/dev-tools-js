module.exports = {
  overrides: [
    {
      files: ["*.js", "*.jsx"],
      extends: ["airbnb", "airbnb/hooks", "../configs/airbnb-mod", "prettier", "../configs/env"],
    },
    {
      files: ["*.ts", "*.tsx"],
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "airbnb",
        "airbnb/hooks",
        "airbnb-typescript",
        "../configs/airbnb-ts-mod",
        "prettier",
        "../configs/env",
      ],
      plugins: ["@typescript-eslint"],
      parser: "@typescript-eslint/parser",
      rules: {
        "react/require-default-props": "off",
        "react/prop-types": "off",
      },
    },
  ],
};
