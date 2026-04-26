// @ts-check
import recommendedRules from "./default-rules/recommended.js";
import { basePlugins } from "./plugins.js";

/** @type {NonNullable<import("oxlint").OxlintConfig["categories"]>} */
const categories = {
  correctness: "error",
  suspicious: "error",
};

/** @type {NonNullable<import("oxlint").OxlintConfig["env"]>} */
const browserEnv = {
  builtin: true,
  browser: true,
};

/** @type {NonNullable<import("oxlint").OxlintConfig["env"]>} */
const nodeEnv = {
  builtin: true,
  node: true,
};

/** @type {NonNullable<import("oxlint").OxlintConfig["env"]>} */
const commonjsEnv = {
  ...nodeEnv,
  commonjs: true,
};

/** @type {import("oxlint").OxlintConfig} */
const baseBrowserConfig = {
  plugins: basePlugins,
  env: browserEnv,
  categories,
  rules: recommendedRules,
};

/** @type {import("oxlint").OxlintConfig} */
const baseNodeConfig = {
  plugins: basePlugins,
  env: nodeEnv,
  categories,
  rules: {
    ...recommendedRules,
    "no-console": "off",
  },
};

/** @type {import("oxlint").OxlintConfig} */
const baseCommonjsConfig = {
  ...baseNodeConfig,
  env: commonjsEnv,
};

/** @type {NonNullable<import("oxlint").OxlintConfig["overrides"]>[number]} */
const commonjsOverride = {
  files: ["**/*.{cjs,cts}"],
  env: commonjsEnv,
  rules: {
    "no-console": "off",
  },
};

/** @type {NonNullable<import("oxlint").OxlintConfig["overrides"]>[number]} */
const esmOverride = {
  files: ["**/*.{mjs,mts}"],
  env: nodeEnv,
};

export { baseBrowserConfig, baseNodeConfig, baseCommonjsConfig, commonjsOverride, esmOverride };
