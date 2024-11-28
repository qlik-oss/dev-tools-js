// @ts-check
import globals from "globals";
import { mergeConfigs } from "../utils/config.js";
import { recommendedJS, recommendedTS } from "./recommended.js";
import nodeRules from "./rules/node.js";

/**
 * @satisfies {import("../types/index.js").ESLintFlatConfig['rules']}
 */
const cjsRules = {
  ...nodeRules,
  // modify rules for node commonjs here
};

/**
 * @type {import("../types/index.js").ESLintFlatConfig}
 */
const cjsJS = mergeConfigs(
  // base it on the recommended javascript config
  recommendedJS,
  // add qlik's recommended node commonjs config for javascript
  {
    name: "node-cjs-js",
    files: ["**/*.{js,cjs}"],
    languageOptions: {
      globals: globals.node,
      sourceType: "commonjs",
    },
    rules: cjsRules,
  },
);

/**
 * @type {import("../types/index.js").ESLintFlatConfig}
 */
const cjsTS = mergeConfigs(
  // base it on the recommended typescript config
  recommendedTS,
  // add qlik's recommended node commonjs config for typescript
  {
    name: "node-cjs-ts",
    files: ["**/*.{ts,cts}"],
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

export default [cjsJS, cjsTS];
export { cjsJS, cjsTS };
