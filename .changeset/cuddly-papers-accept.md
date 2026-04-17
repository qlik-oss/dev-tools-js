---
"@qlik/eslint-config": major
---

BREAKING CHANGES

`@qlik/eslint-config` now supports ESLint 10

- `eslint-plugin-jsx-a11y` - Removed
- `eslint-plugin-jest` - Removed
- `eslint-plugin-playwright` - Removed
- `eslint-plugin-svelte` - Removed
- `eslint-plugin-react` - Replaced with [@eslint-react/eslint-plugin](https://github.com/Rel1cx/eslint-react)
- `eslint-plugin-react-hooks` - Replaced with [@eslint-react/eslint-plugin](https://github.com/Rel1cx/eslint-react)
- the `compose` function has been removed and should be replaced with `defineConfig` from eslint

See the [Migration Guide](https://github.com/qlik-oss/dev-tools-js/blob/main/packages/eslint-config/README.md#migrating) on how to migrate.
