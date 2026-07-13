// @ts-check
import { baseBrowserConfig, commonjsOverride, jsFilesTypeAwareOff } from "./shared/base.js";

/** @type {import("oxlint").OxlintConfig} */
const recommended = {
  ...baseBrowserConfig,
  overrides: [commonjsOverride, jsFilesTypeAwareOff],
};

export default recommended;
