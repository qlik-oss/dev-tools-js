// @ts-check
import { baseNodeConfig, commonjsOverride } from "./shared/base.js";

/** @type {import("oxlint").OxlintConfig} */
const esm = {
  ...baseNodeConfig,
  overrides: [commonjsOverride],
};

export default esm;
