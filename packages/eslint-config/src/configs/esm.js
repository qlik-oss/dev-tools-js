// @ts-check
import prettier from "eslint-config-prettier";
import globals from "globals";
import { mergeConfigs } from "../utils/config.js";
import { recommendedJS, recommendedTS } from "./recommended.js";
import nodeRules from "./rules/node.js";

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
 * @type {import("../types/index.js").ESLintFlatConfig}
 */
const esmJS = mergeConfigs(
  // base it on the recommended javascript config
  recommendedJS,
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
 * @type {import("../types/index.js").ESLintFlatConfig}
 */
const esmTS = mergeConfigs(
  // base it on the recommended typescript config
  recommendedTS,
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

export default [esmJS, esmTS];
export { esmJS, esmTS };
