// @ts-check
/**
 * Utility function to make it easy to strictly type your "Flat" config file
 *
 * @param {...(import("../types/index.js").ESLintFlatConfigWithExtend)} configs
 * @returns {import("../types/index.js").ESLintFlatConfig[]}
 *
 * @example
 * ```js
 * import eslint from '@eslint/js';
 * import tseslint from 'typescript-eslint';
 *
 * export default qlik.compose(
 *   eslint.configs.recommended,
 *   ...tseslint.configs.recommended,
 *   {
 *     rules: {
 *       '@typescript-eslint/array-type': 'error',
 *     },
 *   },
 * );
 * ```
 */
export default function compose(...configs) {
  return configs.flatMap((configWithExtends, configIndex) => {
    const { extend: extendArr, ...config } = configWithExtends;
    if (extendArr && !Array.isArray(extendArr)) {
      throw new Error("extend property must be an array");
    }
    if (extendArr == null || extendArr.length === 0) {
      return config;
    }
    const undefinedExtensions = extendArr.reduce((acc, extension, extensionIndex) => {
      const maybeExtension = extension;
      if (maybeExtension == null) {
        acc.push(extensionIndex);
      }
      return acc;
    }, /** @type {number[]} */ ([]));
    if (undefinedExtensions.length) {
      const configName = configWithExtends.name != null ? `, named "${configWithExtends.name}",` : " (anonymous)";
      const extensionIndices = undefinedExtensions.join(", ");
      throw new Error(
        `Your config at index ${configIndex}${configName} contains undefined` +
          ` extensions at the following indices: ${extensionIndices}.`,
      );
    }

    return [
      ...extendArr.map((extension) => {
        const name = [config.name, extension.name].filter(Boolean).join("__");
        return {
          ...extension,
          ...(config.files && { files: config.files }),
          ...(config.ignores && { ignores: config.ignores }),
          ...(name && { name }),
        };
      }),
      config,
    ];
  });
}
