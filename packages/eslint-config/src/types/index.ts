import type { Linter } from "eslint";

type ESLintFlatConfig = Linter.Config;
type ESLintPlugin = NonNullable<Linter.Config["plugins"]>[string];
type ESLintLanguageOptions = NonNullable<Linter.Config["languageOptions"]>;

type QlikEslintConfig = {
  configs: Record<string, ESLintFlatConfig[]>;
};

export type { ESLintFlatConfig, ESLintLanguageOptions, ESLintPlugin, QlikEslintConfig };
