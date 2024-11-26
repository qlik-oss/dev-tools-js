// @ts-check
import { mergeConfigs } from "../utils/config.js";
import { cjsJS, cjsTS } from "./cjs.js";

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
const esmJS = mergeConfigs(cjsJS, {
  name: "node-esm-js",
  files: ["**/*.{js,mjs}"],
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
const esmTS = mergeConfigs(cjsTS, {
  name: "node-esm-ts",
  files: ["**/*.{ts,mts}"],
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
