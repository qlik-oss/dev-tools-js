// @ts-check
import js from "@eslint/js";
import tsParser from "@typescript-eslint/parser";
import prettier from "eslint-config-prettier";
import eslintPluginImportX from "eslint-plugin-import-x";
import globals from "globals";
import tsconfig from "typescript-eslint";
import { mergeConfigs } from "../utils/config.js";
import eslintCoreRules from "./rules/eslint-core.js";
import importXRules from "./rules/import-x.js";
import typescriptRules from "./rules/typescript.js";

const baseConfig = mergeConfigs(
  // basic js config
  js.configs.recommended,
  // import-x plugin config
  eslintPluginImportX.flatConfigs.recommended,
  {
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        warnOnUnsupportedTypeScriptVersion: false,
      },
      ecmaVersion: "latest",
      sourceType: "module",
    },
    rules: {
      // add our recommended rules
      ...eslintCoreRules,
      ...importXRules,
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
  // add qlik's recommended javascript config
  {
    name: "recommended-js",
    files: ["**/*.js", "**/*.mjs", "**/*.cjs"],
  },
  // prettier,
);

/**
 * @type {import("../types/index.js").ESLintFlatConfig}
 */
const recommendedTS = mergeConfigs(
  // base it on base config
  baseConfig,
  // add recommended typescript config
  ...tsconfig.configs.recommended,
  // add import-x recommended typescript config
  eslintPluginImportX.flatConfigs.typescript,
  // add qlik's recommended typescript config
  {
    name: "recommended-ts",
    files: ["**/*.ts", "**/*.tsx", "**/*.mts", "**/*.cts", "**/*.d.ts"],
    languageOptions: {
      parserOptions: {
        parser: tsParser,
        projectService: true,
      },
    },
    rules: typescriptRules,
  },
  // prettier,
);

export default [recommendedJS, recommendedTS];
export { recommendedJS, recommendedTS };
