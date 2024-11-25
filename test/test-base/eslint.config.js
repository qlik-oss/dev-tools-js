import qlik from "@qlik/eslint-config";

const config = qlik.compose(
  // adds the base config for both JS and TS
  ...qlik.configs.recommended,
  ...qlik.configs.vitest,
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
