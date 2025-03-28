// @ts-check

/**
 * @satisfies {import("../../types/index.js").ESLintFlatConfig["rules"]}
 */
const rules = {
  "class-methods-use-this": [
    "warn",
    {
      exceptMethods: [
        "render",
        "getInitialState",
        "getDefaultProps",
        "getChildContext",
        "componentWillMount",
        "UNSAFE_componentWillMount",
        "componentDidMount",
        "componentWillReceiveProps",
        "UNSAFE_componentWillReceiveProps",
        "shouldComponentUpdate",
        "componentWillUpdate",
        "UNSAFE_componentWillUpdate",
        "componentDidUpdate",
        "componentWillUnmount",
        "componentDidCatch",
        "getSnapshotBeforeUpdate",
      ],
    },
  ],

  // Forbid certain propTypes (any, array, object)
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md
  "react/forbid-prop-types": [
    "error",
    {
      forbid: ["any", "array", "object"],
      checkContextTypes: true,
      checkChildContextTypes: true,
    },
  ],

  // Enforce boolean attributes notation in JSX
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
  "react/jsx-boolean-value": ["error", "never", { always: [] }],

  // Prevent usage of .bind() in JSX props
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
  "react/jsx-no-bind": [
    "error",
    {
      ignoreRefs: true,
      allowArrowFunctions: true,
      allowFunctions: false,
      allowBind: false,
      ignoreDOMComponents: true,
    },
  ],

  // Prevent duplicate props in JSX
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md
  "react/jsx-no-duplicate-props": ["error", { ignoreCase: true }],

  // Disallow undeclared variables in JSX
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md
  "react/jsx-no-undef": "error",

  // Enforce PascalCase for user-defined JSX components
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
  "react/jsx-pascal-case": [
    "error",
    {
      allowAllCaps: true,
      ignore: [],
    },
  ],

  // Prevent React to be incorrectly marked as unused
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md
  "react/jsx-uses-react": "off",

  // Prevent variables used in JSX to be incorrectly marked as unused
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md
  "react/jsx-uses-vars": "error",

  // Prevent usage of dangerous JSX properties
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-danger.md
  "react/no-danger": "warn",

  // Prevent usage of deprecated methods
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md
  "react/no-deprecated": ["error"],

  // Prevent usage of setState in componentDidUpdate
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md
  "react/no-did-update-set-state": "error",

  // Prevent usage of setState in componentWillUpdate
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-will-update-set-state.md
  "react/no-will-update-set-state": "error",

  // Prevent usage of isMounted
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md
  "react/no-is-mounted": "error",

  // Prevent using string references
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md
  "react/no-string-refs": "error",

  // Prevent usage of unknown DOM property
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md
  "react/no-unknown-property": "error",

  // Require ES6 class declarations over React.createClass
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md
  "react/prefer-es6-class": ["error", "always"],

  // Require stateless functions when not using lifecycle methods, setState or ref
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
  "react/prefer-stateless-function": ["error", { ignorePureComponents: true }],

  // Prevent missing props validation in a React component definition
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prop-types.md
  "react/prop-types": [
    "error",
    {
      ignore: [],
      customValidators: [],
      skipUndeclared: false,
    },
  ],

  // Prevent missing React when using JSX
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
  "react/react-in-jsx-scope": "off",

  // Require render() methods to return something
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/require-render-return.md
  "react/require-render-return": "error",

  // Prevent extra closing tags for components without children
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
  "react/self-closing-comp": "error",

  // Enforce component methods order
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/sort-comp.md
  "react/sort-comp": [
    "error",
    {
      order: [
        "static-variables",
        "static-methods",
        "instance-variables",
        "lifecycle",
        "/^handle.+$/",
        "/^on.+$/",
        "getters",
        "setters",
        "/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/",
        "instance-methods",
        "everything-else",
        "rendering",
      ],
      groups: {
        lifecycle: [
          "displayName",
          "propTypes",
          "contextTypes",
          "childContextTypes",
          "mixins",
          "statics",
          "defaultProps",
          "constructor",
          "getDefaultProps",
          "getInitialState",
          "state",
          "getChildContext",
          "getDerivedStateFromProps",
          "componentWillMount",
          "UNSAFE_componentWillMount",
          "componentDidMount",
          "componentWillReceiveProps",
          "UNSAFE_componentWillReceiveProps",
          "shouldComponentUpdate",
          "componentWillUpdate",
          "UNSAFE_componentWillUpdate",
          "getSnapshotBeforeUpdate",
          "componentDidUpdate",
          "componentDidCatch",
          "componentWillUnmount",
        ],
        rendering: ["/^render.+$/", "render"],
      },
    },
  ],

  // Prevent missing parentheses around multilines JSX
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md
  "react/jsx-wrap-multilines": "off",

  // Stylistic, Prettier handles this.
  // Enforce spacing around jsx equals signs
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-equals-spacing.md
  "react/jsx-equals-spacing": "off",

  // Stylistic, Prettier handles this.
  // Enforce JSX indentation
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md
  "react/jsx-indent": "off",

  // Disallow target="_blank" on links
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md
  "react/jsx-no-target-blank": ["error", { enforceDynamicLinks: "always" }],

  // only .jsx files may have JSX
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
  "react/jsx-filename-extension": ["error", { extensions: [".jsx"] }],

  // prevent accidental JS comments from being injected into JSX as text
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-comment-textnodes.md
  "react/jsx-no-comment-textnodes": "error",

  // disallow using React.render/ReactDOM.render's return value
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-render-return-value.md
  "react/no-render-return-value": "error",

  // warn against using findDOMNode()
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md
  "react/no-find-dom-node": "error",

  // Prevent problem with children and props.dangerouslySetInnerHTML
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-danger-with-children.md
  "react/no-danger-with-children": "error",

  // Prevent unused propType definitions
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md
  "react/no-unused-prop-types": [
    "error",
    {
      customValidators: [],
      skipShapeProps: true,
    },
  ],

  // Require style prop value be an object or var
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/style-prop-object.md
  "react/style-prop-object": "error",

  // Prevent invalid characters from appearing in markup
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md
  "react/no-unescaped-entities": "error",

  // Prevent passing of children as props
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-children-prop.md
  "react/no-children-prop": "error",

  // Validate whitespace in and around the JSX opening and closing brackets
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-tag-spacing.md
  "react/jsx-tag-spacing": "off",

  // Prevent usage of Array index in keys
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md
  "react/no-array-index-key": "error",

  // We dont use `.defaultProps` any more, we use fallbacks on props (`{ foo = "bar" }`)
  // Enforce a defaultProps definition for every prop that is not a required prop
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/require-default-props.md
  "react/require-default-props": "off",

  // Forbids using non-exported propTypes
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-foreign-prop-types.md
  // this is intentionally set to "warn". it would be "error",
  // but it's only critical if you're stripping propTypes in production.
  "react/forbid-foreign-prop-types": ["warn", { allowInPropTypes: true }],

  // Prevent void DOM elements from receiving children
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/void-dom-elements-no-children.md
  "react/void-dom-elements-no-children": "error",

  // Enforce all defaultProps have a corresponding non-required PropType
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/default-props-match-prop-types.md
  "react/default-props-match-prop-types": ["error", { allowRequiredDefaults: false }],

  // Prevent usage of shouldComponentUpdate when extending React.PureComponent
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-redundant-should-component-update.md
  "react/no-redundant-should-component-update": "error",

  // Prevent unused state values
  // https://github.com/jsx-eslint/eslint-plugin-react/pull/1103/
  "react/no-unused-state": "error",

  // Prevents common casing typos
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-typos.md
  "react/no-typos": "error",

  // Enforce curly braces or disallow unnecessary curly braces in JSX props and/or children
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md
  "react/jsx-curly-brace-presence": ["error", { props: "never", children: "never" }],

  // Stylistic, Prettier handles this.
  // One JSX Element Per Line
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-one-expression-per-line.md
  "react/jsx-one-expression-per-line": "off",

  // Enforce consistent usage of destructuring assignment of props, state, and context
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
  "react/destructuring-assignment": ["error", "always"],

  // Prevent using this.state within a this.setState
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-access-state-in-setstate.md
  "react/no-access-state-in-setstate": "error",

  // Prevent usage of button elements without an explicit type attribute
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/button-has-type.md
  "react/button-has-type": [
    "error",
    {
      button: true,
      submit: true,
      reset: false,
    },
  ],

  // Prevent this from being used in stateless functional components
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-this-in-sfc.md
  "react/no-this-in-sfc": "error",

  // Disallow multiple spaces between inline JSX props
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-multi-spaces.md
  "react/jsx-props-no-multi-spaces": "off",

  // Enforce shorthand or standard form for React fragments
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-fragments.md
  "react/jsx-fragments": ["error", "syntax"],

  // Enforce state initialization style
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/state-in-constructor.md
  "react/state-in-constructor": ["error", "never"],

  // Enforces where React component static properties should be positioned
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/static-property-placement.md
  "react/static-property-placement": "error",

  // This has valid cases but best practice to be explicit about the props
  // Disallow JSX props spreading
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md
  "react/jsx-props-no-spreading": [
    "off",
    {
      html: "enforce",
      custom: "enforce",
      explicitSpread: "ignore",
      exceptions: [],
    },
  ],

  // Prevent usage of `javascript:` URLs
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-script-url.md
  "react/jsx-no-script-url": [
    "error",
    [
      {
        name: "Link",
        props: ["to"],
      },
    ],
  ],

  // Disallow unnecessary fragments
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-useless-fragment.md
  "react/jsx-no-useless-fragment": "error",

  // Stylistic rule
  // Enforce a specific function type for function components
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md
  "react/function-component-definition": "off",

  // Prevent react contexts from taking non-stable values
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-constructed-context-values.md
  "react/jsx-no-constructed-context-values": "error",

  // Prevent creating unstable components inside components
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unstable-nested-components.md
  "react/no-unstable-nested-components": "error",

  // Enforce that namespaces are not used in React elements
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-namespace.md
  "react/no-namespace": "error",

  // Prefer exact proptype definitions
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prefer-exact-props.md
  "react/prefer-exact-props": "error",

  // Lifecycle methods should be methods on the prototype, not class fields
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-arrow-function-lifecycle.md
  "react/no-arrow-function-lifecycle": "error",

  // Prevent usage of invalid attributes
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-invalid-html-attribute.md
  "react/no-invalid-html-attribute": "error",

  // Prevent declaring unused methods of component class
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unused-class-component-methods.md
  "react/no-unused-class-component-methods": "error",

  // Ensure destructuring and symmetric naming of useState hook value and setter variables
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/hook-use-state.md
  "react/hook-use-state": "error",

  // Prevent problematic leaked values from being rendered
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-leaked-render.md
  "react/jsx-no-leaked-render": "error",

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-object-type-as-default-prop.md

  "react/no-object-type-as-default-prop": "error",

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forward-ref-uses-ref.md
  "react/forward-ref-uses-ref": "error",

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spread-multi.md
  "react/jsx-props-no-spread-multi": "error",
};

export default rules;
