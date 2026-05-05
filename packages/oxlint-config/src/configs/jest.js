// @ts-check
import jestRules from "./shared/default-rules/jest.js";
import testRules from "./shared/default-rules/test.js";
import { baseBrowserConfig, commonjsOverride } from "./shared/base.js";
import { jestPlugins } from "./shared/plugins.js";
import testFiles from "./shared/test-files.js";

/** @type {NonNullable<import("oxlint").OxlintConfig["overrides"]>[number]} */
const jestOverride = {
  files: testFiles,
  plugins: jestPlugins,
  env: {
    ...baseBrowserConfig.env,
    jest: true,
  },
  rules: {
    ...testRules,
    ...jestRules,
  },
};

/** @type {import("oxlint").OxlintConfig} */
const jest = {
  ...baseBrowserConfig,
  overrides: [commonjsOverride, jestOverride],
};

export default jest;
