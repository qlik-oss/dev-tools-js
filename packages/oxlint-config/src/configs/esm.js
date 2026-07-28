// @ts-check
import { baseNodeConfig, commonjsOverride, jsFilesTypeAwareOff } from "./shared/base.js";

/** @type {import("oxlint").OxlintConfig} */
const esm = {
  ...baseNodeConfig,
  rules: {
    ...baseNodeConfig.rules,
    "import/no-unassigned-import": "off",
    "import/extensions": ["error", "ignorePackages"],
  },
  overrides: [commonjsOverride, jsFilesTypeAwareOff],
};

export default esm;
