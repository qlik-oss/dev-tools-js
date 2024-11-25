// @ts-check
import react from "@eslint-react/eslint-plugin";
import jsxA11y from "eslint-plugin-jsx-a11y";
import eslintPluginReact from "eslint-plugin-react";
// @ts-expect-error no types for this plugin yet
import reactHooks from "eslint-plugin-react-hooks";
import { mergeConfigs } from "../utils/config.js";
import { recommendedJS, recommendedTS } from "./recommended.js";
import rules from "./rules/index.js";

/** @type {any} */
const reactPlugin = eslintPluginReact;

/**
 * @type {import("../types/index.js").ESLintFlatConfig}
 */
const reactConfig = mergeConfigs({
  languageOptions: {
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      jsxPragma: null, // for @typescript/eslint-parser
    },
  },

  plugins: { ...react.configs.recommended.plugins, react: reactPlugin, "jsx-a11y": jsxA11y, "react-hooks": reactHooks },

  settings: {
    ...react.configs.recommended.settings,
    react: {
      version: "detect",
    },
  },

  rules: {
    // react plugin
    ...reactPlugin.configs.flat.recommended.rules,
    ...rules.reactRules,
    // jsx-a11y plugin
    ...jsxA11y.flatConfigs.recommended.rules,
    ...rules.reactA11yRules,
    ...react.configs.recommended.rules,
    // react-hooks plugin
    ...reactHooks.configs.recommended.rules,
    ...rules.reactHooksRules,
  },
});

/**
 * @type {import("../types/index.js").ESLintFlatConfig}
 */
const reactJS = mergeConfigs(reactConfig, recommendedJS, {
  name: "react-js",
  files: ["**/*.jsx"],
  rules: {
    // turn on/off or modify js rules necessary for react
    "react/jsx-filename-extension": [2, { extensions: [".js", ".jsx"] }],
  },
});

/**
 * @type {import("../types/index.js").ESLintFlatConfig}
 */
const reactTS = mergeConfigs(reactConfig, recommendedTS, {
  name: "react-ts",
  files: ["**/*.tsx"],
  rules: {
    // turn on/off or modify js/ts rules necessary for react
    "react/jsx-filename-extension": [2, { extensions: [".js", ".jsx", ".ts", ".tsx"] }],
  },
});

export default [recommendedJS, reactTS, recommendedTS, reactTS];
export { reactJS, reactTS };
