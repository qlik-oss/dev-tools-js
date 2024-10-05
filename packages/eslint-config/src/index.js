// Import ESLint configuration modules
import esm from "./configs/esm.js";
import jest from "./configs/jest.js";
import node from "./configs/node.js";
import react from "./configs/react.js";
import recommended from "./configs/recommended.js";
import vitest from "./configs/vitest.js";
import compose from "./utils/compose.js";

/**
 * @typedef {Object} ESLintFlatConfig
 * Represents a flat ESLint configuration object.
 */

/**
 * @typedef {Object} ESLintFlatConfigWithExtend
 * Represents an ESLint configuration that may extend other configurations.
 */

/**
 * @typedef {Object} QlikEslintConfig
 * @property {Record<string, ESLintFlatConfig[]>} configs - The collection of ESLint configuration modules.
 * @property {function(...(import("./types/index.js").ESLintFlatConfigWithExtend)): ESLintFlatConfig[]} compose - Function to compose configurations.
 */

/**
 * @satisfies {QlikEslintConfig}
 */
const qlikEslintConfig = {
  configs: {
    esm,
    jest,
    node,
    react,
    recommended,
    vitest,
  },
  compose,
};

export default qlikEslintConfig;
