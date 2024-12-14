// @ts-check
import react from "@eslint-react/eslint-plugin";
import prettier from "eslint-config-prettier";
import jsxA11y from "eslint-plugin-jsx-a11y";
import eslintPluginReact from "eslint-plugin-react";
// @ts-expect-error no types for this plugin yet
import reactHooks from "eslint-plugin-react-hooks";
import { mergeConfigs } from "../utils/config.js";
import { recommendedJS, recommendedTS } from "./recommended.js";
import reactA11yRules from "./rules/react-a11y.js";
import reactHooksRules from "./rules/react-hooks.js";
import reactRules from "./rules/react.js";

/** @type {any} */
const reactPlugin = eslintPluginReact;

/**
 * @type {import("../types/index.js").ESLintFlatConfig}
 */
const reactBaseConfig = mergeConfigs(
  // base it on the recommended react plugins config
  react.configs.recommended,
  reactPlugin.configs.flat.recommended,
  jsxA11y.flatConfigs.recommended,
  // add react-hooks plugin config (no recommended flat config YET!)
  {
    plugins: {
      "react-hooks": reactHooks,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
    },
  },

  // add qlik's recommended react config
  {
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        jsxPragma: null, // for @typescript/eslint-parser
      },
    },

    settings: {
      react: {
        version: "detect",
      },
    },

    rules: {
      ...reactRules,
      ...reactA11yRules,
      ...reactHooksRules,
    },
  },
);

/**
 * @type {import("../types/index.js").ESLintFlatConfig}
 */
const reactJS = mergeConfigs(
  // base it on the recommended javascript config
  recommendedJS,
  // add the base react config
  reactBaseConfig,
  // add qlik's recommended react config for javascript
  {
    name: "react-js",
    files: ["**/*.js", "**/*.jsx"],
    rules: {
      // turn on/off or modify js rules necessary for react
      "react/jsx-filename-extension": [2, { extensions: [".js", ".jsx"] }],
    },
  },
  prettier,
);

/**
 * @type {import("../types/index.js").ESLintFlatConfig}
 */
const reactTS = mergeConfigs(
  // base it on the recommended typescript config
  recommendedTS,
  // add the base react config
  reactBaseConfig,
  // add qlik's recommended react config for typescript
  {
    name: "react-ts",
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      // turn on/off or modify js/ts rules necessary for react
      "react/jsx-filename-extension": [2, { extensions: [".js", ".jsx", ".ts", ".tsx"] }],
      // avoid double linting of class-methods-use-this in typescript
      "class-methods-use-this": "off",
      "@typescript-eslint/class-methods-use-this": reactBaseConfig.rules?.["class-methods-use-this"] || "off",
    },
  },
  prettier,
);

export default [reactJS, reactTS];
export { reactJS, reactTS };
