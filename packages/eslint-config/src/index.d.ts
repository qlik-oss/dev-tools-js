import cjs, { cjsJS, cjsTS } from "./configs/cjs.js";
import esbrowser, { esbrowserJS, esbrowserTS } from "./configs/esbrowser.js";
import esm, { esmJS, esmTS } from "./configs/esm.js";
import react, { reactJS, reactTS } from "./configs/react.js";
import recommended, { recommendedJS, recommendedTS } from "./configs/recommended.js";
import vitest from "./configs/vitest.js";

declare namespace qlikEslintConfig {
  export namespace configs {
    export { cjs };
    export { esbrowser };
    export { esm };
    export { react };
    export { recommended };
    export { vitest };
  }
}

export default qlikEslintConfig;
export { cjsJS, cjsTS, esbrowserJS, esbrowserTS, esmJS, esmTS, reactJS, reactTS, recommendedJS, recommendedTS };
