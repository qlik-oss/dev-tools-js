module.exports = {
  root: true,
  parserOptions: {
    project: "./tsconfig.eslint.json",
  },
  extends: ["@qlik/eslint-config", "@qlik/eslint-config/vitest"],
  ignorePatterns: ["dist", "coverage"],
};
