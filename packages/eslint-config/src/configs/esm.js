// @ts-check
import globals from "globals";
import { mergeConfigs } from "../utils/config.js";
import { recommendedJS, recommendedTS } from "./recommended.js";
import nodeRules from "./rules/node.js";

/**
 * @satisfies {import("../types/index.js").ESLintFlatConfig["rules"]}
 */
const nodeEsmRules = {
  ...nodeRules,
  "import-x/extensions": ["error", "ignorePackages"],
  // modify rules for node esm here
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
);

export default [esmJS, esmTS];
export { esmJS, esmTS };
