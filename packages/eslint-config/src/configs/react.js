// @ts-check
import eslintReact from "@eslint-react/eslint-plugin";
import prettier from "eslint-config-prettier";
import { mergeConfigs } from "../utils/config.js";
import { baseConfigJS, baseConfigTS } from "./shared/base.js";
import reactRules from "./shared/default-rules/react.js";

/**
 * @type {import("../types/index.js").ESLintFlatConfig}
 */
const reactJS = mergeConfigs(
  // base it on the recommended javascript config
  baseConfigJS,
  // add the react config
  eslintReact.configs.strict,
  // add qlik's recommended react config for javascript
  {
    name: "react-js",
    files: ["**/*.js", "**/*.jsx"],
    rules: {
      // turn on/off or modify js rules necessary for react
      ...reactRules,
    },
  },
  prettier,
);

/**
 * @type {import("../types/index.js").ESLintFlatConfig}
 */
const reactTS = mergeConfigs(
  // base it on the recommended typescript config
  baseConfigTS,
  // add the react config
  eslintReact.configs["strict-typescript"],
  // add qlik's recommended react config for typescript
  {
    name: "react-ts",
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      // turn on/off or modify js/ts rules necessary for react
      ...reactRules,
    },
  },
  prettier,
);

export default [reactJS, reactTS];
export { reactJS, reactTS };
