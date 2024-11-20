export default qlikEslintConfig;

declare namespace qlikEslintConfig {
  export namespace configs {
    export { esm };
    export { jest };
    export { node };
    export { react };
    export { recommended };
    export { vitest };
  }
  export { compose };
}
import esm from "./configs/esm.js";
import jest from "./configs/jest.js";
import node from "./configs/node.js";
import react from "./configs/react.js";
import recommended from "./configs/recommended.js";
import vitest from "./configs/vitest.js";
import compose from "./utils/compose.js";
