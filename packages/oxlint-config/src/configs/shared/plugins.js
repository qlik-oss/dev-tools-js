/** @type {NonNullable<import("oxlint").OxlintConfig["plugins"]>} */
const basePlugins = ["unicorn", "typescript", "oxc", "import"];

/** @type {NonNullable<import("oxlint").OxlintConfig["plugins"]>} */
const reactPlugins = [...basePlugins, "react"];

/** @type {NonNullable<import("oxlint").OxlintConfig["plugins"]>} */
const jestPlugins = [...basePlugins, "jest"];

/** @type {NonNullable<import("oxlint").OxlintConfig["plugins"]>} */
const vitestPlugins = [...basePlugins, "vitest"];

export { basePlugins, reactPlugins, jestPlugins, vitestPlugins };
