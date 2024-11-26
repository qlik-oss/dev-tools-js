import qlikEslint from "@qlik/eslint-config";

const config = qlikEslint.compose(
  // adds the base config for both JS and TS
  ...qlikEslint.configs.react,
  ...qlikEslint.configs.svelte,
  ...qlikEslint.configs.vitest,
  {
    rules: {
      // Add any additional rules here
    },
  },
);

export default config;
