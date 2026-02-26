// @ts-check
import confusingBrowserGlobals from "confusing-browser-globals";

/**
 * @satisfies {import("../../../types/index.js").ESLintFlatConfig["rules"]}
 *
 * eslint core recommended config https://github.com/eslint/eslint/blob/main/packages/js/src/configs/eslint-recommended.js
 */
const rules = {
  // modify/add rules from eslint core package here additionally to the recommended rules

  // require return statements to either always or never specify values
  // https://eslint.org/docs/rules/consistent-return
  "consistent-return": "error",

  // require default case in switch statements
  // https://eslint.org/docs/rules/default-case
  "default-case": ["error", { commentPattern: "^no default$" }],

  // Enforce default clauses in switch statements to be last
  // https://eslint.org/docs/rules/default-case-last
  "default-case-last": "error",

  // Enforce default parameters to be last
  // https://eslint.org/docs/rules/default-param-last
  "default-param-last": "error",

  // require the use of === and !==
  // https://eslint.org/docs/rules/eqeqeq
  eqeqeq: ["error", "always", { null: "ignore" }],

  // disallow the use of alert, confirm, and prompt
  // https://eslint.org/docs/rules/no-alert
  "no-alert": "error",

  // Disallow returning value in constructor
  // https://eslint.org/docs/rules/no-constructor-return
  "no-constructor-return": "error",

  // disallow use of eval()
  // https://eslint.org/docs/rules/no-eval
  "no-eval": "error",

  // disallow adding to native types
  // https://eslint.org/docs/rules/no-extend-native
  "no-extend-native": "error",

  // disallow unnecessary function binding
  // https://eslint.org/docs/rules/no-extra-bind
  "no-extra-bind": "error",

  // disallow Unnecessary Labels
  // https://eslint.org/docs/rules/no-extra-label
  "no-extra-label": "error",

  // disallow use of eval()-like methods
  // https://eslint.org/docs/rules/no-implied-eval
  "no-implied-eval": "error",

  // disallow usage of __iterator__ property
  // https://eslint.org/docs/rules/no-iterator
  "no-iterator": "error",

  // disallow unnecessary nested blocks
  // https://eslint.org/docs/rules/no-lone-blocks
  "no-lone-blocks": "error",

  // disallow creation of functions within loops
  // https://eslint.org/docs/rules/no-loop-func
  "no-loop-func": "error",

  // don't use magic numbers
  // https://eslint.org/docs/rules/no-magic-numbers
  "no-magic-numbers": "off",

  // disallow use of new operator for Function object
  // https://eslint.org/docs/rules/no-new-func
  "no-new-func": "error",

  // Disallow calls to the Object constructor without an argument
  // https://eslint.org/docs/latest/rules/no-object-constructor
  "no-object-constructor": "error",

  // disallow use of octal escape sequences in string literals, such as
  // var foo = 'Copyright \251';
  // https://eslint.org/docs/rules/no-octal-escape
  "no-octal-escape": "error",

  // disallow reassignment of function parameters
  // disallow parameter object manipulation except for specific exclusions
  // rule: https://eslint.org/docs/rules/no-param-reassign.html
  "no-param-reassign": [
    "error",
    {
      props: true,
      ignorePropertyModificationsFor: [
        "prev", // for reduce accumulators
        "acc", // for reduce accumulators
        "accumulator", // for reduce accumulators
        "e", // for e.returnvalue
        "ctx", // for Koa routing
        "context", // for Koa routing
        "req", // for Express requests
        "request", // for Express requests
        "res", // for Express responses
        "response", // for Express responses
        "$scope", // for Angular 1 scopes
        "staticContext", // for ReactRouter context
        "sharedState", // for shared state in reducers
        "state", // for shared state in reducers
      ],
    },
  ],

  // disallow usage of __proto__ property
  // https://eslint.org/docs/rules/no-proto
  "no-proto": "error",

  // disallow certain object properties
  // https://eslint.org/docs/rules/no-restricted-properties
  "no-restricted-properties": [
    "error",
    {
      object: "arguments",
      property: "callee",
      message: "arguments.callee is deprecated",
    },
    {
      object: "global",
      property: "isFinite",
      message: "Please use Number.isFinite instead",
    },
    {
      object: "self",
      property: "isFinite",
      message: "Please use Number.isFinite instead",
    },
    {
      object: "window",
      property: "isFinite",
      message: "Please use Number.isFinite instead",
    },
    {
      object: "global",
      property: "isNaN",
      message: "Please use Number.isNaN instead",
    },
    {
      object: "self",
      property: "isNaN",
      message: "Please use Number.isNaN instead",
    },
    {
      object: "window",
      property: "isNaN",
      message: "Please use Number.isNaN instead",
    },
    {
      property: "__defineGetter__",
      message: "Please use Object.defineProperty instead.",
    },
    {
      property: "__defineSetter__",
      message: "Please use Object.defineProperty instead.",
    },
  ],

  // disallow use of assignment in return statement
  // https://eslint.org/docs/rules/no-return-assign
  "no-return-assign": ["error", "always"],

  // disallow use of `javascript:` urls.
  // https://eslint.org/docs/rules/no-script-url
  "no-script-url": "error",

  // disallow comparisons where both sides are exactly the same
  // https://eslint.org/docs/rules/no-self-compare
  "no-self-compare": "error",

  // disallow use of comma operator
  // https://eslint.org/docs/rules/no-sequences
  "no-sequences": "error",

  // restrict what can be thrown as an exception
  // https://eslint.org/docs/rules/no-throw-literal
  "no-throw-literal": "error",

  // disallow unmodified conditions of loops
  // https://eslint.org/docs/rules/no-unmodified-loop-condition
  "no-unmodified-loop-condition": "error",

  // disallow usage of expressions in statement position
  // https://eslint.org/docs/rules/no-unused-expressions
  "no-unused-expressions": [
    "error",
    {
      allowShortCircuit: false,
      allowTernary: false,
      allowTaggedTemplates: false,
    },
  ],

  // disallow unnecessary .call() and .apply()
  // https://eslint.org/docs/rules/no-useless-call
  "no-useless-call": "error",

  // disallow useless string concatenation
  // https://eslint.org/docs/rules/no-useless-concat
  "no-useless-concat": "error",

  // disallow redundant return; keywords
  // https://eslint.org/docs/rules/no-useless-return
  "no-useless-return": "error",

  // require using Error objects as Promise rejection reasons
  // https://eslint.org/docs/rules/prefer-promise-reject-errors
  "prefer-promise-reject-errors": ["error", { allowEmptyReject: true }],

  // Prefer Object.hasOwn() over Object.prototype.hasOwnProperty.call()
  // https://eslint.org/docs/rules/prefer-object-has-own
  "prefer-object-has-own": "error",

  // https://eslint.org/docs/rules/prefer-regex-literals
  "prefer-regex-literals": [
    "error",
    {
      disallowRedundantWrapping: true,
    },
  ],

  // require use of the second argument for parseInt()
  // https://eslint.org/docs/rules/radix
  radix: "error",

  // DEPRECATED. require immediate function invocation to be wrapped in parentheses
  // https://eslint.org/docs/rules/wrap-iife.html
  // "wrap-iife": ["error", "outside", { functionPrototypeMethods: false }],

  // require or disallow Yoda conditions
  // https://eslint.org/docs/rules/yoda
  yoda: "error",

  // Disallow await inside of loops
  // https://eslint.org/docs/rules/no-await-in-loop
  "no-await-in-loop": "error",

  // disallow use of console
  "no-console": "warn",

  // DEPRECATED. disallow unnecessary semicolons
  // "no-extra-semi": "error",

  // disallow function or variable declarations in nested blocks
  "no-inner-declarations": "error",

  // Disallow returning values from Promise executor functions
  // https://eslint.org/docs/rules/no-promise-executor-return
  "no-promise-executor-return": "error",

  // Disallow template literal placeholder syntax in regular strings
  // https://eslint.org/docs/rules/no-template-curly-in-string
  "no-template-curly-in-string": "error",

  // Disallow loops with a body that allows only one iteration
  // https://eslint.org/docs/rules/no-unreachable-loop
  "no-unreachable-loop": [
    "error",
    {
      ignore: [], // WhileStatement, DoWhileStatement, ForStatement, ForInStatement, ForOfStatement
    },
  ],

  // disallow use of optional chaining in contexts where the undefined value is not allowed
  // https://eslint.org/docs/rules/no-unsafe-optional-chaining
  "no-unsafe-optional-chaining": ["error", { disallowArithmeticOperators: true }],

  // Disallow assignments that can lead to race conditions due to usage of await or yield
  // https://eslint.org/docs/rules/require-atomic-updates
  // note: not enabled because it is very buggy
  "require-atomic-updates": "error",

  // ensure that the results of typeof are compared against a valid string
  // https://eslint.org/docs/rules/valid-typeof
  "valid-typeof": ["error", { requireStringLiterals: true }],

  // enforces no braces where they can be omitted
  // https://eslint.org/docs/rules/arrow-body-style
  "arrow-body-style": "off",

  // DEPRECATED. require parens in arrow function arguments
  // https://eslint.org/docs/rules/arrow-parens
  // "arrow-parens": ["error", "always"],

  // DEPREACTED. require space before/after arrow function's arrow
  // https://eslint.org/docs/rules/arrow-spacing
  // "arrow-spacing": ["error", { before: true, after: true }],

  // DEPREACTED. enforce the spacing around the * in generator functions
  // https://eslint.org/docs/rules/generator-star-spacing
  // "generator-star-spacing": ["error", { before: false, after: true }],

  // DEPRECATED. disallow arrow functions where they could be confused with comparisons
  // https://eslint.org/docs/rules/no-confusing-arrow
  // "no-confusing-arrow": [
  //   "error",
  //   {
  //     allowParens: true,
  //   },
  // ],

  // DEPRECATED. disallow symbol constructor
  // https://eslint.org/docs/rules/no-new-symbol
  // "no-new-symbol": "error",

  // Disallow specified names in exports
  // https://eslint.org/docs/rules/no-restricted-exports
  "no-restricted-exports": [
    "error",
    {
      restrictedNamedExports: [
        "default", // use `export default` to provide a default export
        "then", // this will cause tons of confusion when your module is dynamically `import()`ed, and will break in most node ESM versions
      ],
    },
  ],

  // disallow specific imports
  // https://eslint.org/docs/rules/no-restricted-imports
  "no-restricted-imports": [
    "off",
    {
      paths: [],
      patterns: [],
    },
  ],

  // disallow useless computed property keys
  // https://eslint.org/docs/rules/no-useless-computed-key
  "no-useless-computed-key": "error",

  // disallow unnecessary constructor
  // https://eslint.org/docs/rules/no-useless-constructor
  "no-useless-constructor": "error",

  // disallow renaming import, export, and destructured assignments to the same name
  // https://eslint.org/docs/rules/no-useless-rename
  "no-useless-rename": [
    "error",
    {
      ignoreDestructuring: false,
      ignoreImport: false,
      ignoreExport: false,
    },
  ],

  // require let or const instead of var
  "no-var": "error",

  // require method and property shorthand syntax for object literals
  // https://eslint.org/docs/rules/object-shorthand
  "object-shorthand": [
    "error",
    "always",
    {
      ignoreConstructors: false,
      avoidQuotes: true,
    },
  ],

  // suggest using arrow functions as callbacks
  "prefer-arrow-callback": "off",

  // suggest using of const declaration for variables that are never modified after declared
  "prefer-const": [
    "error",
    {
      destructuring: "any",
      ignoreReadBeforeAssign: true,
    },
  ],

  // disallow parseInt() in favor of binary, octal, and hexadecimal literals
  // https://eslint.org/docs/rules/prefer-numeric-literals
  "prefer-numeric-literals": "error",

  // use rest parameters instead of arguments
  // https://eslint.org/docs/rules/prefer-rest-params
  "prefer-rest-params": "error",

  // suggest using the spread syntax instead of .apply()
  // https://eslint.org/docs/rules/prefer-spread
  "prefer-spread": "error",

  // suggest using template literals instead of string concatenation
  // https://eslint.org/docs/rules/prefer-template
  "prefer-template": "error",

  // DEPRECATED. enforce spacing between object rest-spread
  // https://eslint.org/docs/rules/rest-spread-spacing
  // "rest-spread-spacing": ["error", "never"],

  // require a Symbol description
  // https://eslint.org/docs/rules/symbol-description
  "symbol-description": "error",

  // DEPRECATED. enforce usage of spacing in template strings
  // https://eslint.org/docs/rules/template-curly-spacing
  // "template-curly-spacing": "error",

  // DEPRECATED. enforce spacing around the * in yield* expressions
  // https://eslint.org/docs/rules/yield-star-spacing
  // "yield-star-spacing": ["error", "after"],

  // disallow labels that share a name with a variable
  // https://eslint.org/docs/rules/no-label-var
  "no-label-var": "error",

  // disallow specific globals
  // https://eslint.org/docs/latest/rules/no-restricted-globals
  "no-restricted-globals": [
    "error",
    {
      name: "isFinite",
      message: "Use Number.isFinite instead",
    },
    {
      name: "isNaN",
      message: "Use Number.isNaN instead",
    },
    ...confusingBrowserGlobals.map((g) => ({
      name: g,
      message: `Use window.${g} instead`,
    })),
  ],

  // disallow declaration of variables already declared in the outer scope
  "no-shadow": "error",

  // disallow use of undefined when initializing variables
  "no-undef-init": "error",

  // require camel case names
  camelcase: ["error", { properties: "never", ignoreDestructuring: false }],

  // DEPRECATED. https://eslint.org/docs/rules/function-call-argument-newline
  // "function-call-argument-newline": ["error", "consistent"],

  // require function expressions to have a name
  // https://eslint.org/docs/rules/func-names
  "func-names": "warn",

  // DEPRECATED. require or disallow newlines around directives
  // https://eslint.org/docs/rules/lines-around-directive
  // "lines-around-directive": [
  //   "error",
  //   {
  //     before: "always",
  //     after: "always",
  //   },
  // ],

  // DEPRECATED. specify the maximum length of a line in your program
  // https://eslint.org/docs/rules/max-len
  // "max-len": [
  //   "error",
  //   100,
  //   2,
  //   {
  //     ignoreUrls: true,
  //     ignoreComments: false,
  //     ignoreRegExpLiterals: true,
  //     ignoreStrings: true,
  //     ignoreTemplateLiterals: true,
  //   },
  // ],

  // require a capital letter for constructors
  "new-cap": [
    "error",
    {
      newIsCap: true,
      newIsCapExceptions: [],
      capIsNew: false,
      capIsNewExceptions: ["Immutable.Map", "Immutable.Set", "Immutable.List"],
    },
  ],

  // DEPRECATED. disallow the omission of parentheses when invoking a constructor with no arguments
  // https://eslint.org/docs/rules/new-parens
  // "new-parens": "error",

  // DEPRECATED. enforces new line after each method call in the chain to make it
  // more readable and easy to maintain
  // https://eslint.org/docs/rules/newline-per-chained-call
  // "newline-per-chained-call": ["error", { ignoreChainWithDepth: 4 }],

  // disallow use of the Array constructor
  "no-array-constructor": "error",

  // disallow use of bitwise operators
  // https://eslint.org/docs/rules/no-bitwise
  "no-bitwise": "error",

  // disallow use of the continue statement
  // https://eslint.org/docs/rules/no-continue
  "no-continue": "error",

  // disallow if as the only statement in an else block
  // https://eslint.org/docs/rules/no-lonely-if
  "no-lonely-if": "error",

  // DEPRECATED. disallow un-paren'd mixes of different operators
  // https://eslint.org/docs/rules/no-mixed-operators
  // "no-mixed-operators": [
  //   "error",
  //   {
  //     // the list of arithmetic groups disallows mixing `%` and `**`
  //     // with other arithmetic operators.
  //     groups: [
  //       ["%", "**"],
  //       ["%", "+"],
  //       ["%", "-"],
  //       ["%", "*"],
  //       ["%", "/"],
  //       ["/", "*"],
  //       ["&", "|", "<<", ">>", ">>>"],
  //       ["==", "!=", "===", "!=="],
  //       ["&&", "||"],
  //     ],
  //     allowSamePrecedence: false,
  //   },
  // ],

  // DEPRECATED. disallow mixed spaces and tabs for indentation
  // "no-mixed-spaces-and-tabs": "error",

  // disallow use of chained assignment expressions
  // https://eslint.org/docs/rules/no-multi-assign
  "no-multi-assign": ["error"],

  // DEPRECATED. disallow multiple empty lines, only one newline at the end, and no new lines at the beginning
  // https://eslint.org/docs/rules/no-multiple-empty-lines
  // "no-multiple-empty-lines": ["error", { max: 1, maxBOF: 0, maxEOF: 0 }],

  // disallow nested ternary expressions
  "no-nested-ternary": "error",

  // DEPRECATED. disallow use of the Object constructor
  // "no-new-object": "error",

  // disallow certain syntax forms
  // https://eslint.org/docs/rules/no-restricted-syntax
  "no-restricted-syntax": [
    "error",
    // {
    //   selector: "ForInStatement",
    //   message:
    //     "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use for..of or Object.{keys,values,entries}, and iterate over the resulting array.",
    // },
    {
      selector: "LabeledStatement",
      message: "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.",
    },
    {
      selector: "WithStatement",
      message: "`with` is disallowed in strict mode because it makes code impossible to predict and optimize.",
    },
  ],

  // DEPRECATED. disallow tab characters entirely
  // "no-tabs": "error",

  // disallow dangling underscores in identifiers
  // https://eslint.org/docs/rules/no-underscore-dangle
  "no-underscore-dangle": "off",

  // disallow the use of Boolean literals in conditional expressions
  // also, prefer `a || b` over `a ? a : b`
  // https://eslint.org/docs/rules/no-unneeded-ternary
  "no-unneeded-ternary": ["error", { defaultAssignment: false }],

  // DEPRECATED. disallow whitespace before properties
  // https://eslint.org/docs/rules/no-whitespace-before-property
  // "no-whitespace-before-property": "error",

  // DEPRECATED. enforce the location of single-line statements
  // https://eslint.org/docs/rules/nonblock-statement-body-position
  // "nonblock-statement-body-position": ["error", "beside", { overrides: {} }],

  // DEPRECATED. require padding inside curly braces
  // "object-curly-spacing": ["error", "always"],

  // DEPRECATED. enforce line breaks between braces
  // https://eslint.org/docs/rules/object-curly-newline
  // "object-curly-newline": [
  //   "error",
  //   {
  //     ObjectExpression: { minProperties: 4, multiline: true, consistent: true },
  //     ObjectPattern: { minProperties: 4, multiline: true, consistent: true },
  //     ImportDeclaration: { minProperties: 4, multiline: true, consistent: true },
  //     ExportDeclaration: { minProperties: 4, multiline: true, consistent: true },
  //   },
  // ],

  // DEPRECATED. enforce "same line" or "multiple line" on object properties.
  // https://eslint.org/docs/rules/object-property-newline
  // "object-property-newline": [
  //   "error",
  //   {
  //     allowAllPropertiesOnSameLine: true,
  //   },
  // ],

  // allow just one var statement per function
  // https://eslint.org/docs/rules/one-var
  "one-var": ["error", "never"],

  // DEPREACTED. require a newline around variable declaration
  // https://eslint.org/docs/rules/one-var-declaration-per-line
  // "one-var-declaration-per-line": ["error", "always"],

  // require assignment operator shorthand where possible or prohibit it entirely
  // https://eslint.org/docs/rules/operator-assignment
  "operator-assignment": ["error", "always"],

  // DEPRECATED. Requires operator at the beginning of the line in multiline statements
  // https://eslint.org/docs/rules/operator-linebreak
  // "operator-linebreak": ["error", "before", { overrides: { "=": "none" } }],

  // Disallow the use of Math.pow in favor of the ** operator
  // https://eslint.org/docs/rules/prefer-exponentiation-operator
  "prefer-exponentiation-operator": "error",

  // Prefer use of an object spread over Object.assign
  // https://eslint.org/docs/rules/prefer-object-spread
  "prefer-object-spread": "error",

  // DEPRECATED. require quotes around object literal property names
  // https://eslint.org/docs/rules/quote-props.html
  // "quote-props": ["error", "as-needed", { keywords: false, unnecessary: true, numbers: false }],

  // DEPRECATED. require or disallow use of semicolons instead of ASI
  // semi: ["error", "always"],

  // DEPRECATED. require or disallow a space immediately following the // or /* in a comment
  // https://eslint.org/docs/rules/spaced-comment
  // "spaced-comment": [
  //   "error",
  //   "always",
  //   {
  //     line: {
  //       exceptions: ["-", "+"],
  //       markers: ["=", "!", "/"], // space here to support sprockets directives, slash for TS /// comments
  //     },
  //     block: {
  //       exceptions: ["-", "+"],
  //       markers: ["=", "!", ":", "::"], // space here to support sprockets directives and flow comment types
  //       balanced: true,
  //     },
  //   },
  // ],

  // require or disallow the Unicode Byte Order Mark
  // https://eslint.org/docs/rules/unicode-bom
  "unicode-bom": ["error", "never"],
};

export default rules;
