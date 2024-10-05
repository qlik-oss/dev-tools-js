import esm from "./configs/esm.js";
import jest from "./configs/jest.js";
import node from "./configs/node.js";
import react from "./configs/react.js";
import recommended from "./configs/recommended.js";
import vitest from "./configs/vitest.js";
import type { ESLintFlatConfig, ESLintFlatConfigWithExtend } from "./types/index.js";
import compose from "./utils/compose.js";

export type QlikEslintConfig = {
  configs: {
    esm: ESLintFlatConfig[];
    jest: ESLintFlatConfig[];
    node: ESLintFlatConfig[];
    react: ESLintFlatConfig[];
    recommended: ESLintFlatConfig[];
    vitest: ESLintFlatConfig[];
  };
  compose: (...configs: ESLintFlatConfigWithExtend[]) => ESLintFlatConfig[];
};

export default {
  configs: {
    esm,
    jest,
    node,
    react,
    recommended,
    vitest,
  },
  compose,
} satisfies QlikEslintConfig;
