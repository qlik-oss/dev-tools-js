// @ts-check

/**
 * Overrides for the recommended ruleset we use from eslint-plugin-react-hooks.
 *
 * @satisfies {import("../../types/index.js").ESLintFlatConfig["rules"]}
 */
const rules = {
  "react-hooks/exhaustive-deps": "error",
};

export default rules;
