// @ts-check
import eslintPluginSvelte from "eslint-plugin-svelte";
import { mergeConfigs } from "../utils/config.js";

/**
 * @type {import("../types/index.js").ESLintFlatConfig}
 * config for Svelte https://github.com/sveltejs/eslint-plugin-svelte
 */
const playwright = mergeConfigs(...eslintPluginSvelte.configs["flat/recommended"], {
  name: "svelte",
  rules: {
    // modify rules from eslint-plugin-svelte here
  },
});

export default [playwright];
export { playwright };
