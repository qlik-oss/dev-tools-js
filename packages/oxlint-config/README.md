# @qlik/oxlint-config

Qlik's shared [oxlint](https://oxc.rs/docs/guide/usage/linter) configuration.

This package is the oxlint sibling of `@qlik/eslint-config`. It mirrors the current ESLint config's intent with native oxlint rules first, not by mechanically translating every ESLint rule name. Legacy rules that no longer carry useful signal for modern JavaScript and TypeScript projects are intentionally left behind.

## Requirements

- `oxlint >= 1.61.0`
- Node.js version supported by your installed `oxlint` release

## Configs

Import the package root and compose the presets you need with `defineConfig`:

```ts
import qlik from "@qlik/oxlint-config";
import { defineConfig } from "oxlint";

export default defineConfig({
  extends: [qlik.recommended, qlik.react],
  rules: {
    "eslint/no-unused-vars": "error",
  },
});
```

The same presets are also available under `qlik.configs` for parity with `@qlik/eslint-config`.

| Config        | Use for                                                                     |
| ------------- | --------------------------------------------------------------------------- |
| `recommended` | Browser-oriented modern JS/TS projects, with CommonJS config-file overrides |
| `esbrowser`   | Explicit browser ESM projects; currently equivalent to `recommended`        |
| `esm`         | Node.js ESM projects and tooling                                            |
| `cjs`         | Node.js CommonJS projects and tooling                                       |
| `react`       | React projects using oxlint's native React rules                            |
| `vitest`      | Vitest test files or test-focused lint runs                                 |

Named exports are available when you only need one preset:

```ts
import { recommended, vitest } from "@qlik/oxlint-config";
import { defineConfig } from "oxlint";

export default defineConfig({
  extends: [recommended],
  overrides: [
    {
      files: ["**/__test{,s}__/**/*", "**/*.{test,spec}.*"],
      extends: [vitest],
    },
  ],
});
```

## Design Principles

- Prefer native oxlint rules and built-in oxlint plugins.
- Do not use JS plugins in the shared config. Add project-local JS plugins only for gaps that are genuinely important to that project.
- Preserve oxlint's default native plugin set (`unicorn`, `typescript`, `oxc`) when enabling `import`, `react`, or `vitest`.
- Use oxlint categories for broad bug-finding intent, then list only rules that differ from defaults or represent explicit Qlik policy.
- Prefer modern code rules over legacy compatibility rules.
- Keep CommonJS support scoped to CommonJS files and Node-focused presets.

## Migration From ESLint

Use the workspace prompt at [`.github/prompts/migrate-to-oxlint.prompt.md`](../../.github/prompts/migrate-to-oxlint.prompt.md), or copy the prompt below into a Copilot agent chat. It is modeled after the ESLint 9 to 10 migration prompt in `@qlik/eslint-config`, but it focuses on modernization and deletion rather than config translation.

### AI Prompt

```text
I want to migrate this project from ESLint / @qlik/eslint-config to oxlint using @qlik/oxlint-config.

Use the current @qlik/eslint-config behavior as the source of truth for linting intent, but do not mechanically port ESLint rule names. Prefer native oxlint rules and built-in oxlint plugins. When native coverage is missing, prefer Oxlint `jsPlugins` over keeping a parallel ESLint run when the plugin works in Oxlint.

Follow these steps carefully and explain changes where non-trivial:

1. Inspect the current ESLint setup:
   - eslint.config.js/ts or legacy .eslintrc files
   - package.json scripts and dependencies
   - ignore files and inline eslint-disable comments
   - project-specific rules, plugins, resolvers, parser options, and overrides

2. Classify the existing rules:
   - native oxlint equivalent
   - covered by oxlint defaults or categories
   - obsolete legacy rule that should be removed
   - formatting rule that belongs in oxfmt/prettier instead of oxlint
   - project-specific policy that should remain explicit
   - unsupported rule that may require `jsPlugins`, or only if that still fails, a temporary ESLint fallback

3. Update dependencies:
   - add oxlint and @qlik/oxlint-config
   - keep ESLint plugin packages that will be loaded through `jsPlugins`
   - remove ESLint packages only when no remaining rule requires ESLint
   - remove obsolete plugins, resolvers, compatibility packages, and pinned overrides

4. Create oxlint.config.ts using @qlik/oxlint-config:
   - import qlik from "@qlik/oxlint-config"
   - import { defineConfig } from "oxlint"
   - add root `ignorePatterns` for repo-wide exclusions such as `node_modules/**`, `dist/**`, `coverage/**`, and `build/**` when applicable
   - compose qlik.recommended, qlik.react, qlik.esm, qlik.cjs, or qlik.vitest as appropriate
   - use project-local `jsPlugins` or override-level `jsPlugins` for plugin gaps such as `eslint-plugin-testing-library`
   - if a JS plugin has no Oxlint preset, either handwrite the rules you want or import/spread the plugin's recommended/default rules into the override `rules`
   - keep overrides small and tied to real file groups
   - do not recreate ESLint parser/resolver settings unless oxlint actually needs them

5. Clean up scripts and CI:
   - replace eslint commands with oxlint commands
   - migrate repo-wide ignore behavior to root `ignorePatterns`, or use `--ignore-path` / `--ignore-pattern` only when a CLI-only workflow still needs it
   - use oxlint --fix where appropriate
   - use --deny-warnings or --max-warnings 0 only if the previous CI behavior required it
   - keep prettier/oxfmt as separate formatting checks

6. Handle remaining lint failures:
   - prefer code fixes over rule disables
   - delete stale eslint-disable comments or convert only the ones still needed to `oxlint-disable` or config-based ignores
   - for every disabled oxlint rule, add a short justification
   - avoid runtime behavior changes unless explicitly required and reviewed

7. Decide whether ESLint still needs to run:
   - prefer `jsPlugins` for high-value gaps before keeping ESLint, including `eslint-plugin-testing-library`
   - keep ESLint temporarily only for plugins that still do not run correctly in Oxlint, depend on unsupported APIs, require custom file formats, or rely on type-aware plugin behavior that Oxlint cannot cover yet
   - document why each remaining ESLint rule/plugin is still needed
   - add a follow-up to remove it when oxlint gains native support

8. Validate:
   - run oxlint
   - run formatting checks
   - run tests and type checks used by the repository
   - summarize removed rules, retained exceptions, and any follow-up risks

Important:
- Be opinionated and modern.
- Prefer deletion over preserving historical config.
- Prefer native oxlint first, then `jsPlugins`, and only keep ESLint when neither is viable.
- Prefer oxlint defaults and categories over explicit rule lists.
- Keep repo-wide ignores explicit in root `ignorePatterns`.
- Do not preserve rules only because they existed in the old ESLint setup.
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

## Rule Coverage Notes

Some ESLint behavior is intentionally not carried forward:

| ESLint behavior                                      | oxlint decision                                                                                                     |
| ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `eslint-plugin-jsx-a11y`                             | Removed from the current ESLint config, so it is not included here. Add project-local a11y rules only when needed.  |
| `eslint-plugin-jest`                                 | Removed. Vitest is the shared test target.                                                                          |
| `camelcase` / `@typescript-eslint/naming-convention` | No native oxlint equivalent. Prefer TypeScript API design and code review over a heavy naming rule.                 |
| `@typescript-eslint/method-signature-style`          | No native oxlint equivalent. Not worth a JS plugin by default.                                                      |
| `no-restricted-properties`                           | No native oxlint equivalent. Use project-specific rules only for concrete migration hazards.                        |
| `no-restricted-syntax`                               | No broad native selector rule. The config keeps the important native equivalents such as `no-labels` and `no-with`. |
| `import-x/no-unresolved`                             | Not enabled. TypeScript, bundlers, and package managers are better sources of truth for resolution failures.        |
| `import-x/no-extraneous-dependencies`                | Still project-specific and intentionally off, matching the current ESLint config.                                   |
| `eslint-plugin-testing-library`                      | Use it through `jsPlugins` in project-local test overrides. Oxlint does not provide shared presets for JS plugins, so either enable the wanted rules explicitly or import/spread the plugin's recommended/default rules into the override. Keep ESLint only if the plugin still depends on unsupported behavior. |

## Development

Snapshot files in [`packages/oxlint-config/test/generated/`](./test/generated) show the fully resolved rule set for each preset as printed by `oxlint --print-config`.

```sh
pnpm test
pnpm test:update
```

For local package testing:

```sh
cd packages/oxlint-config
pnpm pack
```
