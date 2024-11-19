export default qlikEslintConfig;

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
import cjs from "./configs/cjs.js";
import esm from "./configs/esm.js";
import jest from "./configs/jest.js";
import playwright from "./configs/playwright.js";
import react from "./configs/react.js";
import recommended from "./configs/recommended.js";
import svelte from "./configs/svelte.js";
import vitest from "./configs/vitest.js";
import compose from "./utils/compose.js";
