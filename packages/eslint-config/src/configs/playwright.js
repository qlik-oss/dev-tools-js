// @ts-check
import playwrightEslint from "eslint-plugin-playwright";
import { mergeConfigs } from "../utils/config.js";

/**
 * @type {import("../types/index.js").ESLintFlatConfig}
 * config for Playwright https://github.com/playwright-community/eslint-plugin-playwright
 */
const playwright = mergeConfigs(playwrightEslint.configs["flat/recommended"], {
  name: "playwright",
  files: ["tests/**", "test/**"],
  rules: {
    ...playwrightEslint.configs["flat/recommended"].rules,
    // modify rules from eslint-plugin-playwright here
  },
});

export default [playwright];
export { playwright };
