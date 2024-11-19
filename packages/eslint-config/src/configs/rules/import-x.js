// @ts-check

/**
 * @satisfies {import("../../types/index.js").ESLintFlatConfig["rules"]}
 *
 * eslint-plugin-import-x package https://github.com/un-ts/eslint-plugin-import-x/blob/master/README.md
 */
const rules = {
  // modify rules from eslint-plugin-import-x here
  /* -------------------------------------------------------------------------- */
  /*                              Static analysis:                              */
  /* -------------------------------------------------------------------------- */
  // ensure imports point to files/modules that can be resolved
  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-unresolved.md
  "import-x/no-unresolved": ["error", { commonjs: true, caseSensitive: true }],

  // ensure named imports coupled with named exports
  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/named.md#when-not-to-use-it
  "import-x/named": "error",
  /* -------------------------------------------------------------------------- */
  /*                              Helpful warnings:                             */
  /* -------------------------------------------------------------------------- */
  // disallow invalid exports, e.g. multiple defaults
  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/export.md
  "import-x/export": "error",
  // do not allow a default import name to match a named export
  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-named-as-default.md
  "import-x/no-named-as-default": "error",
  // warn on accessing default export property names that are also named exports
  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-named-as-default-member.md
  "import-x/no-named-as-default-member": "error",
  // disallow use of jsdoc-marked-deprecated imports
  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-deprecated.md
  "import-x/no-deprecated": "warn",
  // Forbid the use of extraneous packages
  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-extraneous-dependencies.md
  // paths are treated both as absolute paths, and relative to process.cwd()
  "import-x/no-extraneous-dependencies": [
    "error",
    {
      devDependencies: [
        "test/**", // tape, common npm pattern
        "tests/**", // also common npm pattern
        "spec/**", // mocha, rspec-like pattern
        "**/__tests__/**", // jest pattern
        "**/__mocks__/**", // jest pattern
        "test.{js,jsx,ts,tsx}", // repos with a single test file
        "test-*.{js,jsx,ts,tsx}", // repos with multiple top-level test files
        "**/*{.,_}{test,spec}.{js,jsx,ts,tsx}", // tests where the extension or filename suffix denotes that it is a test
        "**/jest.config.{js,ts}", // jest config
        "**/jest.setup.{js,ts}", // jest setup
        "**/vitest.config.{js,ts}", // vitest config
        "**/vue.config.{js,ts}", // vue-cli config
        "**/svelte.config.{js,ts}", // svelte config
        "**/playwright.config.{js,ts}", // playwright config
        "**/webpack.config.{js,ts}", // webpack config
        "**/webpack.config.*.{js,ts}", // webpack config
        "**/rollup.config.{js,ts}", // rollup config
        "**/rollup.config.*.{js,ts}", // rollup config
        "**/protractor.conf.{js,ts}", // protractor config
        "**/protractor.conf.*.{js,ts}", // protractor config
        "**/.eslintrc.{js,ts}", // eslint config
        "**/eslint.config.{js,ts}", // eslint config
        "**/.prettierrc.{js,ts}", // prettier config
        "**/.prettierrc", // prettier config
      ],
      optionalDependencies: false,
    },
  ],
  // Forbid mutable exports
  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-mutable-exports.md
  "import-x/no-mutable-exports": "error",
  /* -------------------------------------------------------------------------- */
  /*                               Module systems:                              */
  /* -------------------------------------------------------------------------- */
  // disallow AMD require/define
  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-amd.md
  "import-x/no-amd": "error",
  // No Node.js builtin modules
  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-nodejs-modules.md
  // TODO: enable?
  "import-x/no-nodejs-modules": "off",
  /* -------------------------------------------------------------------------- */
  /*                                Style guide:                                */
  /* -------------------------------------------------------------------------- */
  // disallow duplicate imports
  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-duplicates.md
  "import-x/no-duplicates": "error",
  // Ensure consistent use of file extension within the import path
  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/extensions.md
  "import-x/extensions": [
    "error",
    "ignorePackages",
    {
      js: "never",
      mjs: "never",
      jsx: "never",
      ts: "never",
      mts: "never",
      tsx: "never",
    },
  ],
  // Require a newline after the last import-x/require in a group
  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/newline-after-import.md
  "import-x/newline-after-import": "error",
  // Require modules with a single export to use a default export
  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/prefer-default-export.md
  "import-x/prefer-default-export": "off",
  // Forbid import of modules using absolute paths
  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-absolute-path.md
  "import-x/no-absolute-path": "error",
  // Forbid require() calls with expressions
  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-dynamic-require.md
  "import-x/no-dynamic-require": "error",
  // Forbid Webpack loader syntax in imports
  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-webpack-loader-syntax.md
  "import-x/no-webpack-loader-syntax": "error",
  // Prevent importing the default as if it were named
  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-named-default.md
  "import-x/no-named-default": "error",
  // Forbid a module from importing itself
  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-self-import.md
  "import-x/no-self-import": "error",
  // Forbid cyclical dependencies between modules
  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-cycle.md
  "import-x/no-cycle": ["error", { maxDepth: "∞" }],
  // Ensures that there are no useless path segments
  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-useless-path-segments.md
  "import-x/no-useless-path-segments": ["error", { commonjs: true }],
  // Reports modules without any exports, or with unused exports
  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-unused-modules.md
  "import-x/no-unused-modules": "error",
  // Reports the use of import declarations with CommonJS exports in any module except for the main module.
  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-import-module-exports.md
  "import-x/no-import-module-exports": [
    "error",
    {
      exceptions: [],
    },
  ],
  // Use this rule to prevent importing packages through relative paths.
  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-relative-packages-exports.md
  "import-x/no-relative-packages": "error",
  // enforce a consistent style for type specifiers (inline or top-level)
  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/consistent-type-specifier-style.md
  "import-x/consistent-type-specifier-style": ["error", "prefer-inline"],
  // Reports the use of empty named import blocks.
  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-empty-named-blocks.md
  "import-x/no-empty-named-blocks": "error",
};

export default rules;
