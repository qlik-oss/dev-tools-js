<!-- prettier-ignore-start -->
# @qlik/eslint-config

Qlik's ESlint config for JavaScript/TypeScript environments with optional framework support.
Built for ease of use and low config. It is built on standard configs from `@eslint/js` and `typescript-eslint`
and their recommended configs. And it adds some extra support for `vitest` that will add lint rules for unit test
based on standard settings. It is built for basically zero config and will "just work" for standard projects.

## Migrating from v1->v2 ?

Go to the [migration section](#migrating)

## Quick Start

Example `eslint.config.js` that uses typescript, react, vitest. Suitable for a bundler environment for react
development and vitest unit testing.

```js
// @ts-check
import qlik from "@qlik/eslint-config";
import { defineConfig } from "eslint/config";

export default defineConfig(
  ...qlik.configs.react,
  ...qlik.configs.vitest,
  {
    rules: {
      // Override rules if needed
    },
  },
  // Put ignores in its own object so it's global
  {
    ignores: ["dist", "script"],
  },
);
```

Add another eslint plugin just like you would normally do.

```js
// @ts-check
import qlik from "@qlik/eslint-config";
import pluginQuery from "@tanstack/eslint-plugin-query";
import { defineConfig } from "eslint/config";

export default defineConfig([
  ...qlik.configs.react,
  ...qlik.configs.vitest,
  pluginQuery.configs["flat/recommended"],
  {
    ignores: ["dist", "script", "my-special-no-linting.ts"],
  },
]);
```

## typescript

When using typescript with `@qlik/eslint-config`, include all files that should be linted (e.g. `"include": [".*", "**/*"]`) in the project's `tsconfig.json` so that the files are picked up by the project service when linting.

## Usage

The default exports configs works on both TypeScript and JavaSript out of the box. (as long as the file endings are any of `.js, .jsx, .mjs, .cjs, .ts, .tsx, .cts, .mts`).
The configs are eslint flat config arrays populated with configs that has appropriate file endings attached to them. Designed
to diminish the amount of configuration needed in an `eslint.config.js` file.

To get started, create `eslint.config.js` (if your package json has `"type": "module"`), otherwise create `eslint.config.mjs`.
If you are not building your project with TypeScript (using Webpack or Vite for example), then tell TypeScript to include
all files by setting `"include": [".*", "**/*"]` in `tsconfig.json`.

For a pure browser environment with a bundler and no specific framework use:

```js
// @ts-check
import qlik from "@qlik/eslint-config";
import { defineConfig } from "eslint/config";

export default defineConfig(
  ...qlik.configs.recommended, // adds linting on .js, .jsx, .mjs, .cjs, .ts, .tsx, .cts, .mts files. use for pure browser environment
  {
    ignores: ["dist"],
  },
);
```

Using React:

```js
// @ts-check
import qlik from "@qlik/eslint-config";
import { defineConfig } from "eslint/config";

export default defineConfig(
  ...qlik.configs.react, // based on the recommended config and adds react linting on .jsx and .tsx files
  {
    ignores: ["dist"],
  },
);
```

Using Pure ES modules in browser:

```js
// @ts-check
import qlik from "@qlik/eslint-config";
import { defineConfig } from "eslint/config";

export default defineConfig(
  ...qlik.configs.esbrowser, // based on the recommended config and adds specific es module rules (file endings)
  {
    ignores: ["dist"],
  },
);
```

Node environment:

```js
// @ts-check
import qlik from "@qlik/eslint-config";
import { defineConfig } from "eslint/config";

export default defineConfig(
  ...qlik.configs.esm, // or qlik.configs.cjs for commonjs, recommended config with node environment enabled
  {
    ignores: ["dist"],
  },
);
```

Additional configs that can be used in conjunction with the ones above:

```js
// @ts-check
import qlik from "@qlik/eslint-config";
import { defineConfig } from "eslint/config";

export default defineConfig(
  ...qlik.configs.recommended,  // pure browser environment
  ...qlik.configs.vitest,       // enable vitest linting on files inside __test(s)__ folder
  ...qlik.configs.playwright,   // enable playwright linting on files inside ./test(s) folder.
  {
    ignores: ["dist"],
  },
);
```

What if the playwright test files are not in the default `./test` folder?

```js
// @ts-check
import qlik from "@qlik/eslint-config";
import { defineConfig } from "eslint/config";

export default defineConfig(
  ...qlik.configs.recommended, // pure browser environment
  ...qlik.configs.vitest,      // enable vitest linting on files inside __test(s)__ folder
  {
    files: ["playwright/**/*.{js,jsx,ts,tsx}"], // will lint the files inside ./playwright folder with the playwright plugin
    extends: [...qlik.configs.playwright],
  },
  {
    ignores: ["dist"],
  },
);

```

Example: Using React with vitest:

```js
// @ts-check
import qlik from "@qlik/eslint-config";
import { defineConfig } from "eslint/config";

export default defineConfig(
  ...qlik.configs.react,  // based on the recommended config and adds react linting on .jsx and .tsx files
  ...qlik.configs.vitest, // enable vitest linting on files inside __test(s)__ folder
  {
    ignores: ["dist"],
  },
);
```

## Using the named exports configs

The different configs are also accessible through named imports. These configs can be used in specific scenarios where more
control of the configs are needed. The `extends` property can be used to apply a config on certain file patterns.

Example only use javascript rules with react

```js
import { reactJS } from "@qlik/eslint-config";
import { defineConfig } from "eslint/config";

export default defineConfig(
  reactJS,
)
```

with typescript support

```js
import { reactJS, reactTS } from "@qlik/eslint-config";
import { defineConfig } from "eslint/config";

export default defineConfig(
  reactJS,
  reactTS,
)
```

This is equal to:

```js
import qlik from "@qlik/eslint-config";
import { defineConfig } from "eslint/config";

export default defineConfig(
  ...qlik.configs.react,
)
```

The single configs can be useful together with the `extends` property. Below shows an example of a config
that wants to use lint rules for node environment on a part of the code base.

```js
import qlik, { esmJS, cjsJS } from "@qlik/eslint-config";
import { defineConfig } from "eslint/config";

export default defineConfig(
  // apply recommended config to all files
  ...qlik.configs.recommended,
  {
    // set node esm config on .mjs files inside the tools folder
    files: ["tools/**/*.mjs"],
    extends: [esmJS],
  },
  {
    // set node commonJS config on .cjs files inside the tools folder
    files: ["tools/**/*.cjs"],
    extends: [cjsJS],
  },
)

```

## Migrating

The biggest changes between v1 and v2 is the plugins used. Since a lot of plugins does not yet [support ESLint 10](https://github.com/eslint-config/airbnb-extended/issues/65) Some of the plugins was removed or replaced from v1.

- `eslint-plugin-jsx-a11y` - Removed
- `eslint-plugin-jest` - Removed
- `eslint-plugin-playwright` - Removed
- `eslint-plugin-svelte` - Removed
- `eslint-plugin-react` - Replaced with [@eslint-react/eslint-plugin](https://github.com/Rel1cx/eslint-react)
- `eslint-plugin-react-hooks` - Replacd with [@eslint-react/eslint-plugin](https://github.com/Rel1cx/eslint-react)

When migrating from v1 -> v2 do the following:

1. Remove the `qlik.compose` function and replace it with `defineConfig`
2. If you were using any of the removed plugins (e.g. eslint-plugin-jest) you will have to add it to the eslint config.
3. Some rules might have changed, been added or removed so you will likely get new errors/warnings that needs to be addressed

Example of migration:

old config:

```js
// @ts-check
import qlik from "@qlik/eslint-config";
import pluginQuery from "@tanstack/eslint-plugin-query";

export default qlik.compose(
  ...qlik.configs.react,
  ...qlik.configs.vitest,
  pluginQuery.configs["flat/recommended"],
  {
    rules: {
      // Override rules if needed
    },
  },
  // In its own object so it's global
  {
    ignores: ["dist", "node_modules", "script"],
  },
);
```

1. add `import { defineConfig } from "eslint/config";`
2. replace `qlik.compose` with `defineConfig`
3. remove the `...` from the imported configs
4. replace `extend` with `extends` (if present)

new config:

```js
// @ts-check
import qlik from "@qlik/eslint-config";
import pluginQuery from "@tanstack/eslint-plugin-query";
import { defineConfig } from "eslint/config";

export default defineConfig(
  ...qlik.configs.react,
  ...qlik.configs.vitest,
  pluginQuery.configs["flat/recommended"],
  {
    rules: {
      // Override rules if needed
    },
  },
  // In its own object so it's global
  {
    ignores: ["dist", "node_modules", "script"],
  },
);
```

<!-- prettier-ignore-end -->
