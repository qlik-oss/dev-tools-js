// @ts-check
// Qlik React oxlint config
// Extends recommended with React and jsx-a11y plugins.
// Most jsx-a11y rules are already caught by the `correctness` category;
// only rules that need non-default options are configured explicitly.

import recommended from "./recommended.js";

/** @type {import("oxlint").OxlintConfig} */
const config = {
  extends: [recommended],

  // plugins must include all parent plugins plus any additions
  plugins: ["typescript", "import", "react", "jsx-a11y"],

  rules: {
    /* ------------------------------------------------------------------ */
    /*  React – style category (not on by default)                        */
    /* ------------------------------------------------------------------ */

    // boolean props should be written as <Foo bar /> not <Foo bar={true} />
    "react/jsx-boolean-value": ["error", "never"],

    // user-defined JSX components must use PascalCase
    "react/jsx-pascal-case": "error",

    // self-close components that have no children: <Foo /> not <Foo></Foo>
    "react/self-closing-comp": "error",

    /* ------------------------------------------------------------------ */
    /*  React – pedantic category                                          */
    /* ------------------------------------------------------------------ */

    // rules of hooks must always be followed
    "react/rules-of-hooks": "error",

    // useless fragments add noise and affect perf
    "react/jsx-no-useless-fragment": "error",

    // target="_blank" without rel="noreferrer" allows tab-napping attacks
    "react/jsx-no-target-blank": "error",

    /* ------------------------------------------------------------------ */
    /*  React – restriction category                                       */
    /* ------------------------------------------------------------------ */

    // dangerouslySetInnerHTML is an XSS vector; warn rather than error
    // because there are legitimate uses (e.g. server-rendered HTML)
    "react/no-danger": "warn",

    // unknown DOM props are silently ignored by React but almost always typos
    "react/no-unknown-property": "error",

    /* ------------------------------------------------------------------ */
    /*  React – suspicious overrides                                       */
    /* ------------------------------------------------------------------ */

    // since React 17 the JSX transform handles the React import automatically
    "react/react-in-jsx-scope": "off",

    /* ------------------------------------------------------------------ */
    /*  jsx-a11y – option overrides                                        */
    /*  Most rules are already enforced via the correctness category;     */
    /*  only rules that need project-specific options are listed here.    */
    /* ------------------------------------------------------------------ */

    // autofocus steals focus unexpectedly – allow it on non-DOM components
    // (e.g. a custom <Autofocus> component that wraps a native input)
    "jsx-a11y/no-autofocus": ["error", { ignoreNonDOM: true }],

    // support custom Link components that use `to` instead of `href`
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["to"],
        aspects: ["noHref", "invalidHref", "preferButton"],
      },
    ],

    // every label must have both a for/htmlFor attribute and a matching control
    "jsx-a11y/label-has-associated-control": [
      "error",
      {
        assert: "both",
        depth: 25,
      },
    ],

    // interactive elements turned non-interactive must use one of these roles
    "jsx-a11y/no-interactive-element-to-noninteractive-role": [
      "error",
      {
        tr: ["none", "presentation"],
      },
    ],

    // non-interactive elements that are given an interactive role must be
    // limited to semantically appropriate roles for each element type
    "jsx-a11y/no-noninteractive-element-to-interactive-role": [
      "error",
      {
        ul: ["listbox", "menu", "menubar", "radiogroup", "tablist", "tree", "treegrid"],
        ol: ["listbox", "menu", "menubar", "radiogroup", "tablist", "tree", "treegrid"],
        li: ["menuitem", "option", "row", "tab", "treeitem"],
        table: ["grid"],
        td: ["gridcell"],
      },
    ],

    // oxlint's no-redundant-roles does not accept options; the default
    // behaviour already catches the most common case (nav + navigation)
    "jsx-a11y/no-redundant-roles": "error",
  },
};

export default config;
