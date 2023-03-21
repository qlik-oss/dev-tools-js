# @qlik/eslint-config

ESlint config for pure javascript/typescript environments. Based on airbnb-base/prettier config with some modifications.

## usage

Simplest approach is to add one of the following field in `package.json`:

For a pure javascript environment use:

```json
"eslintConfig": {
    "extends": [
      "@qlik/eslint-config"
    ],
    "root": true
  },
```

To enable linting on typescript (.ts, .tsx):

```json
"eslintConfig": {
    "extends": [
      "@qlik/eslint-config/typescript"
    ],
    "root": true
  },
```

For a node environment with commonjs modules use:

```json
"eslintConfig": {
    "extends": [
      "@qlik/eslint-config/node"
    ],
    "root": true
  },
```

For a node environment with ES modules use:

```json
"eslintConfig": {
    "extends": [
      "@qlik/eslint-config/node-esm"
    ],
    "root": true
  },
```

Additional configs that can be used in conjunction with the above:

```json
"eslintConfig": {
    "extends": [
      "...",
      "@qlik/eslint-config/jest" // adds linting on jest test and config files
      // OR
      "@qlik/eslint-config/vitest" // adds linting on vitest test and config files
      // AND/OR
      "@qlik/eslint-config/playwright" // adds linting on playwright test and config files
    ],
    "root": true
  },
```
