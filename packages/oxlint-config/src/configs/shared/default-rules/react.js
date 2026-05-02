// @ts-check

/** @type {import("oxlint").OxlintConfig["rules"]} */
const rules = {
  "react/exhaustive-deps": "warn",
  "react/jsx-no-comment-textnodes": "warn",
  "react/jsx-no-useless-fragment": "warn",
  "react/no-danger": "warn",
  "react/no-danger-with-children": "error",
  "react/no-direct-mutation-state": "error",
  "react/no-find-dom-node": "error",
  "react/react-in-jsx-scope": "off",
  "react/no-render-return-value": "error",
  "react/no-string-refs": "error",
  "react/no-unsafe": "warn",
  "react/no-will-update-set-state": "warn",
  "react/rules-of-hooks": "error",
  "react/void-dom-elements-no-children": "error",
  "react/no-array-index-key": "error",
};

export default rules;
