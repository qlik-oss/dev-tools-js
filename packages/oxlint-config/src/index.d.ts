import type { OxlintConfig } from "oxlint";

type Configs = {
  cjs: OxlintConfig;
  esbrowser: OxlintConfig;
  esm: OxlintConfig;
  jest: OxlintConfig;
  react: OxlintConfig;
  recommended: OxlintConfig;
  vitest: OxlintConfig;
};

declare const qlikOxlintConfig: Configs & {
  configs: Configs;
};

export default qlikOxlintConfig;
export const cjs: OxlintConfig;
export const esbrowser: OxlintConfig;
export const esm: OxlintConfig;
export const jest: OxlintConfig;
export const react: OxlintConfig;
export const recommended: OxlintConfig;
export const vitest: OxlintConfig;
