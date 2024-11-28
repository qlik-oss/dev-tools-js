// @ts-check
import react from "@eslint-react/eslint-plugin";
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
const reactBaseConfig = {
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
    ...reactRules,
    // jsx-a11y plugin
    ...jsxA11y.flatConfigs.recommended.rules,
    ...reactA11yRules,
    ...react.configs.recommended.rules,
    // react-hooks plugin
    ...reactHooks.configs.recommended.rules,
    ...reactHooksRules,
  },
};

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
    },
  },
);

export default [reactJS, reactTS];
export { reactJS, reactTS };
