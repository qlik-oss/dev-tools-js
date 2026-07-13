---
"@qlik/oxlint-config": minor
---

Scope type-aware rules to TypeScript files internally

- Type-aware rules (e.g. `typescript/no-floating-promises`, `typescript/no-unsafe-*`) are now automatically disabled for JS files (`**/*.{js,jsx,mjs,cjs}`) via an internal override. Mixed JS/TS repos no longer need a manual JS override to avoid false positives.
- Test presets (`vitest`, `jest`) are now environment-agnostic: they no longer set `env` or `no-console` at the root level, so they compose cleanly with any base preset via `extends: [esm, vitest]` without overriding env-specific settings.
- Updated migration prompt to emphasize `extends: [config1, config2]` as the preferred composition pattern.
