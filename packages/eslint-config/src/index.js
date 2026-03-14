// Import ESLint configuration modules
import cjs, { cjsJS, cjsTS } from "./configs/cjs.js";
import esbrowser, { esbrowserJS, esbrowserTS } from "./configs/esbrowser.js";
import esm, { esmJS, esmTS } from "./configs/esm.js";
import playwright from "./configs/playwright.js";
import react, { reactJS, reactTS } from "./configs/react.js";
import recommended, { recommendedJS, recommendedTS } from "./configs/recommended.js";
import vitest from "./configs/vitest.js";

/**
 * @satisfies {import("./types/index.js").QlikEslintConfig}
 */
const qlikEslintConfig = {
  configs: {
    cjs,
    esbrowser,
    esm,
    playwright,
    react,
    recommended,
    vitest,
  },
};

export default qlikEslintConfig;

export { cjsJS, cjsTS, esbrowserJS, esbrowserTS, esmJS, esmTS, reactJS, reactTS, recommendedJS, recommendedTS };
