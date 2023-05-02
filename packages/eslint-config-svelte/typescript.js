module.exports = {
  extends: ["@qlik/eslint-config/typescript"],
  overrides: [
    {
      files: ["**/*.svelte"],
      processor: "svelte3/svelte3",
      parserOptions: {
        project: ["**/tsconfig.json"],
        extraFileExtensions: [".svelte"],
      },
      extends: ["@qlik/eslint-config-base/typescript"],
      plugins: ["svelte3"],
      settings: {
        "svelte3/typescript": true, // load TypeScript as peer dependency
      },
      rules: {
        "import/first": "off", // import order cannot be determined correctly in .svelte components
        "import/no-mutable-exports": "off", // to dismiss `export let prop = 'default'` warning
        "no-labels": "off",
        "no-restricted-syntax": ["error", "ForInStatement", "ForOfStatement", "WithStatement"], // remove LabeledStatement from the list
      },
    },
  ],
};
