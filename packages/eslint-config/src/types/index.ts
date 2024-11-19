/* eslint-disable @typescript-eslint/no-empty-object-type */
import { TSESLint } from "@typescript-eslint/utils";

interface ESLintFlatConfig extends TSESLint.FlatConfig.Config {}
interface ESLintPlugin extends TSESLint.FlatConfig.Plugin {}
interface ESLintLanguageOptions extends TSESLint.FlatConfig.LanguageOptions {}

interface ESLintFlatConfigWithExtend extends ESLintFlatConfig {
  /**
   * Allows you to "extend" a set of configs similar to `extends` from the
   * classic configs.
   *
   * This is just a convenience short-hand to help reduce duplication.
   *
   * ```js
   * export default qlikEslint.compose({
   *   files: ['** /*.ts'],
   *   extend: [
   *     ...qlikEslint.configs.ts,
   *   ],
   *   rules: {
   *     '@typescript-eslint/array-type': 'error',
   *     '@typescript-eslint/consistent-type-imports': 'error',
   *   },
   * })
   *
   * // expands to
   *
   * export default [
   *   ...qlikEslint.configs.ts.map(conf => ({
   *     ...conf,
   *     files: ['** /*.ts'],
   *   })),
   *   {
   *     files: ['** /*.ts'],
   *     rules: {
   *       '@typescript-eslint/array-type': 'error',
   *       '@typescript-eslint/consistent-type-imports': 'error',
   *     },
   *   },
   * ]
   * ```
   */
  extend?: ESLintFlatConfig[];
}

export type QlikEslintConfig = {
  configs: Record<string, ESLintFlatConfig[]>;
  compose: (...configs: ESLintFlatConfigWithExtend[]) => ESLintFlatConfig[];
};

export type { ESLintFlatConfig, ESLintFlatConfigWithExtend, ESLintLanguageOptions, ESLintPlugin };
