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

> Note: a specific `tsconfig.eslint.json` file is specified in
> <https://github.com/qlik-oss/dev-tools-js/blob/main/packages/eslint-config-base/typescript.js#L3>
> for linting typescript (.ts, .tsx)
> , thereby, you need to create such file using:
>
>```json
>// tsconfig.eslint.json
>{
>  "extends": "./tsconfig.json", // your tsconfig file
>  "include": [".*", "./**/*"], // files you would like to lint
>}
>```
>
> Read more from <https://typescript-eslint.io/architecture/parser/#project>

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
