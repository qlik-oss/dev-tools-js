// @ts-check
import prettier from "eslint-config-prettier";
import globals from "globals";
import { mergeConfigs } from "../utils/config.js";
import { recommendedJS, recommendedTS } from "./recommended.js";

/**
 * @satisfies {import("../types/index.js").ESLintFlatConfig["rules"]}
 */
const browserEsmRules = {
  // modify rules for browser esm here

  // Ensure consistent use of file extension within the import path
  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/extensions.md
  "import-x/extensions": [
    "error",
    "ignorePackages",
    {
      ts: "never",
      mts: "never",
      tsx: "never",
    },
  ],
};

/**
 * @type {import("../types/index.js").ESLintFlatConfig}
 */
const esbrowserJS = mergeConfigs(
  // base it on the recommended javascript config
  recommendedJS,
  // add qlik's recommended node esm config for javascript
  {
    name: "esbrowser-js",
    files: ["**/*.{js,mjs}"],
    languageOptions: {
      globals: globals.browser,
      sourceType: "module",
    },
    rules: {
      ...browserEsmRules,
      // modify javascript specific rules for node esm here if needed
    },
  },
  prettier,
);

/**
 * @type {import("../types/index.js").ESLintFlatConfig}
 */
const esbrowserTS = mergeConfigs(
  // base it on the recommended typescript config
  recommendedTS,
  // add qlik's recommended node esm config for typescript
  {
    name: "esbrowser-ts",
    files: ["**/*.{ts,mts}"],
    languageOptions: {
      globals: globals.browser,
      sourceType: "module",
    },
    rules: {
      ...browserEsmRules,
      // modify typescript specific rules for node esm here if needed
    },
  },
  prettier,
);

export default [esbrowserJS, esbrowserTS];
export { esbrowserJS, esbrowserTS };
