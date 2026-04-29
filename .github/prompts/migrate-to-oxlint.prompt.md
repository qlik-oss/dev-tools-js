---
description: "Migrate a repository from ESLint or @qlik/eslint-config to native-first @qlik/oxlint-config"
agent: "agent"
---

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
   - add oxlint, @qlik/oxlint-config, and oxlint-tsgolint
   - keep ESLint plugin packages that will be loaded through `jsPlugins`
   - remove ESLint packages only when no remaining rule requires ESLint
   - remove obsolete plugins, resolvers, compatibility packages, and pinned overrides

4. Create oxlint.config.ts using @qlik/oxlint-config:
   - import qlik from "@qlik/oxlint-config"
   - import { defineConfig } from "oxlint"
   - prefer a compact root `extends` array such as `[qlik.recommended, qlik.react]`; do not expand shared presets into copied rule lists
   - keep the config as small as technically possible: usually `extends`, `ignorePatterns`, and a few targeted overrides are enough
   - keep the shared preset defaults for `options: { typeAware: true, typeCheck: true }` unless there is a deliberate repo-specific reason to relax them
   - add root `ignorePatterns` for repo-wide exclusions such as `node_modules/**`, `dist/**`, `coverage/**`, and `build/**` when applicable
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
   - delete stale `eslint-disable` comments first
   - keep still-needed `eslint-disable` comments when there are many of them; oxlint already supports those directives
   - if only a small number of still-needed directives remain, convert them to `oxlint-disable` during the migration, or use `@oxlint/migrate --replace-eslint-comments`
   - for every disabled oxlint rule, add a short justification
   - avoid runtime behavior changes unless explicitly required and reviewed

7. Decide whether ESLint still needs to run:
   - prefer `jsPlugins` for high-value gaps before keeping ESLint, including `eslint-plugin-testing-library`
   - keep ESLint temporarily only for plugins that still do not run correctly in Oxlint, depend on unsupported APIs, require custom file formats, or rely on type-aware plugin behavior that Oxlint still cannot cover even with `typeAware` and `typeCheck` enabled
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
- Prefer `extends` so the final oxlint config stays as small and readable as technically possible.
- Prefer oxlint defaults and categories over explicit rule lists.
- Keep repo-wide ignores explicit in root `ignorePatterns`.
- Do not preserve rules only because they existed in the old ESLint setup.
