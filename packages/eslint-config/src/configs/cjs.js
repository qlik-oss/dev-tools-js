// @ts-check
import prettier from "eslint-config-prettier";
import { mergeConfigs } from "../utils/config.js";
import { baseCjsJS, baseCjsTS, baseEsmJS, baseEsmTS } from "./shared/node.js";

/**
 * CJS config for javascript in node
 * @type {import("../types/index.js").ESLintFlatConfig}
 */
const cjsJS = mergeConfigs(
  // base it on the recommended javascript config
  baseCjsJS,
  // add qlik's recommended node commonjs config for javascript
  {
    name: "node-cjs-js",
    files: ["**/*.{js,cjs}"],
  },
  prettier,
);

/**
 * CJS config for typescript in node
 * @type {import("../types/index.js").ESLintFlatConfig}
 */
const cjsTS = mergeConfigs(
  // base it on the recommended typescript config
  baseCjsTS,
  // add qlik's recommended node commonjs config for typescript
  {
    name: "node-cjs-ts",
    files: ["**/*.{ts,cts}"],
  },
  prettier,
);

/**
 * Adding esm config for .mjs files
 * @type {import("../types/index.js").ESLintFlatConfig}
 */
const cjsMJS = mergeConfigs(
  baseEsmJS,
  {
    name: "node-cjs-mjs",
    files: ["**/*.mjs"],
  },
  prettier,
);

/**
 * Adding esm config for .mts files
 * @type {import("../types/index.js").ESLintFlatConfig}
 */
const cjsMTS = mergeConfigs(
  baseEsmTS,
  {
    name: "node-cjs-mts",
    files: ["**/*.mts"],
  },
  prettier,
);

export default [cjsJS, cjsTS, cjsMJS, cjsMTS];
export { cjsJS, cjsTS };
