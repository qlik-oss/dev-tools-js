// @ts-check
import globals from "globals";
import { mergeConfigs } from "../../utils/config.js";
import nodeRules from "../rules/node.js";
import { baseConfigJS, baseConfigTS } from "./base.js";

/**
 * @satisfies {import("../../types/index.js").ESLintFlatConfig['rules']}
 */
const cjsRules = {
  ...nodeRules,
  // modify rules for node commonjs here
};

/**
 * CJS config for javascript in node
 * @type {import("../../types/index.js").ESLintFlatConfig}
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
    rules: cjsRules,
  },
);

/**
 * CJS config for typescript in node
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
      ...cjsRules,
      // modify ts specific rules for node here
    },
  },
);

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
    rules: nodeEsmRules,
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
      ...nodeEsmRules,
      // modify typescript specific rules for node esm here if needed
    },
  },
);

export { baseCjsJS, baseCjsTS, baseEsmJS, baseEsmTS };
