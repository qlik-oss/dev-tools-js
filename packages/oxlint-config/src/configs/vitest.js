// @ts-check
import { baseBrowserConfig, commonjsOverride } from "./shared/base.js";
import { vitestPlugins } from "./shared/plugins.js";

const testFiles = [
  "**/__test{,s}__/**/*.{js,jsx,ts,tsx}",
  "**/{test{,s},mock{,s}}/**/*.{js,jsx,ts,tsx}",
  "**/*.{test,spec}.{js,jsx,ts,tsx}",
];

/** @type {import("oxlint").OxlintConfig} */
const vitest = {
  ...baseBrowserConfig,
  plugins: vitestPlugins,
  env: {
    ...baseBrowserConfig.env,
    vitest: true,
  },
  rules: {
    ...baseBrowserConfig.rules,
    "no-console": "off",
    "typescript/no-explicit-any": "warn",
    "typescript/no-non-null-assertion": "off",
    "typescript/no-unsafe-argument": "off",
    "typescript/no-unsafe-assignment": "off",
    "typescript/no-unsafe-call": "off",
    "typescript/no-unsafe-member-access": "off",
    "typescript/no-unsafe-return": "off",
    "typescript/unbound-method": "off",
    "vitest/require-mock-type-parameters": "off",
  },
  overrides: [
    commonjsOverride,
    {
      files: testFiles,
      env: {
        vitest: true,
      },
    },
  ],
};

export default vitest;
