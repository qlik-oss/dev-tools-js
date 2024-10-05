import type { ESLintFlatConfig } from "../types/index.js";
import { mergeConfigs } from "../utils/config.js";
import { formatting } from "./formatting.js";
import { nodeJS, nodeTS } from "./node.js";

const nodeEsmRules: ESLintFlatConfig["rules"] = {
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

export default [esmJS, esmTS, formatting] satisfies ESLintFlatConfig[];
export { esmJS, esmTS };
