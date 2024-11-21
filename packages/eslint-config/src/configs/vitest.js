// @ts-check
import vitestPlugin from "@vitest/eslint-plugin";
// @ts-expect-error no types yet
import testingLibraryPlugin from "eslint-plugin-testing-library";
import { mergeConfigs } from "../utils/config.js";
import rules from "./rules/index.js";

/**
 * @satisfies {import("../types/index.js").ESLintFlatConfig["rules"]}
 */
const vitestCommon = {};

/**
 * @type {import("../types/index.js").ESLintFlatConfig}
 * config for jest https://github.com/jest-community/eslint-plugin-jest
 */
const vitest = mergeConfigs(vitestCommon, {
  name: "vitest-js",
  plugins: {
    vitest: vitestPlugin,
    "testing-library": testingLibraryPlugin,
  },

  files: ["**/__test__/**/*.{js,jsx,ts,tsx}", "**/__tests__/**/*.{js,jsx,ts,tsx}"],

  rules: {
    // modify rules from eslint-plugin-vitest here
    ...vitestPlugin.configs.recommended.rules, // you can also use vitest.configs.all.rules to enable all rules
    ...rules.testingLibraryRules,
    "no-magic-numbers": "off",
    "@typescript-eslint/no-magic-numbers": "off",
  },
});

export default [vitest];
export { vitest };
