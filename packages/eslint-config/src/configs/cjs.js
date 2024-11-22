// @ts-check
import globals from "globals";
import { mergeConfigs } from "../utils/config.js";
import { recommendedJS, recommendedTS } from "./recommended.js";

/**
 * @satisfies {import("../types/index.js").ESLintFlatConfig['rules']}
 */
const cjsRules = {
  // modify rules for node here
};

/**
 * @type {import("../types/index.js").ESLintFlatConfig}
 */
const cjsJS = mergeConfigs(recommendedJS, {
  name: "node-cjs-js",
  files: ["**/*.{js,cjs}"],
  languageOptions: {
    globals: globals.node,
    sourceType: "commonjs",
  },
  rules: {
    ...cjsRules,
  },
});

/**
 * @type {import("../types/index.js").ESLintFlatConfig}
 */
const cjsTS = mergeConfigs(recommendedTS, {
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
});

export default [cjsJS, cjsTS];
export { cjsJS, cjsTS };
