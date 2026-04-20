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
    files: ["**/__test__/**/*.{js,jsx}", "**/__tests__/**/*.{js,jsx}", "mocks/**/*.js"],
    rules: {
      // turn off/modify rules that suitable for tests in JavaScript
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
    files: ["**/__test__/**/*.{ts,tsx}", "**/__tests__/**/*.{ts,tsx}", "mocks/**/*.ts"],
    rules: {
      // turn off/modify rules that suitable for tests in TypeScript

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
