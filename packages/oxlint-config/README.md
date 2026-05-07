# @qlik/oxlint-config

Qlik's shared [oxlint](https://oxc.rs/docs/guide/usage/linter) configuration.

This package is the oxlint sibling of `@qlik/eslint-config`. It mirrors the current ESLint config's intent with native oxlint rules first, not by mechanically translating every ESLint rule name. Legacy rules that no longer carry useful signal for modern JavaScript and TypeScript projects are intentionally left behind.

## Requirements

- `oxlint >= 1.61.0`
- `oxlint-tsgolint >= 0.18.0` (required because the shared presets enable `typeAware` and `typeCheck`)
- Node.js version supported by your installed `oxlint` release

## Configs

Import the package root and prefer a compact `extends` array:

```ts
import qlik from "@qlik/oxlint-config";
import { defineConfig } from "oxlint";

export default defineConfig({
  extends: [qlik.recommended, qlik.react],
});
```

Most projects only need `extends`, optional `ignorePatterns`, and a few targeted overrides. The shared presets already enable `options.typeAware` and `options.typeCheck`, so you should not need to restate them in every project config.

The same presets are also available under `qlik.configs` for parity with `@qlik/eslint-config`.

| Config        | Use for                                                                     |
| ------------- | --------------------------------------------------------------------------- |
| `recommended` | Browser-oriented modern JS/TS projects, with CommonJS config-file overrides |
| `esbrowser`   | Explicit browser ESM projects; currently equivalent to `recommended`        |
| `esm`         | Node.js ESM projects and tooling                                            |
| `cjs`         | Node.js CommonJS projects and tooling                                       |
| `jest`        | Jest test files or test-focused lint runs                                   |
| `react`       | React projects using oxlint's native React rules                            |
| `vitest`      | Vitest test files or test-focused lint runs                                 |

Named exports are available when you prefer shorter imports, but the `jest` and `vitest` presets should still be added at the root. Those presets already scope their test-only behavior internally:

```ts
import { recommended, vitest } from "@qlik/oxlint-config";
import { defineConfig } from "oxlint";

export default defineConfig({
  extends: [recommended, vitest],
});
```

Use project-local overrides only for extra repo-specific test rules. `oxlint` does not support `overrides[].extends`, so adding `jest` or `vitest` at the root is the supported way to compose these presets.

## Design Principles

- Prefer native oxlint rules and built-in oxlint plugins.
- Do not use JS plugins in the shared config. Add project-local JS plugins only for gaps that are genuinely important to that project.
- Preserve oxlint's default native plugin set (`unicorn`, `typescript`, `oxc`) when enabling `import`, `jest`, `react`, or `vitest`.
- Use oxlint categories for broad bug-finding intent, then list only rules that differ from defaults or represent explicit Qlik policy.
- Prefer modern code rules over legacy compatibility rules.
- Keep CommonJS support scoped to CommonJS files and Node-focused presets.

## Typed linting defaults

All shared presets enable oxlint's `options.typeAware` and `options.typeCheck` settings. That keeps `@qlik/oxlint-config` close to the current `@qlik/eslint-config` TypeScript intent, which already relies on type-aware `typescript-eslint` rules plus TypeScript project-service diagnostics.

In practice, that means the native `typescript/*` rules active under typed linting cover the same core areas as the current shared ESLint profile: type imports and exports, promise misuse, unnecessary conditions, unsafe operations, enum safety, return and void correctness, and switch exhaustiveness. The remaining intentional gaps are documented in [Rule Coverage Notes](#rule-coverage-notes).

## Migration From ESLint

Use the workspace prompt at [`.github/prompts/migrate-to-oxlint.prompt.md`](../../.github/prompts/migrate-to-oxlint.prompt.md), or copy the prompt below into a Copilot agent chat. It is modeled after the ESLint 9 to 10 migration prompt in `@qlik/eslint-config`, but it focuses on modernization and deletion rather than config translation.

Prefer a compact root config that mostly uses `extends`. In most migrations, the final `oxlint.config.ts` should be only a handful of lines plus `ignorePatterns` and any genuinely project-specific overrides.

### AI Prompt

```text
I want to migrate this project from ESLint / @qlik/eslint-config to oxlint using @qlik/oxlint-config.

Use the current @qlik/eslint-config behavior as the source of truth for linting intent, but do not mechanically port ESLint rule names. Prefer native oxlint rules and built-in oxlint plugins. When native coverage is missing, prefer Oxlint `jsPlugins` over keeping a parallel ESLint run when the plugin works in Oxlint.

Primary migration goals:

* End up with the smallest maintainable config possible.
* Prefer `extends` over copied rule lists.
* Prefer native oxlint behavior and defaults over explicit config.
* Reduce migration churn and avoid unnecessary rewrites.
* Preserve runtime behavior unless a change is clearly required.
* Minimize noise from legacy areas by scoping overrides locally.
* Prefer temporarily disabling high-volume low-value rules over mass refactors.
* Keep the repository validating cleanly at the end.

The ideal end-state is:

* a very small oxlint.config.ts
* shared presets selectively imported from `@qlik/oxlint-config`
* a compact `extends` array such as recommended/react/vitest or recommended/react/jest
* minimal root-level rules
* minimal overrides
* repo-wide ignores handled through `ignorePatterns`
* JS plugins only where native oxlint coverage is missing
* overrides scoped to real file groups or legacy folders
* legacy exceptions kept local instead of polluting the root config
* no copied shared preset rule lists unless technically necessary

Prefer configurations that feel modern, compact, and easy to reason about.

Follow these steps carefully and explain non-trivial changes:

1. Inspect the current ESLint setup:

   * eslint.config.js/ts or legacy .eslintrc files
   * package.json scripts and dependencies
   * ignore files and inline eslint-disable comments
   * test runner split by file group, such as Vitest vs Jest, plus any test-only plugins
   * project-specific rules, plugins, resolvers, parser options, and overrides

2. Classify the existing rules:

   * native oxlint equivalent
   * covered by oxlint defaults or categories
   * obsolete legacy rule that should be removed
   * formatting rule that belongs in oxfmt/prettier instead of oxlint
   * project-specific policy that should remain explicit
   * unsupported rule that may require `jsPlugins`, or only if that still fails, a temporary ESLint fallback

3. Update dependencies:

   * add oxlint, @qlik/oxlint-config, and oxlint-tsgolint
   * keep ESLint plugin packages that will be loaded through `jsPlugins`
   * remove ESLint packages only when no remaining rule requires ESLint
   * remove obsolete plugins, resolvers, compatibility packages, and pinned overrides
   * aggressively remove dead lint infrastructure

4. Create oxlint.config.ts using @qlik/oxlint-config:

   * import shared presets from `@qlik/oxlint-config`
   * import `defineConfig` from `oxlint`
   * prefer a compact root `extends` array
   * do not expand shared presets into copied rule lists
   * keep the config as small as technically possible
   * do not redundantly configure `typeAware` or `typeCheck`; the shared presets already handle that
   * add root `ignorePatterns` for repo-wide exclusions such as node_modules, dist, coverage, build, generated artifacts, etc.
   * prefer shared `vitest` / `jest` presets instead of rebuilding test rules manually
   * do not rely on `env` alone for Jest or Vitest migrations
   * use `jsPlugins` only for actual coverage gaps
   * if a JS plugin has no Oxlint preset, either:
     * handwrite only the needed rules
     * or import/spread the plugin's recommended/default rules into the override
   * avoid recreating ESLint parser/resolver settings unless Oxlint actually needs them
   * avoid cargo-culting historical config

5. Keep migration churn low:

   * prefer config changes over invasive rewrites
   * prefer targeted casts over elaborate type helper utilities
   * avoid introducing helpers like `isRecord`, `isBoolean`, etc. unless genuinely justified
   * if a rule produces a huge amount of low-value noise, disable it temporarily and document it
   * easily fixable correctness/code-quality issues that genuinely improve the codebase should be fixed
   * avoid broad stylistic rewrites unrelated to the migration
   * do not rewrite working code just to satisfy strict lint purity

6. Handle plugin gaps pragmatically:

   * prefer native Oxlint support first
   * then prefer `jsPlugins`
   * common plugins such as testing-library or tanstack-query should preferably stay inside Oxlint via `jsPlugins`
   * only keep ESLint temporarily for gaps Oxlint genuinely cannot cover yet
   * document every remaining ESLint dependency and why it still exists
   * add follow-up cleanup notes where relevant

7. Clean up scripts and CI:

   * replace eslint commands with oxlint commands
   * migrate ignore behavior into root `ignorePatterns` where practical
   * use oxlint --fix where appropriate
   * keep prettier/oxfmt separate from linting
   * use `--deny-warnings` or `--max-warnings 0` only if prior CI behavior required it

8. Handle remaining lint failures:

   * prefer code fixes over disables
   * delete stale `eslint-disable` comments first
   * keep still-needed `eslint-disable` comments if there are many of them; Oxlint already supports them
   * if only a small number remain, optionally migrate them to `oxlint-disable`
   * every disabled rule should have a short justification
   * avoid runtime behavior changes unless explicitly required and reviewed

9. Validate everything:

   * run oxlint
   * run formatting checks
   * run tests
   * run type checks
   * ensure validation is fully clean before finishing
   * do not stop with partial validation failures

10. Summarize the migration:

* removed rules/plugins/packages
* retained exceptions and why
* remaining ESLint usage, if any
* follow-up risks or cleanup opportunities

Additionally:

* collect migration metrics and include them in the PR description
* include a comparison table with before/after dependency counts, lint times, package reductions, remaining ESLint usage, etc.
* highlight reductions in config complexity, duplicated tooling, and maintenance burden

Important:

* Be opinionated and modern.
* Prefer deletion over preserving historical config.
* Prefer native oxlint first, then `jsPlugins`, and only keep ESLint when neither is viable.
* Prefer `extends` so the final oxlint config stays small and readable.
* Prefer oxlint defaults and categories over explicit rule lists.
* Keep repo-wide ignores explicit in root `ignorePatterns`.
* Do not preserve rules only because they existed in the old ESLint setup.
* Do not introduce unnecessary abstractions during the migration.
* Optimize for a clean, understandable end-state with minimal code churn.
```

## Project-local JS plugins and ignores

When a project still needs an ESLint plugin that Oxlint does not ship natively, prefer `jsPlugins` in the project-local config before keeping a parallel ESLint run. `eslint-plugin-testing-library` is known to work this way. Because Oxlint does not provide shared presets for JS plugins, either enable the specific rules you want or import and spread the plugin's recommended/default rules into the override's `rules`.

Use root `ignorePatterns` for repo-wide exclusions such as `node_modules/**`, `dist/**`, `coverage/**`, and `build/**` so the same ignore list applies in local runs, editors, and CI.

```ts
import qlik from "@qlik/oxlint-config";
import testingLibrary from "eslint-plugin-testing-library";
import { defineConfig } from "oxlint";

const testingLibraryRules = testingLibrary.configs["flat/react"]?.rules ?? {};

export default defineConfig({
  extends: [qlik.recommended],
  ignorePatterns: ["node_modules/**", "dist/**", "coverage/**", "build/**"],
  overrides: [
    {
      files: ["**/*.{test,spec}.{js,jsx,ts,tsx}"],
      jsPlugins: ["eslint-plugin-testing-library"],
      rules: {
        ...testingLibraryRules,
      },
    },
  ],
});
```

## Inline disable directives

Oxlint already honors `eslint-disable`, `eslint-disable-next-line`, and related directives. During migration, remove stale disables first. If a repo only has a small number of still-needed directives, converting them to `oxlint-disable` in the same PR is fine. Otherwise, keep the existing ESLint directives for now and do the rename as a follow-up cleanup. Use `@oxlint/migrate --replace-eslint-comments` only when you intentionally want to make that rename part of the migration.

## Rule Coverage Notes

With `typeAware` and `typeCheck` enabled, the shared presets intentionally stay close to the current `@qlik/eslint-config` TypeScript profile rather than enabling a random new rule surface. Some ESLint behavior is still intentionally not carried forward:

| ESLint behavior                                      | oxlint decision                                                                                                                                                                                                                                                                                                  |
| ---------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `eslint-plugin-jsx-a11y`                             | Removed from the current ESLint config, so it is not included here. Add project-local a11y rules only when needed.                                                                                                                                                                                               |
| `eslint-plugin-jest`                                 | Use the shared `jest` preset for Jest repos. The `vitest` preset keeps Vitest rules explicit so Jest rules do not leak in through native plugin defaults.                                                                                                                                                        |
| `camelcase` / `@typescript-eslint/naming-convention` | No native oxlint equivalent. Prefer TypeScript API design and code review over a heavy naming rule.                                                                                                                                                                                                              |
| `@typescript-eslint/method-signature-style`          | No native oxlint equivalent. Not worth a JS plugin by default.                                                                                                                                                                                                                                                   |
| `no-restricted-properties`                           | No native oxlint equivalent. Use project-specific rules only for concrete migration hazards.                                                                                                                                                                                                                     |
| `no-restricted-syntax`                               | No broad native selector rule. The config keeps the important native equivalents such as `no-labels` and `no-with`.                                                                                                                                                                                              |
| `import-x/no-unresolved`                             | Not enabled. TypeScript, bundlers, and package managers are better sources of truth for resolution failures.                                                                                                                                                                                                     |
| `import-x/no-extraneous-dependencies`                | Still project-specific and intentionally off, matching the current ESLint config.                                                                                                                                                                                                                                |
| `eslint-plugin-testing-library`                      | Use it through `jsPlugins` in project-local test overrides. Oxlint does not provide shared presets for JS plugins, so either enable the wanted rules explicitly or import/spread the plugin's recommended/default rules into the override. Keep ESLint only if the plugin still depends on unsupported behavior. |

## Development

Snapshot files in [`packages/oxlint-config/test/generated/`](./test/generated) show the fully resolved rule set for each preset as printed by `oxlint --print-config`.

`oxlint --rules` is also covered by the package tests so the `Enabled?` column stays aligned with the shared Jest and Vitest presets when they are added through a normal root `oxlint.config.ts` `extends` array.

```sh
pnpm test
pnpm test:update
```

For local package testing:

```sh
cd packages/oxlint-config
pnpm pack
```
