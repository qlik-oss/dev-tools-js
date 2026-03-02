import js from "@eslint/js";
import globals from "globals";
import tsconfig from "typescript-eslint";
import { mergeConfigs } from "../../utils/config.js";
import eslintCoreRules from "./default-rules/eslint-core.js";
import typescriptRules from "./default-rules/typescript.js";

/**
 * This is the base config that all other configs in this package extend from.
 * It includes the recommended eslint rules and some basic settings for parsing
 * modern javascript and typescript, as well as some of qlik's custom rules that
 * are not specific to any framework or environment. This config is meant to be
 * extended by other configs and not used directly.
 * @type {import("../../types/index.js").ESLintFlatConfig}
 */
const baseConfig = mergeConfigs(
  // basic js config
  js.configs.recommended,
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
 * This config is meant to be extended by javascript specific configs, it is not meant to be used directly.
 * Note that we are using the typescript parser to parse javascript files as well,
 * this is because it can handle all modern javascript syntax and features, and it
 * allows us to have a single parser for both javascript and typescript configs.
 * We can turn off typescript specific rules in the javascript configs if needed.
 * @type {import("../../types/index.js").ESLintFlatConfig}
 */
const baseConfigJS = mergeConfigs(
  baseConfig,
  // tsconfig.configs.base sets eslint parser to use the typescript parser to parse .js files - handles all modern syntax
  tsconfig.configs.base,
  // add qlik's recommended javascript config
);

/**
 * This config is meant to be extended by typescript specific configs,
 * it is not meant to be used directly.
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
