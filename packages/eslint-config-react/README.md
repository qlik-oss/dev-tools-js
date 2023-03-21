# @qlik/eslint-config-react

ESlint config for react projects. Based on airbnb/prettier config with some modifications.

## usage

For javascript (.js, .jsx) use:

```json
"eslintConfig": {
    "extends": [
      "@qlik/eslint-config-react"
    ],
    "root": true
  },
```

To enable linting on typescript (.ts, .tsx):

```json
"eslintConfig": {
    "extends": [
      "@qlik/eslint-config-react/typescript"
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
