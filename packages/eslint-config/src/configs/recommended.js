// @ts-check
import js from "@eslint/js";
import eslintPluginImportX from "eslint-plugin-import-x";
import globals from "globals";
import tsconfig from "typescript-eslint";
import { mergeConfigs } from "../utils/config.js";
import { formatting } from "./formatting.js";
import rules from "./rules/index.js";

const recommendedJS = mergeConfigs(
  {
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
  eslintPluginImportX.flatConfigs.recommended,
  js.configs.recommended,
  {
    name: "recommended-js",
    rules: {
      ...rules.importXRules,
      ...rules.eslintCoreRules,
    },
  },
);

const recommendedTS = mergeConfigs(
  recommendedJS,
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.mts", "**/*.cts", "**/*.d.ts"],
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
  },
  eslintPluginImportX.flatConfigs.recommended,
  ...tsconfig.configs.recommended,
  {
    name: "recommended-ts",
    rules: rules.typescriptRules,
  },
);

export default [recommendedJS, recommendedTS, formatting];
export { recommendedJS, recommendedTS };
