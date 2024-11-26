<!-- prettier-ignore-start -->
# @qlik/eslint-config

Qlik's ESlint config for pure JavaScript/TypeScript environments.

## Migrating from 0.x

1. Install latest `@qlik/eslint-config`
2. Update to ESLint 9
3. Rename your config to `eslint.config.js` (if you have `"type": "module"` in your package json) / `eslint.config.mjs` (if otherwise)

example config that uses typescript, react, vitest, react-query plugin:

```js
// @ts-check
import qlik from "@qlik/eslint-config";
import pluginQuery from "@tanstack/eslint-plugin-query";

export default qlik.compose(
  ...qlik.configs.react,
  ...qlik.configs.vitest,
  ...pluginQuery.configs["flat/recommended"],
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

4. If you are not using typescript to build your project, then include all files `"include": [".*", "**/*"]` in the project's `tsconfig.json`
5. Run your `lint` script

### v1 notable changes

- Updates [`@typescript-eslint/typescript-eslint`](https://github.com/typescript-eslint/typescript-eslint) to v8, this brings a few new rules. See article for v8 <https://typescript-eslint.io/blog/announcing-typescript-eslint-v8>
- Moves from [`eslint-plugin-import`](https://github.com/import-js/eslint-plugin-import) to [`eslint-plugin-import-x`](https://github.com/un-ts/eslint-plugin-import-x). If you reference any of the `import/` rules you'll need to replace `import/` with `import-x/`.
- Some stylistic rules have been disabled (for example `function` vs arrow functions)

## Usage

These configs assumes that you are using TypeScript. It is still possible to write `.js` files and get linting on those.

To get started, create `eslint.config.js` (if your package json has `"type": "module"`), otherwise create `eslint.config.mjs`.
If you are not building your project with TypeScript (using Webpack or Vite for example), then tell TypeScript to include
all files by setting "include": `[".*", "**/*"]` in `tsconfig.json`.

For a pure browser environment with no specific frameworks use:

```js
// @ts-check
import qlik from "@qlik/eslint-config";

export default qlik.compose(
  ...qlik.configs.recommended,
  {
    ignores: ["dist", "npm", "node_modules"],
  }
);
```

Using React with vitest:

```js
// @ts-check
import qlik from "@qlik/eslint-config";

export default qlik.compose(
  ...qlik.configs.react,
  {
    ignores: ["dist", "node_modules"],
  },
);
```

Using Svelte:

```js
// @ts-check
import qlik from "@qlik/eslint-config";

export default qlik.compose(
  ...qlik.configs.svelte,
  {
    ignores: ["dist", "node_modules"],
  }
);
```

Using React and Svelte:

```js
// @ts-check
import qlik from "@qlik/eslint-config";

export default qlik.compose(
  ...qlik.configs.react,
  ...qlik.configs.svelte,
  {
    ignores: ["dist", "node_modules"],
  }
);
```

Node environment:

```js
// @ts-check
import qlik from "@qlik/eslint-config";

export default qlik.compose(
  ...qlik.configs.esm, // or qlik.configs.cjs for commonjs
  {
    ignores: ["dist", "npm", "node_modules"],
  },
);
```

Additional configs that can be used in conjunction with the ones above:

```js
// @ts-check
import qlik from "@qlik/eslint-config";

export default qlik.compose(
  ...qlik.configs.recommended,  // pure browser environment, no framework config added
  ...qlik.configs.vitest,       // enable vitest linting on files inside __test(s)__ folder
  ...qlik.configs.jest,         // enable jest linting on files inside __test(s)__ folder, DON'T use together with vitest
  ...qlik.configs.playwright,   // enable playwright linting on files inside ./test(s) folder.
  {
    ignores: ["dist", "npm", "node_modules"],
  },
);
```

A config can be extended if needed. For example if the default file patterns needs to be altered.

```js
// @ts-check
import qlik from "@qlik/eslint-config";

export default qlik.compose(
  ...qlik.configs.recommended,  // pure browser environment, no framework config added
  {
    // adds vitest lint rules on the specified files with an altered rule
    files: ['**/my_tests_are_here/*.spec.ts']
    extends [qlik.configs.vitest],
    rules: {
      "vitest/max-nested-describe": [
        "error",
        {
          "max": 3
        }
      ]
    }
  },
  {
    ignores: ["dist", "npm", "node_modules"],
  },
);
```

<!-- prettier-ignore-end -->
