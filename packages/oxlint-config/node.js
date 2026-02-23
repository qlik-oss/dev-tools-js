// @ts-check
// Qlik Node.js oxlint config
// Extends recommended with Node.js-friendly overrides and the node plugin.

import recommended from "./recommended.js";

/** @type {import("oxlint").OxlintConfig} */
const config = {
  extends: [recommended],

  plugins: ["typescript", "import", "node"],

  rules: {
    // console is perfectly fine in Node.js scripts and servers
    "no-console": "off",

    /* ------------------------------------------------------------------ */
    /*  node plugin – restriction category                                 */
    /* ------------------------------------------------------------------ */

    // string concatenation for paths is fragile; use path.join/path.resolve
    "node/no-path-concat": "error",
  },
};

export default config;
