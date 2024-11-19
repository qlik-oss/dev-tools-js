// @ts-check
import { mergeConfigs } from "../utils/config.js";
import { formatting } from "./formatting.js";
import { nodeJS, nodeTS } from "./node.js";

/**
 * @satisfies {import("../types/index.js").ESLintFlatConfig["rules"]}
 */
const nodeEsmRules = {
  // modify rules for node esm here
  "import-x/extensions": ["error", "ignorePackages"],
};

const esmJS = mergeConfigs(nodeJS, {
  name: "node-esm-js",
  languageOptions: {
    sourceType: "module",
  },
  rules: {
    ...nodeEsmRules,
  },
});

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

/**
 * @satisfies {import("../types/index.js").ESLintFlatConfig[]}
 */
const ruleset = [esmJS, esmTS, formatting];

export default ruleset;
export { esmJS, esmTS };
