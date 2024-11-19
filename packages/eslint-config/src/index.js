// Import ESLint configuration modules
import esm from "./configs/esm.js";
import jest from "./configs/jest.js";
import node from "./configs/node.js";
import react from "./configs/react.js";
import recommended from "./configs/recommended.js";
import vitest from "./configs/vitest.js";
import compose from "./utils/compose.js";

/**
 * @satisfies {import("./types/index.js").QlikEslintConfig}
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
