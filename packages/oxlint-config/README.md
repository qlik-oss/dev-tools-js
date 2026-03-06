# @qlik/oxlint-config

Qlik's shared [oxlint](https://oxc.rs/docs/guide/usage/linter) configurations.

This package mirrors the rules from `@qlik/eslint-config` for projects that have adopted (or are migrating to) oxlint. oxlint is dramatically faster than ESLint and covers the majority of rules used in our ESLint configs.

## Requirements

- `oxlint >= 1.0.0`

## Configs

| Config           | Plugins                                     | Use for                 |
| ---------------- | ------------------------------------------- | ----------------------- |
| `recommended.js` | `typescript`, `import`                      | Any JS/TS project       |
| `react.js`       | `typescript`, `import`, `react`, `jsx-a11y` | React projects          |
| `node.js`        | `typescript`, `import`, `node`              | Node.js scripts/servers |
| `vitest.js`      | `typescript`, `import`, `vitest`            | Vitest test files       |
| `jest.js`        | `typescript`, `import`, `jest`              | Jest test files         |

## Usage

Configs are plain JS objects and are consumed via an `oxlint.config.ts` file in your project root. The `defineConfig` helper from `oxlint` provides typing and merging.

### TypeScript / JavaScript project

```ts
// oxlint.config.ts
import { defineConfig } from "oxlint";
import recommended from "@qlik/oxlint-config/recommended.js";

export default defineConfig({ extends: [recommended] });
```

### React project

```ts
// oxlint.config.ts
import { defineConfig } from "oxlint";
import react from "@qlik/oxlint-config/react.js";

export default defineConfig({ extends: [react] });
```

### Node.js project

```ts
// oxlint.config.ts
import { defineConfig } from "oxlint";
import node from "@qlik/oxlint-config/node.js";

export default defineConfig({ extends: [node] });
```

### With test file overrides

Use `overrides` to apply test-specific rules only to test file globs:

```ts
// oxlint.config.ts
import { defineConfig } from "oxlint";
import recommended from "@qlik/oxlint-config/recommended.js";
import vitest from "@qlik/oxlint-config/vitest.js";

export default defineConfig({
  extends: [recommended],
  overrides: [
    {
      files: ["**/__tests__/**", "**/*.test.*", "**/*.spec.*"],
      extends: [vitest],
    },
  ],
});
```

## Running oxlint

```sh
# oxlint.config.ts is picked up automatically
oxlint

# Or point to it explicitly
oxlint --config oxlint.config.ts
```

## Testing

Snapshot files in [`test/generated/`](./test/generated/) show the fully-resolved rule set for each config (as printed by `oxlint --print-config`). They make it easy to review the exact rules that will be enforced and to spot unintended changes in pull requests.

```sh
# Verify committed snapshots match the current config (used in CI)
pnpm test

# Regenerate snapshots after changing a config, then commit the result
pnpm test:update
```

---

## Local development (consuming without npm publish)

You can build and test this package locally without publishing to the npm registry.

### 1. Pack a tarball

```sh
cd packages/oxlint-config
pnpm pack
# Creates:  qlik-oxlint-config-0.1.0.tgz
```

### 2. Consume the tarball in another project

```sh
# In your consumer project
pnpm add /absolute/path/to/dev-tools-js/packages/oxlint-config/qlik-oxlint-config-0.1.0.tgz
```

Or with npm / yarn:

```sh
npm install /absolute/path/to/dev-tools-js/packages/oxlint-config/qlik-oxlint-config-0.1.0.tgz
yarn add /absolute/path/to/dev-tools-js/packages/oxlint-config/qlik-oxlint-config-0.1.0.tgz
```

### 3. Inside this monorepo (workspace protocol)

If your consumer is also a package in this monorepo, use the workspace protocol instead:

```json
// consumer/package.json
{
  "devDependencies": {
    "@qlik/oxlint-config": "workspace:^"
  }
}
```

Then run `pnpm install` from the monorepo root.

### 4. Create your oxlint config

```ts
// oxlint.config.ts
import { defineConfig } from "oxlint";
import recommended from "@qlik/oxlint-config/recommended.js";

export default defineConfig({ extends: [recommended] });
```

---

## Running oxlint alongside ESLint

During migration you can run both linters in sequence. Use
[`eslint-plugin-oxlint`](https://github.com/oxc-project/eslint-plugin-oxlint) to
disable ESLint rules that are already covered by oxlint and avoid duplicate
diagnostics:

```sh
npm install --save-dev eslint-plugin-oxlint
```

```js
// eslint.config.js
import oxlint from "eslint-plugin-oxlint";
export default [
  // ... your existing eslint config
  oxlint.configs["flat/recommended"],
];
```

Then run both:

```sh
oxlint && eslint
```

## Rule coverage notes

The following rules from `@qlik/eslint-config` are **not yet implemented** in
oxlint and remain ESLint-only:

| ESLint rule                                          | Notes                                                            |
| ---------------------------------------------------- | ---------------------------------------------------------------- |
| `camelcase` / `@typescript-eslint/naming-convention` | Not implemented in oxlint; TypeScript types enforce PascalCase   |
| `no-restricted-syntax`                               | Not implemented; `no-labels`/`no-with` cover the important cases |
| `no-restricted-exports`                              | Not implemented                                                  |
| `no-restricted-properties`                           | Not implemented; `prefer-object-has-own` etc. cover key cases    |

### Type-aware TypeScript rules

The following rules from `@typescript-eslint` require type information (💭 in
the oxlint docs). They are available via oxlint's
[type-aware alpha](https://oxc.rs/blog/2025-12-08-type-aware-alpha) and will be
covered automatically once type-aware mode is stable:

- `@typescript-eslint/no-floating-promises`
- `@typescript-eslint/no-misused-promises`
- `@typescript-eslint/no-unnecessary-condition`
- `@typescript-eslint/no-unnecessary-type-arguments`
- `@typescript-eslint/return-await`
- `@typescript-eslint/switch-exhaustiveness-check`
- `@typescript-eslint/use-unknown-in-catch-callback-variable`
- and more
