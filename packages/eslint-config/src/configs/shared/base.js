import js from "@eslint/js";
import eslintPluginImportLite from "eslint-plugin-import-lite";
import globals from "globals";
import tsconfig from "typescript-eslint";
import { mergeConfigs } from "../../utils/config.js";
import eslintCoreRules from "./default-rules/eslint-core.js";
import typescriptRules from "./default-rules/typescript.js";

/**
 * @type {import("../../types/index.js").ESLintFlatConfig}
 */
const baseConfig = mergeConfigs(
  // basic js config
  js.configs.recommended,
  // import--lite plugin config
  eslintPluginImportLite.configs.recommended,
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
      // add or modify recommended default rules
      ...eslintCoreRules,
    },
  },
);

/**
 * @type {import("../../types/index.js").ESLintFlatConfig}
 */
const baseConfigJS = mergeConfigs(
  baseConfig,
  // tsconfig.configs.base sets eslint parser to use the typescript parser to parse .js files - handles all modern syntax
  tsconfig.configs.base,
  // add qlik's recommended javascript config
);

/**
 * @type {import("../../types/index.js").ESLintFlatConfig}
 */
const baseConfigTS = mergeConfigs(
  // base it on base config
  baseConfig,
  // add recommended typescript config
  ...tsconfig.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
    rules: {
      ...typescriptRules,
      // add qlik's recommended typescript config for typescript here if needed
    },
  },
);

export { baseConfigJS, baseConfigTS };
