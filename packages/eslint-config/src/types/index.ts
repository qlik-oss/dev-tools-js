/* eslint-disable @typescript-eslint/no-empty-object-type */
import { TSESLint } from "@typescript-eslint/utils";

interface ESLintFlatConfig extends TSESLint.FlatConfig.Config {}
interface ESLintPlugin extends TSESLint.FlatConfig.Plugin {}
interface ESLintLanguageOptions extends TSESLint.FlatConfig.LanguageOptions {}

type QlikEslintConfig = {
  configs: Record<string, ESLintFlatConfig[]>;
};

export type { ESLintFlatConfig, ESLintLanguageOptions, ESLintPlugin, QlikEslintConfig };
