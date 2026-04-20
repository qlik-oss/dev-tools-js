// @ts-check
import globals from "globals";
import { mergeConfigs } from "../../utils/config.js";
import { baseConfigJS, baseConfigTS } from "./base.js";
import nodeRules from "./default-rules/node.js";

// TODO use eslint-plugin-n https://github.com/eslint-community/eslint-plugin-n

/**
 * @satisfies {import("../../types/index.js").ESLintFlatConfig["rules"]}
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
 * CJS config for javascript in node
 * @type {import("../../types/index.js").ESLintFlatConfig}
 * This config is meant to be extended by javascript specific configs, it is not meant to be used directly.
 */
const baseCjsJS = mergeConfigs(
  // base it on the recommended javascript config
  baseConfigJS,
  // add qlik's recommended node commonjs config for javascript
  {
    languageOptions: {
      globals: globals.node,
      sourceType: "commonjs",
    },
    rules: {
      ...nodeRules,
      // modify javascript specific rules for node cjs here if needed
    },
  },
);

/**
 * CJS config for typescript in node
 * This config is meant to be extended by typescript specific configs, it is not meant to be used directly.
 * @type {import("../../types/index.js").ESLintFlatConfig}
 */
const baseCjsTS = mergeConfigs(
  // base it on the recommended typescript config
  baseConfigTS,
  // add qlik's recommended node commonjs config for typescript
  {
    languageOptions: {
      globals: globals.node,
      sourceType: "commonjs",
    },
    rules: {
      ...nodeRules,
      // modify typescript specific rules for node cjs here if needed
    },
  },
);

/**
 * ESM config for javascript in node
 * @type {import("../../types/index.js").ESLintFlatConfig}
 */
const baseEsmJS = mergeConfigs(
  // base it on the recommended javascript config
  baseConfigJS,
  // add qlik's recommended node esm config for javascript
  {
    languageOptions: {
      globals: globals.node,
      sourceType: "module",
    },
    rules: {
      ...nodeRules,
      ...nodeEsmRules,
      // modify javascript specific rules for node esm here if needed
    },
  },
);

/**
 * ESM config for typescript in node
 * @type {import("../../types/index.js").ESLintFlatConfig}
 */
const baseEsmTS = mergeConfigs(
  // base it on the recommended typescript config
  baseConfigTS,
  // add qlik's recommended node esm config for typescript
  {
    languageOptions: {
      globals: globals.node,
      sourceType: "module",
    },
    rules: {
      ...nodeRules,
      ...nodeEsmRules,
      // modify typescript specific rules for node esm here if needed
    },
  },
);

export { baseCjsJS, baseCjsTS, baseEsmJS, baseEsmTS };
