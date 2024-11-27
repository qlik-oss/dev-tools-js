// @ts-check
import playwrightEslint from "eslint-plugin-playwright";
import { mergeConfigs } from "../utils/config.js";

/**
 * @type {import("../types/index.js").ESLintFlatConfig}
 * config for Playwright https://github.com/playwright-community/eslint-plugin-playwright
 */
const playwright = mergeConfigs(
  // base it on the recommended config
  playwrightEslint.configs["flat/recommended"],
  // add qlik's recommended playwright config
  {
    name: "playwright",
    files: ["tests/**", "test/**"],
    rules: {
      ...playwrightEslint.configs["flat/recommended"].rules,
      // modify rules from eslint-plugin-playwright here
    },
  },
);

export default [playwright];
export { playwright };
