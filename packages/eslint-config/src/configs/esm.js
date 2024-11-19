// @ts-check
import { mergeConfigs } from "../utils/config.js";
import { nodeJS, nodeTS } from "./node.js";

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
const esmJS = mergeConfigs(nodeJS, {
  name: "node-esm-js",
  languageOptions: {
    sourceType: "module",
  },
  rules: {
    ...nodeEsmRules,
  },
});

/**
 * @type {import("../types/index.js").ESLintFlatConfig}
 */
const esmTS = mergeConfigs(nodeTS, {
  name: "node-esm-ts",
  languageOptions: {
    sourceType: "module",
  },
  rules: {
    ...nodeEsmRules,
    // modify ts specific rules for node esm here
  },
});

export default [esmJS, esmTS];
export { esmJS, esmTS };
