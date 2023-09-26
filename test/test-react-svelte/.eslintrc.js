module.exports = {
  root: true,
  parserOptions: {
    project: "./tsconfig.eslint.json",
  },
  extends: ["@qlik/eslint-config/react-svelte"],
  ignorePatterns: ["dist", "coverage"],
};
