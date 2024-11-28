// @ts-check
import vitestPlugin from "@vitest/eslint-plugin";
import testingLibraryPlugin from "eslint-plugin-testing-library";
import { mergeConfigs } from "../utils/config.js";

/**
 * @type {import("../types/index.js").ESLintFlatConfig}
 * config for jest https://github.com/jest-community/eslint-plugin-jest
 */
const vitest = mergeConfigs(
  // base it on the recommended vitest config
  vitestPlugin.configs.recommended,
  // add testing-library plugin recommended config for react
  testingLibraryPlugin.configs["flat/react"],
  // add qlik's recommended vitest config
  {
    name: "vitest",
    files: ["**/__test__/**/*.{js,jsx,ts,tsx}", "**/__tests__/**/*.{js,jsx,ts,tsx}"],
    rules: {
      // modify rules from eslint-plugin-vitest here
    },
  },
);

export default [vitest];
export { vitest };
