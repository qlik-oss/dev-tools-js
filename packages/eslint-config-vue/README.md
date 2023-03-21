# @qlik/eslint-config-vue

ESlint config for vue projects. Based on vue3-recommended/prettier config with some modifications.

## usage

Add one of the following to `package.json` or an equivalent `.eslint` config file.

For javascript (.js, .vue) use:

```json
"eslintConfig": {
    "extends": [
      "@qlik/eslint-config-vue"
    ],
    "root": true
  },
```

To enable linting on typescript (.ts, .vue with lang=ts):

```json
"eslintConfig": {
    "extends": [
      "@qlik/eslint-config-vue/typescript"
    ],
    "root": true
  },
```

Additional configs that can be used in conjunction with the above:

```json
"eslintConfig": {
    "extends": [
      "...",
      "@qlik/eslint-config-svelte/jest" // adds linting on jest test and config files
      // OR
      "@qlik/eslint-config-svelte/vitest" // adds linting on vitest test and config files
      // AND/OR
      "@qlik/eslint-config-svelte/playwright" // adds linting on playwright test and config files
    ],
    "root": true
  },
```
