// @ts-check
import jestRules from "./shared/default-rules/jest.js";
import { baseBrowserConfig, commonjsOverride } from "./shared/base.js";
import { jestPlugins } from "./shared/plugins.js";
import { createScopedTestRunnerPreset } from "./shared/test-preset.js";

/** @type {import("oxlint").OxlintConfig} */
const jest = createScopedTestRunnerPreset({
  baseConfig: baseBrowserConfig,
  commonjsOverride,
  plugins: jestPlugins,
  rootRules: jestRules,
  runnerRules: jestRules,
  runnerEnvName: "jest",
});

export default jest;
