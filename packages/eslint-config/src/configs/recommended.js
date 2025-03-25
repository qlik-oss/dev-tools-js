// @ts-check
import prettier from "eslint-config-prettier";
import { mergeConfigs } from "../utils/config.js";
import { baseConfigJS, baseConfigTS } from "./shared/base.js";
import { baseCjsJS, baseCjsTS } from "./shared/node.js";

/**
 * @type {import("../types/index.js").ESLintFlatConfig}
 */
const recommendedJS = mergeConfigs(
  baseConfigJS,
  {
    name: "recommended-js",
    files: ["**/*.js", "**/*.mjs"],
  },
  prettier,
);

/**
 * @type {import("../types/index.js").ESLintFlatConfig}
 */
const recommendedTS = mergeConfigs(
  baseConfigTS,
  {
    name: "recommended-ts",
    files: ["**/*.ts", "**/*.mts", "**/*.d.ts"],
  },
  prettier,
);

/**
 * A .cjs file is a CommonJS file, which is a module format used in Node.js.
 * @type {import("../types/index.js").ESLintFlatConfig}
 */
const recommendedCJS = mergeConfigs(
  baseCjsJS,
  {
    name: "recommended-cjs",
    files: ["**/*.cjs"],
  },
  prettier,
);

/**
 * A .cts file is a CommonJS file, which is a module format used in Node.js.
 * @type {import("../types/index.js").ESLintFlatConfig}
 */
const recommendedCTS = mergeConfigs(
  baseCjsTS,
  {
    name: "recommended-cts",
    files: ["**/*.cts"],
  },
  prettier,
);

export default [recommendedJS, recommendedTS, recommendedCJS, recommendedCTS];
export { recommendedJS, recommendedTS };
