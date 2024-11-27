// @ts-check
import jestPlugin from "eslint-plugin-jest";
import testingLibraryPlugin from "eslint-plugin-testing-library";
import { mergeConfigs } from "../utils/config.js";
import testingLibraryRules from "./rules/testing-library.js";

/**
 * @type {import("../types/index.js").ESLintFlatConfig}
 * config for jest https://github.com/jest-community/eslint-plugin-jest
 */
const jest = mergeConfigs(jestPlugin.configs["flat/recommended"], {
  name: "jest-js",
  files: ["**/__test__/**/*.{js,jsx,ts,tsx}", "**/__tests__/**/*.{js,jsx,ts,tsx}"],
  plugins: {
    "testing-library": testingLibraryPlugin,
  },
  rules: {
    ...testingLibraryRules,
    // modify rules from eslint-plugin-jest here
  },
});

export default [jest];
export { jest };
