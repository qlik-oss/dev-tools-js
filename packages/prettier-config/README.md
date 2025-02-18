# @qlik/prettier-config

Prettier config to share among projects for consistent formatting. The config is based on prettier's default values except for `printWidth` which is set to 120. It also adds three plugins `prettier-plugin-organize-imports`, `prettier-plugin-svelte` and `prettier-plugin-packagejson` to keep imports and `package.json` fields consistently sorted.

## usage

Install `@qlik/prettier-config` as a devDependency in package.json.

Add this to `package.json`

```json
"prettier": "@qlik/prettier-config",
```
