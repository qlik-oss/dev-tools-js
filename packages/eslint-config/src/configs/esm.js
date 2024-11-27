// @ts-check
import globals from "globals";
import { mergeConfigs } from "../utils/config.js";
import { recommendedJS, recommendedTS } from "./recommended.js";

/**
 * @satisfies {import("../types/index.js").ESLintFlatConfig["rules"]}
 */
const nodeEsmRules = {
  // modify rules for node esm here
  "import-x/extensions": ["error", "ignorePackages"],
};

/**
 * @type {import("../types/index.js").ESLintFlatConfig}
 */
const esmJS = mergeConfigs(recommendedJS, {
  name: "node-esm-js",
  files: ["**/*.{js,mjs}"],
  languageOptions: {
    globals: globals.node,
    sourceType: "module",
  },
  rules: {
    ...nodeEsmRules,
  },
});

/**
 * @type {import("../types/index.js").ESLintFlatConfig}
 */
const esmTS = mergeConfigs(recommendedTS, {
  name: "node-esm-ts",
  files: ["**/*.{ts,mts}"],
  languageOptions: {
    globals: globals.node,
    sourceType: "module",
  },
  rules: {
    ...nodeEsmRules,
    // modify ts specific rules for node esm here
  },
});

export default [esmJS, esmTS];
export { esmJS, esmTS };
