// @ts-check
import { defineConfig } from "eslint/config";
import qlik from "@qlik/eslint-config";

export default defineConfig(qlik.configs.esm, qlik.configs.vitest);
