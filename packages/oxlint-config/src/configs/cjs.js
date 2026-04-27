// @ts-check
import { baseCommonjsConfig, esmOverride } from "./shared/base.js";

/** @type {import("oxlint").OxlintConfig} */
const cjs = {
  ...baseCommonjsConfig,
  overrides: [esmOverride],
};

export default cjs;
