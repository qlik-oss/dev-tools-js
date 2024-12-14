import cjs, { cjsJS, cjsTS } from "./configs/cjs.js";
import esm, { esmJS, esmTS } from "./configs/esm.js";
import jest from "./configs/jest.js";
import playwright from "./configs/playwright.js";
import react, { reactJS, reactTS } from "./configs/react.js";
import recommended, { recommendedJS, recommendedTS } from "./configs/recommended.js";
import svelte, { svelteJS } from "./configs/svelte.js";
import vitest from "./configs/vitest.js";
import compose from "./utils/compose.js";

declare namespace qlikEslintConfig {
  export namespace configs {
    export { cjs };
    export { esm };
    export { playwright };
    export { jest };
    export { react };
    export { recommended };
    export { svelte };
    export { vitest };
  }
  export { compose };
}

export default qlikEslintConfig;
export { cjsJS, cjsTS, esmJS, esmTS, reactJS, reactTS, recommendedJS, recommendedTS, svelteJS };
