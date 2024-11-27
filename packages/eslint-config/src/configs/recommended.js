// @ts-check
import js from "@eslint/js";
import tsParser from "@typescript-eslint/parser";
import eslintPluginImportX from "eslint-plugin-import-x";
import globals from "globals";
import tsconfig from "typescript-eslint";
import { mergeConfigs } from "../utils/config.js";
import rules from "./rules/index.js";

const baseConfig = mergeConfigs(
  {
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        warnOnUnsupportedTypeScriptVersion: false,
      },
      ecmaVersion: "latest",
      sourceType: "module",
    },
  },
  js.configs.recommended,
  eslintPluginImportX.flatConfigs.recommended,
  {
    rules: {
      ...rules.importXRules,
      ...rules.eslintCoreRules,
    },
  },
);

/**
 * @type {import("../types/index.js").ESLintFlatConfig}
 */
const recommendedJS = mergeConfigs(
  baseConfig,
  // tsconfig.configs.base sets eslint parser to use the typescript parser to parse .js files - handles all modern syntax
  tsconfig.configs.base,
  {
    name: "recommended-js",
    files: ["**/*.js", "**/*.mjs", "**/*.cjs"],
  },
);

/**
 * @type {import("../types/index.js").ESLintFlatConfig}
 */
const recommendedTS = mergeConfigs(
  baseConfig,
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.mts", "**/*.cts", "**/*.d.ts"],
    languageOptions: {
      parserOptions: {
        parser: tsParser,
        projectService: true,
      },
    },
  },
  ...tsconfig.configs.recommended,
  eslintPluginImportX.flatConfigs.recommended,
  eslintPluginImportX.flatConfigs.typescript,
  {
    name: "recommended-ts",
    rules: rules.typescriptRules,
  },
);

export default [recommendedJS, recommendedTS];
export { recommendedJS, recommendedTS };
