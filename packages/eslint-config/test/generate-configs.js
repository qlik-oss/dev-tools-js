/* eslint-disable no-param-reassign */
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import qlik from "../src/index.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * @param {import("../src/types/index.js").ESLintFlatConfig[]} obj
 * @param { number } space
 */
function JSONstringifyOrder(obj, space) {
  const allKeys = new Set();
  // eslint-disable-next-line no-sequences
  JSON.stringify(obj, (key, value) => (allKeys.add(key), value));
  return JSON.stringify(obj, Array.from(allKeys).sort(), space);
}

/**
 * Parses a config object array, except for the "plugins" key.
 * @param {import("../src/types/index.js").ESLintFlatConfig[]} configArray - The configuration object to parse.
 * @returns {string} The parsed configuration object.
 */
function parseConfig(configArray) {
  const final =
    configArray.map((config) => {
      if (config.plugins) {
        Object.keys(config.plugins).forEach((key) => {
          if (config.plugins) {
            // @ts-expect-error - intentional to not include plugins in the output
            config.plugins[key] = `${key}-plugin`;
          }
          if (config.languageOptions?.parser) {
            config.languageOptions.parser = `${config.name || "unknown"}-parser`;
          }
        });
      }
      return config;
    }) || [];
  // stringitfy with 2 spaces indentation with object keys sorted
  return JSONstringifyOrder(final, 2);
}

// cjs
const cjsConfig = path.resolve(__dirname, "generated/cjs-final-config.js");
await fs.writeFile(cjsConfig, `export default ${parseConfig(qlik.configs.cjs)}`);
// esm
const esmConfig = path.resolve(__dirname, "generated/esm-final-config.js");
await fs.writeFile(esmConfig, `export default ${parseConfig(qlik.configs.esm)}`);
// esbrowser
const esbrowserConfig = path.resolve(__dirname, "generated/esbrowser-final-config.js");
await fs.writeFile(esbrowserConfig, `export default ${parseConfig(qlik.configs.esbrowser)}`);
// recommended
const recommendedConfig = path.resolve(__dirname, "generated/recommended-final-config.js");
await fs.writeFile(recommendedConfig, `export default ${parseConfig(qlik.configs.recommended)}`);
// react
const reactConfig = path.resolve(__dirname, "generated/react-final-config.js");
await fs.writeFile(reactConfig, `export default ${parseConfig(qlik.configs.react)}`);
// vitest
const vitestConfig = path.resolve(__dirname, "generated/vitest-final-config.js");
await fs.writeFile(vitestConfig, `export default ${parseConfig(qlik.configs.vitest)}`);
