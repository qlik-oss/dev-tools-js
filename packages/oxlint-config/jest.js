// @ts-check
// Qlik Jest oxlint config
// Extends recommended with jest plugin rules for test files.
//
// Typical usage – add an override to your project's .oxlintrc.json:
//
//   {
//     "extends": ["@qlik/oxlint-config/recommended.json"],
//     "overrides": [
//       {
//         "files": ["**/__tests__/**", "**/*.test.*", "**/*.spec.*"],
//         "extends": ["@qlik/oxlint-config/jest.json"]
//       }
//     ]
//   }
//
// Or, in an oxlint.config.ts:
//
//   import { defineConfig } from "oxlint";
//   import jest from "@qlik/oxlint-config/jest.js";
//   export default defineConfig({ extends: [jest] });

import recommended from "./recommended.js";

/** @type {import("oxlint").OxlintConfig} */
const config = {
  extends: [recommended],

  plugins: ["typescript", "import", "jest"],

  env: {
    jest: true,
  },

  rules: {
    // console output in tests is usually intentional (debugging assertions)
    "no-console": "off",

    // test files don't export production code, so import restrictions are relaxed
    "no-restricted-imports": "off",

    /* ------------------------------------------------------------------ */
    /*  Jest – correctness (override to make explicit)                     */
    /* ------------------------------------------------------------------ */

    // focused tests (test.only / describe.only) must never be committed
    "jest/no-focused-tests": "error",

    // disabled tests (test.skip / xtest) should be reviewed and removed
    "jest/no-disabled-tests": "error",
  },
};

export default config;
