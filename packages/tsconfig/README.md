# @qlik/tsconfig

## Usage

- `@qlik/tsconfig/base.json` Typescript recommended options. Suitable for node.
- `@qlik/tsconfig/bundler.json` Extends `base.json`. Suitable for a project using a bundler.
- `@qlik/tsconfig/react.json` extends `bundler.json` and can be used for a TypeScript React project.
- `@qlik/tsconfig/vue.json` extends `bundler.json` and can be used for a TypeScript Vue project.

For example, in a Parcel project, create a tsconfig.json:

```json
{
  "extends": "@qlik/tsconfig/react.json",
  "include": ["src"]
}
```

## What is a tsconfig.json

Read here <https://www.typescriptlang.org/docs/handbook/tsconfig-json.html>
