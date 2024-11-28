// Import ESLint configuration modules
import cjs, { cjsJS, cjsTS } from "./configs/cjs.js";
import esm, { esmJS, esmTS } from "./configs/esm.js";
import jest from "./configs/jest.js";
import playwright from "./configs/playwright.js";
import react, { reactJS, reactTS } from "./configs/react.js";
import recommended, { recommendedJS, recommendedTS } from "./configs/recommended.js";
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

export { cjsJS, cjsTS, esmJS, esmTS, reactJS, reactTS, recommendedJS, recommendedTS };
