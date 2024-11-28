// @ts-check
import jestPlugin from "eslint-plugin-jest";
import testingLibraryPlugin from "eslint-plugin-testing-library";
import { mergeConfigs } from "../utils/config.js";

/**
 * @type {import("../types/index.js").ESLintFlatConfig}
 * config for jest https://github.com/jest-community/eslint-plugin-jest
 */
const jest = mergeConfigs(
  // base it on the recommended jest config
  jestPlugin.configs["flat/recommended"],
  // add testing-library plugin recommended config for react
  testingLibraryPlugin.configs["flat/react"],
  // add qlik's recommended jest config
  {
    name: "jest",
    files: ["**/__test__/**/*.{js,jsx,ts,tsx}", "**/__tests__/**/*.{js,jsx,ts,tsx}"],
    rules: {
      // ...testingLibraryRules,
      // modify rules from eslint-plugin-jest here
    },
  },
);

export default [jest];
export { jest };
