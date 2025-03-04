import eslint from "@eslint/js";
import vitestPlugin from "@vitest/eslint-plugin";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    // node environment
    languageOptions: {
      globals: globals.node,
    },
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  // test files
  {
    files: ["**/__tests__/**/*.{js,jsx,ts,tsx}"],
    ...vitestPlugin.configs.recommended,
  },
);
