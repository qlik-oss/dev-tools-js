// @ts-check
import prettier from "eslint-config-prettier";
import eslintPluginSvelte from "eslint-plugin-svelte";
import svelteParser from "svelte-eslint-parser";
import tsEslint from "typescript-eslint";
import { mergeConfigs } from "../utils/config.js";
import { recommendedJS, recommendedTS } from "./recommended.js";
import svelteRules from "./rules/svelte.js";

/**
 * @type {import("../types/index.js").ESLintFlatConfig}
 * config for Svelte https://github.com/sveltejs/eslint-plugin-svelte
 */
const svelteJS = mergeConfigs(
  // base it on svelte plugin recommended config
  ...eslintPluginSvelte.configs["flat/recommended"],
  // add qlik's recommended svelte config
  {
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
      ...svelteRules,
      // modify rules from eslint-plugin-svelte here

      // Conflicting rules
      // https://github.com/sveltejs/eslint-plugin-svelte3/blob/master/OTHER_PLUGINS.md
      "import-x/first": "off",
      "import-x/no-duplicates": "off",
      "import-x/no-mutable-exports": "off",
      "import-x/no-unresolved": "off",
      "import-x/prefer-default-export": "off",
      "import-x/extensions": "off",

      // Issues with TypeScript rules
      "@typescript-eslint/no-unsafe-call": "off",
      "@typescript-eslint/no-unsafe-return": "off",
      "@typescript-eslint/no-unsafe-argument": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",

      // Issues with function types that define parameters
      "no-unused-vars": "off",
    },
  },
  prettier,
);

export default [recommendedJS, recommendedTS, svelteJS];
export { svelteJS };
