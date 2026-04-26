---
description: "Migrate a repository from ESLint or @qlik/eslint-config to native-first @qlik/oxlint-config"
agent: "agent"
---

I want to migrate this project from ESLint / @qlik/eslint-config to oxlint using @qlik/oxlint-config.

Use the current @qlik/eslint-config behavior as the source of truth for linting intent, but do not mechanically port ESLint rule names. Prefer native oxlint rules and built-in oxlint plugins. Use JS plugins only when a missing rule is still valuable enough to justify the compatibility cost.

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
   - unsupported rule that may require keeping ESLint or adding a JS plugin

3. Update dependencies:
   - add oxlint and @qlik/oxlint-config
   - remove ESLint packages only when no remaining rule requires ESLint
   - remove obsolete plugins, resolvers, compatibility packages, and pinned overrides

4. Create oxlint.config.ts using @qlik/oxlint-config:
   - import qlik from "@qlik/oxlint-config"
   - import { defineConfig } from "oxlint"
   - compose qlik.recommended, qlik.react, qlik.esm, qlik.cjs, or qlik.vitest as appropriate
   - keep overrides small and tied to real file groups
   - do not recreate ESLint parser/resolver settings unless oxlint actually needs them

5. Clean up scripts and CI:
   - replace eslint commands with oxlint commands
   - use oxlint --fix where appropriate
   - use --deny-warnings or --max-warnings 0 only if the previous CI behavior required it
   - keep prettier/oxfmt as separate formatting checks

6. Handle remaining lint failures:
   - prefer code fixes over rule disables
   - delete stale eslint-disable comments or convert only the ones still needed
   - for every disabled oxlint rule, add a short justification
   - avoid runtime behavior changes unless explicitly required and reviewed

7. Decide whether ESLint still needs to run:
   - keep ESLint temporarily only for high-value unsupported rules
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
- Prefer native oxlint over JS plugins.
- Prefer oxlint defaults and categories over explicit rule lists.
- Do not preserve rules only because they existed in the old ESLint setup.
