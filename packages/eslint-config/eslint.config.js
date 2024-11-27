import eslint from "@eslint/js";
import vitestPlugin from "@vitest/eslint-plugin";
import tseslint from "typescript-eslint";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  // test files
  {
    files: ["**/__tests__/**/*.{js,jsx,ts,tsx}"],
    ...vitestPlugin.configs.recommended,
  },
);
