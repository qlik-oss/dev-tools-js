// @ts-check
import { baseCommonjsConfig, esmOverride, jsFilesTypeAwareOff } from "./shared/base.js";

/** @type {import("oxlint").OxlintConfig} */
const cjs = {
  ...baseCommonjsConfig,
  overrides: [esmOverride, jsFilesTypeAwareOff],
};

export default cjs;
