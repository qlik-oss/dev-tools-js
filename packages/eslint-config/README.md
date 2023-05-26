# @qlik/eslint-config

Qlik's ESlint config for pure javascript/typescript environments. Based on airbnb-base/prettier config with some modifications.

## usage

These configs assumes that you are using typescript. It is still possible to write .js files and get linting on those.

Simplest approach is to add one of the following field in `package.json`:

For a pure environment with no specific frameworks use:

```json
"eslintConfig": {
  "root": true,
  "parserOptions": {
    "project": "path/to/tsconfig.json"
  },
  "extends": [
    "@qlik/eslint-config"
  ]
},
```

Using react:

```json
"eslintConfig": {
  "root": true,
  "parserOptions": {
    "project": "path/to/tsconfig.json"
  },
  "extends": [
    "@qlik/eslint-config/react"
  ]
},
```

Using svelte:

```json
"eslintConfig": {
  "root": true,
  "parserOptions": {
    "project": "path/to/tsconfig.json"
  },
  "extends": [
    "@qlik/eslint-config/svelte"
  ]
},
```

Using react AND svelte (rare occasion):

```json
"eslintConfig": {
  "root": true,
  "parserOptions": {
    "project": "path/to/tsconfig.json"
  },
  "extends": [
    "@qlik/eslint-config/react-svelte"
  ]
},
```

For a node environment with commonjs modules use:

```json
"eslintConfig": {
  "root": true,
  "parserOptions": {
    "project": "path/to/tsconfig.json"
  },
  "extends": [
    "@qlik/eslint-config/node"
  ]
},
```

For a node environment with ES modules use:

```json
"eslintConfig": {
  "root": true,
  "parserOptions": {
    "project": "path/to/tsconfig.json"
  },
  "extends": [
    "@qlik/eslint-config/esm"
  ]
},
```

Additional configs that can be used in conjunction with the above:

```json
"eslintConfig": {
  "root": true,
  "parserOptions": {
    "project": "path/to/tsconfig.json"
  },
  "extends": [
    "...",
    "@qlik/eslint-config/vitest", // adds linting on vitest test and config files
    // AND/OR
    "@qlik/eslint-config/playwright" // adds linting on playwright test and config files
  ]
},
```
