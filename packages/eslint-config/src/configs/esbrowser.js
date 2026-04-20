// @ts-check
import prettier from "eslint-config-prettier";
import globals from "globals";
import { mergeConfigs } from "../utils/config.js";
import { baseConfigJS, baseConfigTS } from "./shared/base.js";
import { baseCjsJS, baseCjsTS } from "./shared/node.js";

/**
 * ESM config for javascript in browsers
 * @type {import("../types/index.js").ESLintFlatConfig}
 */
const esbrowserJS = mergeConfigs(
  // base it on the recommended javascript config
  baseConfigJS,
  // add qlik's recommended node esm config for javascript
  {
    name: "esbrowser-js",
    files: ["**/*.{js,mjs}"],
    languageOptions: {
      globals: globals.browser,
      sourceType: "module",
    },
    rules: {
      // modify javascript specific rules for node esm here if needed
    },
  },
  prettier,
);

/**
 * ESM config for typescript in browsers
 * @type {import("../types/index.js").ESLintFlatConfig}
 */
const esbrowserTS = mergeConfigs(
  // base it on the recommended typescript config
  baseConfigTS,
  // add qlik's recommended node esm config for typescript
  {
    name: "esbrowser-ts",
    files: ["**/*.{ts,mts}"],
    languageOptions: {
      globals: globals.browser,
      sourceType: "module",
    },
    rules: {
      // modify typescript specific rules for node esm here if needed
    },
  },
  prettier,
);

/**
 * Adding commonjs config for .cjs files
 * @type {import("../types/index.js").ESLintFlatConfig}
 */
const esbrowserCJS = mergeConfigs(
  baseCjsJS,
  {
    name: "browser-esm-cjs",
    files: ["**/*.cjs"],
  },
  prettier,
);

/**
 * Adding commonjs config for .cts files
 * @type {import("../types/index.js").ESLintFlatConfig}
 */
const esbrowserCTS = mergeConfigs(
  baseCjsTS,
  {
    name: "browser-esm-cts",
    files: ["**/*.cts"],
  },
  prettier,
);

export default [esbrowserJS, esbrowserTS, esbrowserCJS, esbrowserCTS];
export { esbrowserJS, esbrowserTS };
