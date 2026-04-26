import type { OxlintConfig } from "oxlint";

declare const configs: {
  cjs: OxlintConfig;
  esbrowser: OxlintConfig;
  esm: OxlintConfig;
  react: OxlintConfig;
  recommended: OxlintConfig;
  vitest: OxlintConfig;
};

declare const qlikOxlintConfig: typeof configs & {
  configs: typeof configs;
};

export default qlikOxlintConfig;
export const cjs: OxlintConfig;
export const esbrowser: OxlintConfig;
export const esm: OxlintConfig;
export const react: OxlintConfig;
export const recommended: OxlintConfig;
export const vitest: OxlintConfig;
