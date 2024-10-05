// @ts-check
// @ts-expect-error no types yet
import jestPlugin from "eslint-plugin-jest";
// @ts-expect-error no types yet
import testingLibraryPlugin from "eslint-plugin-testing-library";
import { mergeConfigs } from "../utils/config.js";
import rules from "./rules/index.js";

// config for jest https://github.com/jest-community/eslint-plugin-jest
/**
 * @type {import("../types/index.js").ESLintFlatConfig}
 */
const jest = mergeConfigs(jestPlugin.configs["flat/recommended"], {
  name: "jest-js",
  files: ["**/__test__/**/*.{js,jsx,ts,tsx}", "**/__tests__/**/*.{js,jsx,ts,tsx}"],
  plugins: {
    "testing-library": testingLibraryPlugin,
  },
  rules: {
    ...rules.testingLibraryRules,
    // modify rules from eslint-plugin-jest here
  },
});

export default [jest];
export { jest };
