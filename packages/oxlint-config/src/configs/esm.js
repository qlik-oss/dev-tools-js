// @ts-check
import { baseNodeConfig, commonjsOverride } from "./shared/base.js";

/** @type {import("oxlint").OxlintConfig} */
const esm = {
  ...baseNodeConfig,
  rules: {
    ...baseNodeConfig.rules,
    "import/no-unassigned-import": "off",
  },
  overrides: [commonjsOverride],
};

export default esm;
