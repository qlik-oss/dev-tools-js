import type { QlikEslintConfig } from "./types/index.ts";

/**
 * Qlik's recommended ESLint configuration objects for common scenarios.
 */
export interface QlikEslintConfig {
  configs: {
    /** node commonjs configuration (.js, .ts) */
    cjs: ESLintFlatConfig[];
    /** node esm configuration (.js, .ts) */
    esm: ESLintFlatConfig[];
    /** jest with testing-library configuration (\_\_test(s)\_\_\/\*\* ) */
    jest: ESLintFlatConfig[];
    /** playwright configuration (test(s)\/\*\* ) */
    playwright: ESLintFlatConfig[];
    /** react configuration (.js, .ts, .jsx, .tsx) */
    react: ESLintFlatConfig[];
    /** recommended configuration (.js, .ts) */
    recommended: ESLintFlatConfig[];
    /** svelte configuration (.svelte) */
    svelte: ESLintFlatConfig[];
    /** vitest with testing-library configuration (\_\_test(s)\_\_\/\*\* ) */
    vitest: ESLintFlatConfig[];
  };
  /** utility function for defining configuration object */
  compose: typeof compose;
}

/** node configuration for commonjs for javascript */
export const cjsJS: ESLintFlatConfig;
/** node configuration for commonjs for typescript */
export const cjsTS: ESLintFlatConfig;
/** node configuration for esm for javascript */
export const esmJS: ESLintFlatConfig;
/** node configuration for esm for typescript */
export const esmTS: ESLintFlatConfig;
/** jest configuration for javascript */
export const reactJS: ESLintFlatConfig;
/** jest configuration for typescript */
export const reactTS: ESLintFlatConfig;
/** vanilla configuration for javascript */
export const recommendedJS: ESLintFlatConfig;
/** vanilla configuration for typescript */
export const recommendedTS: ESLintFlatConfig;

// Default export
declare const qlikEslintConfig: QlikEslintConfig;
export default qlikEslintConfig;
