// Import ESLint configuration modules
import cjs from "./configs/cjs.js";
import esm from "./configs/esm.js";
import jest from "./configs/jest.js";
import playwright from "./configs/playwright.js";
import react from "./configs/react.js";
import recommended from "./configs/recommended.js";
import svelte from "./configs/svelte.js";
import vitest from "./configs/vitest.js";
import compose from "./utils/compose.js";

/**
 * @satisfies {import("./types/index.js").QlikEslintConfig}
 */
const qlikEslintConfig = {
  configs: {
    cjs,
    esm,
    jest,
    playwright,
    react,
    recommended,
    svelte,
    vitest,
  },
  compose,
};

export default qlikEslintConfig;
