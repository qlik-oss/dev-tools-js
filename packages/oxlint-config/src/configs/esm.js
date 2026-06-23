// @ts-check
import { baseNodeConfig, commonjsOverride } from "./shared/base.js";

/** @type {import("oxlint").OxlintConfig} */
const esm = {
  ...baseNodeConfig,
  rules: {
    ...baseNodeConfig.rules,
    "import/no-unassigned-import": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "always",
        cjs: "never",
        mjs: "always",
        jsx: "never",
        ts: "never",
        cts: "never",
        mts: "never",
        tsx: "never",
      },
    ],
  },
  overrides: [commonjsOverride],
};

export default esm;
