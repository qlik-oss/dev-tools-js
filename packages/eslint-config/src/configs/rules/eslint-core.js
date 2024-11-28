// @ts-check
import confusingBrowserGlobals from "confusing-browser-globals";

/**
 * @satisfies {import("../../types/index.js").ESLintFlatConfig["rules"]}
 *
 * eslint core package https://eslint.org/docs/latest/rules/
 */
const rules = {
  // modify/add rules from eslint core package here additionally to the recommended rules

  // enforces return statements in callbacks of array's methods
  // https://eslint.org/docs/rules/array-callback-return
  "array-callback-return": ["error", { allowImplicit: true }],

  // treat var statements as if they were block scoped
  // https://eslint.org/docs/rules/block-scoped-var
  "block-scoped-var": "error",

  // enforce that class methods use "this"
  // https://eslint.org/docs/rules/class-methods-use-this
  "class-methods-use-this": [
    "warn",
    {
      exceptMethods: [],
    },
  ],

  // require return statements to either always or never specify values
  // https://eslint.org/docs/rules/consistent-return
  "consistent-return": "error",

  // specify curly brace conventions for all control statements
  // https://eslint.org/docs/rules/curly
  curly: 0,

  // require default case in switch statements
  // https://eslint.org/docs/rules/default-case
  "default-case": ["error", { commentPattern: "^no default$" }],

  // Enforce default clauses in switch statements to be last
  // https://eslint.org/docs/rules/default-case-last
  "default-case-last": "error",

  // https://eslint.org/docs/rules/default-param-last
  "default-param-last": "error",

  // DEPRECATED. enforces consistent newlines before or after dots
  // https://eslint.org/docs/rules/dot-location
  // "dot-location": ["error", "property"],

  // require the use of === and !==
  // https://eslint.org/docs/rules/eqeqeq
  eqeqeq: ["error", "always", { null: "ignore" }],

  // Require grouped accessor pairs in object literals and classes
  // https://eslint.org/docs/rules/grouped-accessor-pairs
  "grouped-accessor-pairs": "error",

  // enforce a maximum number of classes per file
  // https://eslint.org/docs/rules/max-classes-per-file
  "max-classes-per-file": ["error", 1],

  // disallow the use of alert, confirm, and prompt
  // https://eslint.org/docs/rules/no-alert
  "no-alert": "error",

  // disallow use of arguments.caller or arguments.callee
  // https://eslint.org/docs/rules/no-caller
  "no-caller": "error",

  // disallow lexical declarations in case/default clauses
  // https://eslint.org/docs/rules/no-case-declarations
  "no-case-declarations": "error",

  // Disallow returning value in constructor
  // https://eslint.org/docs/rules/no-constructor-return
  "no-constructor-return": "error",

  // disallow else after a return in an if
  // https://eslint.org/docs/rules/no-else-return
  "no-else-return": ["error", { allowElseIf: false }],

  // disallow empty functions, except for standalone funcs/arrows
  // https://eslint.org/docs/rules/no-empty-function
  "no-empty-function": [
    "error",
    {
      allow: ["arrowFunctions", "functions", "methods"],
    },
  ],

  // disallow empty destructuring patterns
  // https://eslint.org/docs/rules/no-empty-pattern
  "no-empty-pattern": "error",

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

  // disallow fallthrough of case statements
  // https://eslint.org/docs/rules/no-fallthrough
  "no-fallthrough": "error",

  // DEPRECATED. disallow the use of leading or trailing decimal points in numeric literals
  // https://eslint.org/docs/rules/no-floating-decimal
  // "no-floating-decimal": "error",

  // disallow reassignments of native objects or read-only globals
  // https://eslint.org/docs/rules/no-global-assign
  "no-global-assign": ["error", { exceptions: [] }],

  // disallow use of eval()-like methods
  // https://eslint.org/docs/rules/no-implied-eval
  "no-implied-eval": "error",

  // disallow usage of __iterator__ property
  // https://eslint.org/docs/rules/no-iterator
  "no-iterator": "error",

  // disallow use of labels for anything other than loops and switches
  // https://eslint.org/docs/rules/no-labels
  "no-labels": ["error", { allowLoop: false, allowSwitch: false }],

  // disallow unnecessary nested blocks
  // https://eslint.org/docs/rules/no-lone-blocks
  "no-lone-blocks": "error",

  // disallow creation of functions within loops
  // https://eslint.org/docs/rules/no-loop-func
  "no-loop-func": "error",

  // don't use magic numbers
  // https://eslint.org/docs/rules/no-magic-numbers
  "no-magic-numbers": "off",

  // DEPRECATED. disallow use of multiple spaces
  // https://eslint.org/docs/rules/no-multi-spaces
  // "no-multi-spaces": [
  //   "error",
  //   {
  //     ignoreEOLComments: false,
  //   },
  // ],

  // disallow use of multiline strings
  // https://eslint.org/docs/rules/no-multi-str
  "no-multi-str": "error",

  // disallow use of new operator when not part of the assignment or comparison
  // https://eslint.org/docs/rules/no-new
  "no-new": "error",

  // disallow use of new operator for Function object
  // https://eslint.org/docs/rules/no-new-func
  "no-new-func": "error",

  // disallows creating new instances of String, Number, and Boolean
  // https://eslint.org/docs/rules/no-new-wrappers
  "no-new-wrappers": "error",

  // Disallow \8 and \9 escape sequences in string literals
  // https://eslint.org/docs/rules/no-nonoctal-decimal-escape
  "no-nonoctal-decimal-escape": "error",

  // Disallow calls to the Object constructor without an argument
  // https://eslint.org/docs/latest/rules/no-object-constructor
  "no-object-constructor": "error",

  // disallow use of (old style) octal literals
  // https://eslint.org/docs/rules/no-octal
  "no-octal": "error",

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

  // disallow declaring the same variable more than once
  // https://eslint.org/docs/rules/no-redeclare
  "no-redeclare": "error",

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
    {
      object: "Math",
      property: "pow",
      message: "Use the exponentiation operator (**) instead.",
    },
  ],

  // disallow use of assignment in return statement
  // https://eslint.org/docs/rules/no-return-assign
  "no-return-assign": ["error", "always"],

  // DEPRECATED. disallow redundant `return await`
  // https://eslint.org/docs/rules/no-return-await
  // "no-return-await": "error",

  // disallow use of `javascript:` urls.
  // https://eslint.org/docs/rules/no-script-url
  "no-script-url": "error",

  // disallow self assignment
  // https://eslint.org/docs/rules/no-self-assign
  "no-self-assign": [
    "error",
    {
      props: true,
    },
  ],

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

  // disallow unused labels
  // https://eslint.org/docs/rules/no-unused-labels
  "no-unused-labels": "error",

  // disallow unnecessary .call() and .apply()
  // https://eslint.org/docs/rules/no-useless-call
  "no-useless-call": "error",

  // Disallow unnecessary catch clauses
  // https://eslint.org/docs/rules/no-useless-catch
  "no-useless-catch": "error",

  // disallow useless string concatenation
  // https://eslint.org/docs/rules/no-useless-concat
  "no-useless-concat": "error",

  // disallow unnecessary string escaping
  // https://eslint.org/docs/rules/no-useless-escape
  "no-useless-escape": "error",

  // disallow redundant return; keywords
  // https://eslint.org/docs/rules/no-useless-return
  "no-useless-return": "error",

  // disallow use of the with statement
  // https://eslint.org/docs/rules/no-with
  "no-with": "error",

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

  // Enforce “for” loop update clause moving the counter in the right direction
  // https://eslint.org/docs/rules/for-direction
  "for-direction": "error",

  // Enforces that a return statement is present in property getters
  // https://eslint.org/docs/rules/getter-return
  "getter-return": ["error", { allowImplicit: true }],

  // disallow using an async function as a Promise executor
  // https://eslint.org/docs/rules/no-async-promise-executor
  "no-async-promise-executor": "error",

  // Disallow await inside of loops
  // https://eslint.org/docs/rules/no-await-in-loop
  "no-await-in-loop": "error",

  // Disallow comparisons to negative zero
  // https://eslint.org/docs/rules/no-compare-neg-zero
  "no-compare-neg-zero": "error",

  // disallow assignment in conditional expressions
  "no-cond-assign": ["error", "always"],

  // disallow use of console
  "no-console": "warn",

  // Disallows expressions where the operation doesn't affect the value
  // https://eslint.org/docs/rules/no-constant-binary-expression
  "no-constant-binary-expression": "error",

  // disallow use of constant expressions in conditions
  "no-constant-condition": "warn",

  // disallow control characters in regular expressions
  "no-control-regex": "error",

  // disallow use of debugger
  "no-debugger": "error",

  // disallow duplicate arguments in functions
  "no-dupe-args": "error",

  // Disallow duplicate conditions in if-else-if chains
  // https://eslint.org/docs/rules/no-dupe-else-if
  "no-dupe-else-if": "error",

  // disallow duplicate keys when creating object literals
  "no-dupe-keys": "error",

  // disallow a duplicate case label.
  "no-duplicate-case": "error",

  // disallow empty statements
  "no-empty": "error",

  // disallow the use of empty character classes in regular expressions
  "no-empty-character-class": "error",

  // disallow assigning to the exception in a catch block
  "no-ex-assign": "error",

  // disallow double-negation boolean casts in a boolean context
  // https://eslint.org/docs/rules/no-extra-boolean-cast
  "no-extra-boolean-cast": "error",

  // DEPRECATED. disallow unnecessary semicolons
  // "no-extra-semi": "error",

  // disallow overwriting functions written as function declarations
  "no-func-assign": "error",

  // https://eslint.org/docs/rules/no-import-assign
  "no-import-assign": "error",

  // disallow function or variable declarations in nested blocks
  "no-inner-declarations": "error",

  // disallow invalid regular expression strings in the RegExp constructor
  "no-invalid-regexp": "error",

  // disallow irregular whitespace outside of strings and comments
  "no-irregular-whitespace": "error",

  // Disallow Number Literals That Lose Precision
  // https://eslint.org/docs/rules/no-loss-of-precision
  "no-loss-of-precision": "error",

  // Disallow characters which are made with multiple code points in character class syntax
  // https://eslint.org/docs/rules/no-misleading-character-class
  "no-misleading-character-class": "error",

  // disallow the use of object properties of the global object (Math and JSON) as functions
  "no-obj-calls": "error",

  // Disallow new operators with global non-constructor functions
  // https://eslint.org/docs/latest/rules/no-new-native-nonconstructor
  "no-new-native-nonconstructor": "error",

  // Disallow returning values from Promise executor functions
  // https://eslint.org/docs/rules/no-promise-executor-return
  "no-promise-executor-return": "error",

  // disallow use of Object.prototypes builtins directly
  // https://eslint.org/docs/rules/no-prototype-builtins
  "no-prototype-builtins": "error",

  // disallow multiple spaces in a regular expression literal
  "no-regex-spaces": "error",

  // Disallow returning values from setters
  // https://eslint.org/docs/rules/no-setter-return
  "no-setter-return": "error",

  // disallow sparse arrays
  "no-sparse-arrays": "error",

  // Disallow template literal placeholder syntax in regular strings
  // https://eslint.org/docs/rules/no-template-curly-in-string
  "no-template-curly-in-string": "error",

  // Disallow confusing multiline expressions
  // https://eslint.org/docs/rules/no-unexpected-multiline
  "no-unexpected-multiline": 0,

  // disallow unreachable statements after a return, throw, continue, or break statement
  "no-unreachable": "error",

  // Disallow loops with a body that allows only one iteration
  // https://eslint.org/docs/rules/no-unreachable-loop
  "no-unreachable-loop": [
    "error",
    {
      ignore: [], // WhileStatement, DoWhileStatement, ForStatement, ForInStatement, ForOfStatement
    },
  ],

  // disallow return/throw/break/continue inside finally blocks
  // https://eslint.org/docs/rules/no-unsafe-finally
  "no-unsafe-finally": "error",

  // disallow negating the left operand of relational operators
  // https://eslint.org/docs/rules/no-unsafe-negation
  "no-unsafe-negation": "error",

  // disallow use of optional chaining in contexts where the undefined value is not allowed
  // https://eslint.org/docs/rules/no-unsafe-optional-chaining
  "no-unsafe-optional-chaining": ["error", { disallowArithmeticOperators: true }],

  // Disallow Unused Private Class Members
  // https://eslint.org/docs/rules/no-unused-private-class-members
  "no-unused-private-class-members": "error",

  // Disallow useless backreferences in regular expressions
  // https://eslint.org/docs/rules/no-useless-backreference
  "no-useless-backreference": "error",

  // Disallow assignments that can lead to race conditions due to usage of await or yield
  // https://eslint.org/docs/rules/require-atomic-updates
  // note: not enabled because it is very buggy
  "require-atomic-updates": "error",

  // disallow comparisons with the value NaN
  "use-isnan": "error",

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

  // verify super() callings in constructors
  "constructor-super": "error",

  // DEPREACTED. enforce the spacing around the * in generator functions
  // https://eslint.org/docs/rules/generator-star-spacing
  // "generator-star-spacing": ["error", { before: false, after: true }],

  // disallow modifying variables of class declarations
  // https://eslint.org/docs/rules/no-class-assign
  "no-class-assign": "error",

  // DEPRECATED. disallow arrow functions where they could be confused with comparisons
  // https://eslint.org/docs/rules/no-confusing-arrow
  // "no-confusing-arrow": [
  //   "error",
  //   {
  //     allowParens: true,
  //   },
  // ],

  // disallow modifying variables that are declared using const
  "no-const-assign": "error",

  // disallow duplicate class members
  // https://eslint.org/docs/rules/no-dupe-class-members
  "no-dupe-class-members": "error",

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

  // disallow to use this/super before super() calling in constructors.
  // https://eslint.org/docs/rules/no-this-before-super
  "no-this-before-super": "error",

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

  // disallow generator functions that do not have yield
  // https://eslint.org/docs/rules/require-yield
  "require-yield": "error",

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

  // disallow shadowing of names such as arguments
  "no-shadow-restricted-names": "error",

  // disallow use of undeclared variables unless mentioned in a /*global */ block
  "no-undef": "error",

  // disallow use of undefined when initializing variables
  "no-undef-init": "error",

  // disallow declaration of variables that are not used in the code
  "no-unused-vars": ["error", { vars: "all", args: "after-used", ignoreRestSiblings: true }],

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

  // Disallow confusing multiline expressions
  // https://eslint.org/docs/rules/no-unexpected-multiline
  "no-unexpected-multiline": 0,

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
