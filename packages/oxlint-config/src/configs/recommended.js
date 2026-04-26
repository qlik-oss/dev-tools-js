// @ts-check
import { baseBrowserConfig, commonjsOverride } from "./shared/base.js";

/** @type {import("oxlint").OxlintConfig} */
const recommended = {
  ...baseBrowserConfig,
  overrides: [commonjsOverride],
};

export default recommended;
