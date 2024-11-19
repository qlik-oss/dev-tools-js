import qlikEslint from "@qlik/eslint-config";

const config = qlikEslint.compose(
  // adds the base config for both JS and TS
  ...qlikEslint.configs.recommended,
  ...qlikEslint.configs.vitest,
  {
    rules: {
      "no-undef": "off",
      "no-console": "off",
      "no-magic-numbers": "off",
      "@typescript-eslint/no-magic-numbers": "off",
    },
  },
);

export default config;
