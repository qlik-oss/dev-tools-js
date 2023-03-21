module.exports = {
  extends: ["@qlik/eslint-config"],
  overrides: [
    {
      files: ["*.vue"],
      extends: ["eslint:recommended", "plugin:vue/vue3-recommended", "@vue/prettier"],
    },
  ],
  settings: {
    "import/resolver": {
      alias: {
        map: [["@", "./src"]],
        extensions: [".js", ".vue"],
      },
    },
  },
};
