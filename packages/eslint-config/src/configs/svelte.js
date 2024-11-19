// @ts-check
import eslintPluginSvelte from "eslint-plugin-svelte";
import svelteParser from "svelte-eslint-parser";
import tsEslint from "typescript-eslint";
import { mergeConfigs } from "../utils/config.js";
import rules from "./rules/svelte.js";

/**
 * @type {import("../types/index.js").ESLintFlatConfig}
 * config for Svelte https://github.com/sveltejs/eslint-plugin-svelte
 */
const svelte = mergeConfigs(...eslintPluginSvelte.configs["flat/recommended"], {
  name: "svelte",
  files: ["**/*.svelte"],
  languageOptions: {
    parser: svelteParser,
    parserOptions: {
      parser: tsEslint.parser,
      extraFileExtensions: [".svelte"],
    },
  },
  rules: {
    ...rules,
    // modify rules from eslint-plugin-svelte here

    // Conflicting rules
    // https://github.com/sveltejs/eslint-plugin-svelte3/blob/master/OTHER_PLUGINS.md
    "import-x/first": "off",
    "import-x/no-duplicates": "off",
    "import-x/no-mutable-exports": "off",
    "import-x/no-unresolved": "off",
    "import-x/prefer-default-export": "off",
    "import-x/extensions": "off",

    "@typescript-eslint/no-unsafe-call": "off",
    "@typescript-eslint/no-unsafe-return": "off",
    "@typescript-eslint/no-unsafe-argument": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",

    // Issues with function types that define parameters
    "no-unused-vars": "off",
  },
});

export default [svelte];
export { svelte };
