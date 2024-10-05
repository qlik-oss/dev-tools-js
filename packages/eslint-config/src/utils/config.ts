import tsEslint from "typescript-eslint";
import type { ESLintFlatConfig } from "../types/index.js";
import { merge } from "./merge.js";

export function mergeConfigs(...configs: ESLintFlatConfig[]): ESLintFlatConfig {
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
