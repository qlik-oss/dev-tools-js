module.exports = {
  extends: ["@qlik/eslint-config"],
  overrides: [
    {
      files: ["**/*.svelte"],
      processor: "svelte3/svelte3",
      plugins: ["svelte3"],
      rules: {
        "import/first": "off", // import order cannot be determined correctly in .svelte components
        "import/no-mutable-exports": "off", // to dismiss `export let prop = 'default'` warning
        "no-labels": "off",
        "no-restricted-syntax": ["error", "ForInStatement", "ForOfStatement", "WithStatement"], // remove LabeledStatement from the list
      },
    },
  ],
};
