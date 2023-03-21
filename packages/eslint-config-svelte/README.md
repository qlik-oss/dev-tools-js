# @qlik/eslint-config-svelte

ESlint config for svelte projects. Based on svelte3/prettier config with some modifications.

## usage

For javascript (.js, .svelte) use:

```json
"eslintConfig": {
    "extends": [
      "@qlik/eslint-config-svelte"
    ],
    "root": true
  },
```

To enable linting on typescript (.ts, .svelte with lang=ts):

```json
"eslintConfig": {
    "extends": [
      "@qlik/eslint-config-svelte/typescript"
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
