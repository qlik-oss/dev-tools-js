// @ts-check
import jsxA11y from "eslint-plugin-jsx-a11y";
import eslintPluginReact from "eslint-plugin-react";
// @ts-expect-error no types for this plugin yet
import reactHooks from "eslint-plugin-react-hooks";
// import type { ESLintFlatConfig, ESLintPlugin } from "../types/index.js";
import { mergeConfigs } from "../utils/config.js";
import { formatting } from "./formatting.js";
import { recommendedJS, recommendedTS } from "./recommended.js";
import rules from "./rules/index.js";

/** @type {any} */
const reactPlugin = eslintPluginReact;

const reactConfig = mergeConfigs({
  languageOptions: {
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      jsxPragma: null, // for @typescript/eslint-parser
    },
  },

  plugins: { react: reactPlugin, "jsx-a11y": jsxA11y, "react-hooks": reactHooks },

  settings: {
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
    // react-hooks plugin
    ...reactHooks.configs.recommended.rules,
    ...rules.reactHooksRules,
  },
});

const reactJS = mergeConfigs(reactConfig, {
  name: "react-js",
  files: ["**/*.jsx"],
  rules: {
    // turn on/off or modify js rules necessary for react
  },
});

const reactTS = mergeConfigs(reactConfig, {
  name: "react-ts",
  files: ["**/*.tsx"],
  rules: {
    // turn on/off or modify js/ts rules necessary for react

    // allow PascalCase for JSX components
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: ["variable", "function"],
        format: ["camelCase", "PascalCase"],
      },
    ],
  },
});

export default [recommendedJS, reactTS, recommendedTS, reactTS, formatting];
export { reactJS, reactTS };
