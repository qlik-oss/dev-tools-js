// @ts-check
import reactRules from "./shared/default-rules/react.js";
import { baseBrowserConfig, commonjsOverride } from "./shared/base.js";
import { reactPlugins } from "./shared/plugins.js";

/** @type {import("oxlint").OxlintConfig} */
const react = {
  ...baseBrowserConfig,
  plugins: reactPlugins,
  rules: {
    ...baseBrowserConfig.rules,
    ...reactRules,
  },
  overrides: [commonjsOverride],
};

export default react;
