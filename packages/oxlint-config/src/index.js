// @ts-check
import cjs from "./configs/cjs.js";
import esbrowser from "./configs/esbrowser.js";
import esm from "./configs/esm.js";
import react from "./configs/react.js";
import recommended from "./configs/recommended.js";
import vitest from "./configs/vitest.js";

const configs = {
  cjs,
  esbrowser,
  esm,
  react,
  recommended,
  vitest,
};

/** @type {{ configs: typeof configs, cjs: import("oxlint").OxlintConfig, esbrowser: import("oxlint").OxlintConfig, esm: import("oxlint").OxlintConfig, react: import("oxlint").OxlintConfig, recommended: import("oxlint").OxlintConfig, vitest: import("oxlint").OxlintConfig }} */
const qlikOxlintConfig = {
  configs,
  cjs,
  esbrowser,
  esm,
  react,
  recommended,
  vitest,
};

export default qlikOxlintConfig;
export { cjs, esbrowser, esm, react, recommended, vitest };
