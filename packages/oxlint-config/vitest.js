// @ts-check
// Qlik Vitest oxlint config
// Extends recommended with vitest plugin rules for test files.
//
// Typical usage – add an override to your project's .oxlintrc.json:
//
//   {
//     "extends": ["@qlik/oxlint-config/recommended.json"],
//     "overrides": [
//       {
//         "files": ["**/__tests__/**", "**/*.test.*", "**/*.spec.*"],
//         "extends": ["@qlik/oxlint-config/vitest.json"]
//       }
//     ]
//   }
//
// Or, in an oxlint.config.ts:
//
//   import { defineConfig } from "oxlint";
//   import vitest from "@qlik/oxlint-config/vitest.js";
//   export default defineConfig({ extends: [vitest] });

import recommended from "./recommended.js";

/** @type {import("oxlint").OxlintConfig} */
const config = {
  extends: [recommended],

  plugins: ["typescript", "import", "vitest"],

  rules: {
    // console output in tests is usually intentional (debugging assertions)
    "no-console": "off",

    // test files don't export production code, so import restrictions are relaxed
    "no-restricted-imports": "off",

    /* ------------------------------------------------------------------ */
    /*  Vitest – correctness (override to make explicit)                   */
    /* ------------------------------------------------------------------ */

    // conditional test logic masks bugs that should be fixed unconditionally
    "vitest/no-conditional-tests": "error",

    // TODO-marked tests should surface as warnings so they aren't forgotten
    "vitest/warn-todo": "error",
  },
};

export default config;
