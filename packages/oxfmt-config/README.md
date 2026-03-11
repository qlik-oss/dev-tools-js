# @qlik/oxfmt-config

Oxfmt config to share among projects for consistent formatting. The config is based on oxfmt's default values except for `printWidth` which is set to 120 (default is 100), and enables package json sorting.

## usage

Install `@qlik/oxfmt-config` as a devDependency in package.json.

Create an `oxfmt.config.ts`

```ts
import config from "@qlik/oxfmt-config";
import { defineConfig } from "oxfmt";

export default defineConfig({
  ...config,
  ignorePatterns: ["pnpm-lock.yaml"],
});
```
