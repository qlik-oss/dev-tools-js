# @qlik/tsconfig

## Usage

- `@qlik/tsconfig/recommended.json` Typescript recommended options. Suitable for typescript projectes using a bundler.
- `@qlik/tsconfig/strictest.json` Typescript recommended options, but with stricter checks.
- `@qlik/tsconfig/node.js` Typescript recommended options for typescript projects targeted towards NodeJS.
- `@qlik/tsconfig/react.json` Same as recommended with React support.
- `@qlik/tsconfig/svelte.json` Same as recommended with Svelte support.

For example, in a Parcel project, create a tsconfig.json:

```json
{
  "extends": "@qlik/tsconfig/react.json",
  "include": ["src"]
}
```

## What is a tsconfig.json

Read here <https://www.typescriptlang.org/docs/handbook/tsconfig-json.html>

Examples of other tsconfig.json's can be found here <https://github.com/tsconfig/bases?tab=readme-ov-file>
