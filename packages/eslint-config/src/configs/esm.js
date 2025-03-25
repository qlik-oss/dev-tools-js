// @ts-check
import prettier from "eslint-config-prettier";
import globals from "globals";
import { mergeConfigs } from "../utils/config.js";
import nodeRules from "./rules/node.js";
import { baseConfigJS, baseConfigTS } from "./shared/base.js";
import { baseCjsJS, baseCjsTS } from "./shared/node.js";

/**
 * @satisfies {import("../types/index.js").ESLintFlatConfig["rules"]}
 */
const nodeEsmRules = {
  ...nodeRules,
  // modify rules for node esm here

  // Ensure consistent use of file extension within the import path
  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/extensions.md
  "import-x/extensions": [
    "error",
    "ignorePackages",
    {
      ts: "never",
      mts: "never",
      tsx: "never",
    },
  ],
};

/**
 * ESM config for javascript in node
 * @type {import("../types/index.js").ESLintFlatConfig}
 */
const esmJS = mergeConfigs(
  // base it on the recommended javascript config
  baseConfigJS,
  // add qlik's recommended node esm config for javascript
  {
    name: "node-esm-js",
    files: ["**/*.{js,mjs}"],
    languageOptions: {
      globals: globals.node,
      sourceType: "module",
    },
    rules: nodeEsmRules,
  },
  prettier,
);

/**
 * ESM config for typescript in node
 * @type {import("../types/index.js").ESLintFlatConfig}
 */
const esmTS = mergeConfigs(
  // base it on the recommended typescript config
  baseConfigTS,
  // add qlik's recommended node esm config for typescript
  {
    name: "node-esm-ts",
    files: ["**/*.{ts,mts}"],
    languageOptions: {
      globals: globals.node,
      sourceType: "module",
    },
    rules: {
      ...nodeEsmRules,
      // modify typescript specific rules for node esm here if needed
    },
  },
  prettier,
);

/**
 * Adding commonjs config for .cjs files
 * @type {import("../types/index.js").ESLintFlatConfig}
 */
const esmCJS = mergeConfigs(
  baseCjsJS,
  {
    name: "node-esm-cjs",
    files: ["**/*.cjs"],
  },
  prettier,
);

/**
 * Adding commonjs config for .cts files
 * @type {import("../types/index.js").ESLintFlatConfig}
 */
const esmCTS = mergeConfigs(
  baseCjsTS,
  {
    name: "node-esm-cts",
    files: ["**/*.cts"],
  },
  prettier,
);

export default [esmJS, esmTS, esmCJS, esmCTS];
export { esmJS, esmTS };
