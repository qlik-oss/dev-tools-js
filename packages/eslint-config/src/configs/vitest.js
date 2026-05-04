// @ts-check
import vitestPlugin from "@vitest/eslint-plugin";
import testingLibraryPlugin from "eslint-plugin-testing-library";
import { mergeConfigs } from "../utils/config.js";

/**
 * @type {import("../types/index.js").ESLintFlatConfig}
 * config for vitest https://github.com/vitest/eslint-plugin-vitest
 */
const vitestJS = mergeConfigs(
  // base it on the recommended vitest config
  vitestPlugin.configs.recommended,
  // add testing-library plugin recommended config for react
  testingLibraryPlugin.configs["flat/react"],
  // add qlik's recommended vitest config
  {
    name: "vitest-js",
    files: ["**/__test{,s}__/**/*.{js,jsx}", "**/{test{,s},mock{,s}}/**/*.js", "**/*.{test,spec}.{js,jsx}"],
    rules: {
      // turn off/modify rules that suitable for tests in JavaScript
      "no-await-in-loop": "off",
    },
  },
);

/**
 * @type {import("../types/index.js").ESLintFlatConfig}
 * TypeScript-only vitest overrides
 */
const vitestTS = mergeConfigs(
  // base it on the recommended vitest config
  vitestPlugin.configs.recommended,
  // add testing-library plugin recommended config for react
  testingLibraryPlugin.configs["flat/react"],
  // add qlik's recommended vitest config
  {
    name: "vitest-ts",
    files: ["**/__test{,s}__/**/*.{ts,tsx}", "**/{test{,s},mock{,s}}/**/*.ts", "**/*.{test,spec}.{ts,tsx}"],
    rules: {
      // turn off/modify rules that suitable for tests in TypeScript
      "no-await-in-loop": "off",
      // turn off all the rules that are too strict for tests, and warn on any explicit any types
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-unsafe-call": "off",
      "@typescript-eslint/no-unsafe-argument": "off",
      "@typescript-eslint/no-unsafe-return": "off",
      "@typescript-eslint/unbound-method": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/no-explicit-any": "warn",
    },
  },
);

export default [vitestJS, vitestTS];
