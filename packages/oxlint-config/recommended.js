// @ts-check
// Qlik Recommended oxlint config
// Covers ESLint core, TypeScript, and Import rules.
//
// Category strategy
// ─────────────────
//  correctness → rules that catch definite bugs (oxlint default)
//  suspicious  → code that is likely wrong (oxlint default)
//  pedantic    → extra-strict, few false positives — Qlik standard
//                enables: array-callback-return, no-case-declarations,
//                no-constructor-return, no-else-return, no-fallthrough,
//                no-loop-func, no-lonely-if, no-new-wrappers, no-redeclare,
//                no-self-compare, no-throw-literal, no-useless-return, radix,
//                symbol-description, no-array-constructor,
//                typescript/ban-ts-comment, typescript/prefer-enum-initializers
//
// Rules listed explicitly are those that need custom options, a non-"error"
// severity, belong to an opt-in category (restriction / style / perf), or
// override a category-level default.
//
// Rules NOT yet implemented in oxlint (remain ESLint-only):
//   - camelcase / @typescript-eslint/naming-convention
//   - no-restricted-syntax
//   - no-restricted-exports
//   - no-restricted-properties

/** @type {import("oxlint").OxlintConfig} */
const config = {
  plugins: ["typescript", "import"],

  categories: {
    correctness: "error",
    suspicious: "error",
    pedantic: "error",
  },

  rules: {
    /* ------------------------------------------------------------------ */
    /*  Category overrides – custom options                                 */
    /* ------------------------------------------------------------------ */

    // allow implicit returns in array callbacks (e.g. `arr.map(x => x && x.y)`)
    "array-callback-return": ["error", { allowImplicit: true }],

    // strict equality everywhere, but allow `== null` to catch both null/undefined
    eqeqeq: ["error", "always", { null: "ignore" }],

    // else-after-return is redundant; also disallow else-if-after-return
    "no-else-return": ["error", { allowElseIf: false }],

    // always reject Promises with Error objects; allow empty rejections
    "prefer-promise-reject-errors": ["error", { allowEmptyReject: true }],

    // assignment-in-return is almost always a bug; "always" = no exception
    "no-return-assign": ["error", "always"],

    // constructor/class names must be PascalCase; don't require cap for plain calls
    "new-cap": ["error", { newIsCap: true, capIsNew: false }],

    // param mutation is confusing; allow common accumulator/context/request patterns
    "no-param-reassign": [
      "error",
      {
        props: true,
        ignorePropertyModificationsFor: [
          "prev", // reduce accumulators
          "acc", // reduce accumulators
          "accumulator", // reduce accumulators
          "e", // event objects (e.returnValue etc.)
          "ctx", // Koa routing
          "context", // Koa routing
          "req", // Express requests
          "request", // Express requests
          "res", // Express responses
          "response", // Express responses
          "$scope", // Angular scopes
          "staticContext", // React Router
          "sharedState", // shared reducers
          "state", // shared reducers
        ],
      },
    ],

    // restrict confusing browser globals that shadow window properties
    "no-restricted-globals": [
      "error",
      { name: "isFinite", message: "Use Number.isFinite instead" },
      { name: "isNaN", message: "Use Number.isNaN instead" },
      { name: "addEventListener", message: "Use window.addEventListener instead" },
      { name: "blur", message: "Use window.blur instead" },
      { name: "close", message: "Use window.close instead" },
      { name: "closed", message: "Use window.closed instead" },
      { name: "confirm", message: "Use window.confirm instead" },
      { name: "defaultStatus", message: "Use window.defaultStatus instead" },
      { name: "defaultstatus", message: "Use window.defaultstatus instead" },
      { name: "error", message: "Use window.error instead" },
      { name: "event", message: "Use window.event instead" },
      { name: "find", message: "Use window.find instead" },
      { name: "focus", message: "Use window.focus instead" },
      { name: "frameElement", message: "Use window.frameElement instead" },
      { name: "frames", message: "Use window.frames instead" },
      { name: "history", message: "Use window.history instead" },
      { name: "innerHeight", message: "Use window.innerHeight instead" },
      { name: "innerWidth", message: "Use window.innerWidth instead" },
      { name: "length", message: "Use window.length instead" },
      { name: "localStorage", message: "Use window.localStorage instead" },
      { name: "location", message: "Use window.location instead" },
      { name: "menubar", message: "Use window.menubar instead" },
      { name: "moveBy", message: "Use window.moveBy instead" },
      { name: "moveTo", message: "Use window.moveTo instead" },
      { name: "name", message: "Use window.name instead" },
      { name: "onblur", message: "Use window.onblur instead" },
      { name: "onerror", message: "Use window.onerror instead" },
      { name: "onfocus", message: "Use window.onfocus instead" },
      { name: "onload", message: "Use window.onload instead" },
      { name: "onresize", message: "Use window.onresize instead" },
      { name: "onunload", message: "Use window.onunload instead" },
      { name: "open", message: "Use window.open instead" },
      { name: "opener", message: "Use window.opener instead" },
      { name: "opera", message: "Use window.opera instead" },
      { name: "outerHeight", message: "Use window.outerHeight instead" },
      { name: "outerWidth", message: "Use window.outerWidth instead" },
      { name: "pageXOffset", message: "Use window.pageXOffset instead" },
      { name: "pageYOffset", message: "Use window.pageYOffset instead" },
      { name: "parent", message: "Use window.parent instead" },
      { name: "print", message: "Use window.print instead" },
      { name: "removeEventListener", message: "Use window.removeEventListener instead" },
      { name: "resizeBy", message: "Use window.resizeBy instead" },
      { name: "resizeTo", message: "Use window.resizeTo instead" },
      { name: "screen", message: "Use window.screen instead" },
      { name: "screenLeft", message: "Use window.screenLeft instead" },
      { name: "screenTop", message: "Use window.screenTop instead" },
      { name: "screenX", message: "Use window.screenX instead" },
      { name: "screenY", message: "Use window.screenY instead" },
      { name: "scroll", message: "Use window.scroll instead" },
      { name: "scrollbars", message: "Use window.scrollbars instead" },
      { name: "scrollBy", message: "Use window.scrollBy instead" },
      { name: "scrollTo", message: "Use window.scrollTo instead" },
      { name: "scrollX", message: "Use window.scrollX instead" },
      { name: "scrollY", message: "Use window.scrollY instead" },
      { name: "self", message: "Use window.self instead" },
      { name: "sessionStorage", message: "Use window.sessionStorage instead" },
      { name: "status", message: "Use window.status instead" },
      { name: "statusbar", message: "Use window.statusbar instead" },
      { name: "stop", message: "Use window.stop instead" },
      { name: "toolbar", message: "Use window.toolbar instead" },
      { name: "top", message: "Use window.top instead" },
    ],

    // BOM causes encoding issues in source files
    "unicode-bom": ["error", "never"],

    // circular imports cause subtle bugs; trust external packages
    "import/no-cycle": ["error", { ignoreExternal: true }],

    /* ------------------------------------------------------------------ */
    /*  Warn instead of error                                               */
    /* ------------------------------------------------------------------ */

    // console output should be intentional; warn so CI surfaces it without blocking
    "no-console": "warn",

    // anonymous functions make stack traces harder to read
    "func-names": "warn",

    // empty function bodies should be a deliberate and visible choice
    "no-empty-function": "warn",

    /* ------------------------------------------------------------------ */
    /*  Restriction – explicit opt-in                                       */
    /* ------------------------------------------------------------------ */

    // alert/confirm/prompt are debug tools, not production patterns
    "no-alert": "error",

    // bitwise ops are almost always a typo for logical operators (|, &)
    "no-bitwise": "error",

    // __proto__ is deprecated; use Object.getPrototypeOf instead
    "no-proto": "error",

    // comma sequences produce surprising evaluated values
    "no-sequences": "error",

    // var has confusing function scope; always use let/const
    "no-var": "error",

    // switch without a default case silently ignores unhandled values
    "default-case": "error",

    // teams configure their own restricted imports per project
    "no-restricted-imports": "off",

    /* ------------------------------------------------------------------ */
    /*  TypeScript – restriction                                            */
    /* ------------------------------------------------------------------ */

    // always use `import type` for type-only imports
    "typescript/consistent-type-imports": "error",

    // delete on dynamic keys bypasses type safety
    "typescript/no-dynamic-delete": "error",

    // side-effect imports of type-only modules defeat `import type`
    "typescript/no-import-type-side-effects": "error",

    // void used as a type where it shouldn't be is confusing
    "typescript/no-invalid-void-type": "error",

    // !foo ?? bar is always a logical bug
    "typescript/no-non-null-asserted-nullish-coalescing": "error",

    // non-null assertions hide potential null bugs; use explicit checks
    "typescript/no-non-null-assertion": "error",

    // enum members with explicit values are easier to audit
    "typescript/prefer-literal-enum-member": "error",

    /* ------------------------------------------------------------------ */
    /*  TypeScript – nursery / style (not covered by pedantic)             */
    /* ------------------------------------------------------------------ */

    // enforce consistent type-only exports (mirrors consistent-type-imports)
    "typescript/consistent-type-exports": "error",

    // overloaded signatures that can be unified reduce API surface area
    "typescript/unified-signatures": "error",

    /* ------------------------------------------------------------------ */
    /*  Import – restriction                                                */
    /* ------------------------------------------------------------------ */

    // AMD require() is legacy and incompatible with ES modules
    "import/no-amd": "error",

    // dynamic require() defeats static analysis and tree-shaking
    "import/no-dynamic-require": "error",

    // webpack-specific loader syntax in import paths is non-standard
    "import/no-webpack-loader-syntax": "error",

    /* ------------------------------------------------------------------ */
    /*  Import – suspicious overrides (disable noisy defaults)             */
    /* ------------------------------------------------------------------ */

    // TypeScript already catches misused default imports
    "import/no-named-as-default-member": "off",

    // empty named import blocks cause false positives with re-export patterns
    "import/no-empty-named-blocks": "off",

    /* ------------------------------------------------------------------ */
    /*  Style – explicit opt-in                                             */
    /*  (style category is intentionally not enabled globally; it includes  */
    /*   sort-imports, no-inline-comments, no-undefined, no-ternary, etc.)  */
    /* ------------------------------------------------------------------ */

    "default-case-last": "error",
    "default-param-last": "error",
    "no-continue": "error",
    "no-extra-label": "error",
    "no-labels": "error",
    "no-label-var": "error",
    "no-lone-blocks": "error",
    "no-multi-str": "error",
    "no-multi-assign": "error",
    "no-nested-ternary": "error",
    "no-new-func": "error",
    "no-script-url": "error",
    "operator-assignment": "error",
    "prefer-const": "error",
    "prefer-exponentiation-operator": "error",
    "prefer-numeric-literals": "error",
    "prefer-object-has-own": "error",
    "prefer-object-spread": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    yoda: "error",

    /* ------------------------------------------------------------------ */
    /*  Perf – explicit opt-in                                              */
    /* ------------------------------------------------------------------ */

    // await in loops blocks parallelism – batch with Promise.all instead
    "no-await-in-loop": "error",

    // unnecessary .call()/.apply() skip the optimised fast-path
    "no-useless-call": "error",
  },
};

export default config;
