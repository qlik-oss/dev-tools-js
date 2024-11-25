import tsEslint from "typescript-eslint";
import { merge } from "./merge.js";

/**
 * Merges multiple configs into one.
 *
 * @param {...(import("../types/index.js").ESLintFlatConfig)} configs
 * @returns {import("../types/index.js").ESLintFlatConfig}
 */
export function mergeConfigs(...configs) {
  // merge all configs into one
  const mergedConfig = configs.reduce((acc, conf) => {
    return merge(acc, conf);
  }, {});

  if (mergedConfig.name && !mergedConfig.name.startsWith("@qlik/eslint-config/")) {
    mergedConfig.name = `@qlik/eslint-config/${mergedConfig.name}`;
  }
  return mergedConfig;
}

export const config = tsEslint.config;
