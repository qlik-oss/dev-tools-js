import jsxA11y from "eslint-plugin-jsx-a11y";
import reactPlugin from "eslint-plugin-react";
// @ts-expect-error no types for this plugin yet
import reactHooks from "eslint-plugin-react-hooks";
import type { ESLintFlatConfig, ESLintPlugin } from "../types/index.js";
import { mergeConfigs } from "../utils/config.js";
import { formatting } from "./formatting.js";
import { recommendedJS, recommendedTS } from "./recommended.js";
import rules from "./rules/index.js";

const reactConfig: ESLintFlatConfig = mergeConfigs({
  languageOptions: {
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      jsxPragma: null, // for @typescript/eslint-parser
    },
  },

  plugins: { react: reactPlugin as unknown as ESLintPlugin, "jsx-a11y": jsxA11y, "react-hooks": reactHooks },

  settings: {
    react: {
      version: "detect",
    },
  },

  rules: {
    // react plugin
    ...reactPlugin.configs.flat!.recommended.rules,
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

export default [recommendedJS, reactTS, recommendedTS, reactTS, formatting] satisfies ESLintFlatConfig[];
export { reactJS, reactTS };
