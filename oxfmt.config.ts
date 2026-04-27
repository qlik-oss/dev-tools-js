import config from "@qlik/oxfmt-config";
import { defineConfig } from "oxfmt";

// TODO: Use `extends` in oxfmt when it supports it, and ideally reference
// it directly from package.json instead of in a config file.
export default defineConfig({
  ...config,
  ignorePatterns: ["**/test/generated", "**/CHANGELOG.md", "pnpm-lock.yaml", ".changeset/"],
});
