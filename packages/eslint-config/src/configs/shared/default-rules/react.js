// @ts-check

/**
 * This file contains rules related to react. It is meant to be extended by react specific configs,
 * it is not meant to be used directly.
 * We are using @eslint-react/eslint-plugin for react specific rules, but we are not extending their
 * recommended config as it includes some rules that we do not want to enforce, and it does not include
 * some rules that we do want to enforce. We are only using the rules that we find useful and relevant
 * for our projects.
 * For more information on the available rules and their options, please refer to the documentation of
 * @eslint-react/eslint-plugin and @eslint-react/eslint-plugin-hooks:
 * https://beta.eslint-react.xyz/docs/rules/overview
 */

/**
 * @satisfies {import("../../../types/index.js").ESLintFlatConfig["rules"]}
 */
const rules = {
  // Add or modify react specific rules here if needed - use https://beta.eslint-react.xyz/docs/rules/overview for reference
};

export default rules;
