// @ts-check
import globals from "globals";
import { mergeConfigs } from "../utils/config.js";
import { recommendedJS, recommendedTS } from "./recommended.js";

/**
 * @satisfies {import("../types/index.js").ESLintFlatConfig['rules']}
 */
const nodeRules = {
  // modify rules for node here
};

/**
 * @type {import("../types/index.js").ESLintFlatConfig}
 */
const nodeJS = mergeConfigs(recommendedJS, {
  name: "node-cjs-js",
  languageOptions: {
    globals: globals.node,
    sourceType: "commonjs",
  },
  rules: {
    ...nodeRules,
  },
});

/**
 * @type {import("../types/index.js").ESLintFlatConfig}
 */
const nodeTS = mergeConfigs(recommendedTS, {
  name: "node-cjs-ts",
  languageOptions: {
    globals: globals.node,
    sourceType: "commonjs",
  },
  rules: {
    ...nodeRules,
    // modify ts specific rules for node here
  },
});

export default [nodeJS, nodeTS];
export { nodeJS, nodeTS };
