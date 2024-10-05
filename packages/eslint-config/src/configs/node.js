// @ts-check
import globals from "globals";
import { mergeConfigs } from "../utils/config.js";
import { formatting } from "./formatting.js";
import { recommendedJS, recommendedTS } from "./recommended.js";

/**
 * @satisfies {import("../types/index.js").ESLintFlatConfig['rules']}
 */
const nodeRules = {
  // modify rules for node here
};

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

export default [nodeJS, nodeTS, formatting];
export { nodeJS, nodeTS };
