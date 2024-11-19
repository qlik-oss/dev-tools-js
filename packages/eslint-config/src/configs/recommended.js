// @ts-check
import js from "@eslint/js";
import tsParser from "@typescript-eslint/parser";
import eslintPluginImportX from "eslint-plugin-import-x";
import globals from "globals";
import tsconfig from "typescript-eslint";
import { mergeConfigs } from "../utils/config.js";
import rules from "./rules/index.js";

/**
 * @type {import("../types/index.js").ESLintFlatConfig}
 */
const recommendedJS = mergeConfigs(
  {
    files: ["**/*.js", "**/*.jsx", "**/*.mjs", "**/*.cjs"],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        warnOnUnsupportedTypeScriptVersion: false,
      },
      ecmaVersion: 2021,
      sourceType: "module",
    },
  },
  // tsconfig.configs.base sets eslint parser to use the typescript parser to parse .js files - handles all modern syntax
  tsconfig.configs.base,
  js.configs.recommended,
  eslintPluginImportX.flatConfigs.recommended,
  {
    name: "recommended-js",
    rules: {
      ...rules.importXRules,
      ...rules.eslintCoreRules,
    },
  },
);

/**
 * @type {import("../types/index.js").ESLintFlatConfig}
 */
const recommendedTS = mergeConfigs(
  recommendedJS,
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.mts", "**/*.cts", "**/*.d.ts"],
    languageOptions: {
      parserOptions: {
        parser: tsParser,
        projectService: true,
        ecmaVersion: "latest",
        sourceType: "module",
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
