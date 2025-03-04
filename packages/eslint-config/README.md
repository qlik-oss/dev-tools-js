<!-- prettier-ignore-start -->
# @qlik/eslint-config

Qlik's ESlint config for JavaScript/TypeScript environments with optional framework support.

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

- Updates [`@typescript-eslint/typescript-eslint`](https://github.com/typescript-eslint/typescript-eslint) to v8, this brings
a few new rules. See article for v8 <https://typescript-eslint.io/blog/announcing-typescript-eslint-v8>
- Moves from [`eslint-plugin-import`](https://github.com/import-js/eslint-plugin-import) to [`eslint-plugin-import-x`](https://github.com/un-ts/eslint-plugin-import-x).
If you reference any of the `import/` rules you'll need to replace `import/` with `import-x/`.
- Some stylistic rules have been disabled (for example `function` vs arrow functions)

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

export default qlik.compose(
  ...qlik.configs.recommended, // adds linting on .js, .jsx, .mjs, .cjs, .ts, .tsx, .cts, .mts files. use for pure browser environment
  {
    ignores: ["dist", "npm", "node_modules"],
  },
);
```

Using React:

```js
// @ts-check
import qlik from "@qlik/eslint-config";

export default qlik.compose(
  ...qlik.configs.react, // based on the recommended config and adds react linting on .jsx and .tsx files
  {
    ignores: ["dist", "node_modules"],
  },
);
```

Using Pure ES modules in browser:

```js
// @ts-check
import qlik from "@qlik/eslint-config";

export default qlik.compose(
  ...qlik.configs.esbrowser, // based on the recommended config and adds specific es module rules (file endings)
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
  ...qlik.configs.svelte, // based on the recommended config and adds svelte linting on .svelte files
  {
    ignores: ["dist", "node_modules"],
  },
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
  },
);
```

Node environment:

```js
// @ts-check
import qlik from "@qlik/eslint-config";

export default qlik.compose(
  ...qlik.configs.esm, // or qlik.configs.cjs for commonjs, recommended config with node environment enabled
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
  ...qlik.configs.recommended,  // pure browser environment
  ...qlik.configs.vitest,       // enable vitest linting on files inside __test(s)__ folder
  ...qlik.configs.jest,         // enable jest linting on files inside __test(s)__ folder, DON'T use together with vitest
  ...qlik.configs.playwright,   // enable playwright linting on files inside ./test(s) folder.
  {
    ignores: ["dist", "npm", "node_modules"],
  },
);
```

Example: Using React with vitest:

```js
// @ts-check
import qlik from "@qlik/eslint-config";

export default qlik.compose(
  ...qlik.configs.react, // based on the recommended config and adds react linting on .jsx and .tsx files
  ...qlik.configs.vitest,       // enable vitest linting on files inside __test(s)__ folder
  {
    ignores: ["dist", "node_modules"],
  },
);
```

## Using the named exports configs

The different configs are also accessible through named imports. These configs can be used in specific scenarios where more
control of the configs are needed. The `extend` property can be used to apply a config on certain file patterns.

Example only use javascript rules with react

```js
import qlik, { recommendedJS, reactJS } from "@qlik/eslint-config";

export default qlik.compose(
  reactJS,
)
```

with typescript support

```js
import qlik, { recommendedJS, reactJS } from "@qlik/eslint-config";

export default qlik.compose(
  reactJS,
  reactTS,
)
```

This is equal to:

```js
import qlik from "@qlik/eslint-config";

export default qlik.compose(
  ...qlik.configs.react,
)
```

Using only javascript and svelte

```js
import qlik, { recommendedJS, svelteJS } from "@qlik/eslint-config";

export default qlik.compose(
  recommendedJS,
  svelteJS,
)
```

The single configs can be useful together with the `extend` property. Below shows an example of a config
that wants to use lint rules for node environment on a part of the code base.

```js
import qlik, { esmJS } from "@qlik/eslint-config";

export default qlik.compose(
  // apply recommended config to all files
  ...qlik.configs.recommended,
  // set node esm config on .js files inside the tools folder
  {
    files: ["tools/**/*.js"],
    extend: [esmJS],
  },
)

```

This will take the configs in the `extend` array and perform a deep merge of whatever is defined in the object containing
the `extend` property with the configs in the `extend` array and return them as separate configs. The deep merge has three
exceptions. `files`, `ignores` and `globals` are always overwritten by the later config.

```js
import qlik, { esmJS } from "@qlik/eslint-config";

export default qlik.compose(
  {
    extend: [...qlik.configs.recommended], // contains two configs (recommendedJS and recommendedTS)
    files: ["only_want_lint_here/**/*.js"],
  },
)
```

This will result in two configs, each with the given file pattern like this:

```js
export default [
  {
    ...recommendedJS config
    files: ["only_want_lint_here/**/*.js"],
  },
  {
    ...recommendedTS config
    files: ["only_want_lint_here/**/*.js"],
  }
]
```

### More examples with export

One GOTCHA about the flat configs. If there's no `files` property in one of the configs in the config array it is applied to every file. So in the case of turning off a rule that belongs to specific config e.g. `@typescript/eslint`. The following
approach can be problematic.

```js
// @ts-check
import qlik from "@qlik/eslint-config";

export default qlik.compose(
  ...qlik.configs.recommended, // <-- typescript-eslint is applied to .ts files only
  {
    rules: {
      // I want to change this rule, but it is applied to all files so if I have a .js file somewhere getting linted I will get an ERROR about missing plugin.
      "@typescript-eslint/method-signature-style": "off",
    },
  },
);
```

This will have to be fine-tuned. However, it is recommended to not disable rules.

```js
// @ts-check
import qlik from "@qlik/eslint-config";

export default qlik.compose(
  ...qlik.configs.recommended, // <-- typescript-eslint is applied to .ts files only
  {
    files: ["**/*.ts"]
    rules: {
      // typescript specific rules here
      "@typescript-eslint/method-signature-style": "off",
    },
  },
  {
    rules: {
      // these are fine, since they are applied to all files
      "no-var": "off",
      "import-x/no-unresolved": "off"
    },
  },
);
```

Another GOTCHA can happen with the vitest and jest configs

```js
// @ts-check
import qlik from "@qlik/eslint-config";

export default qlik.compose(
  ...qlik.configs.recommended,
  qlik.configs.vitest, // <-- this is applied to files inside __test(s)__ folders by default for our convenience
  {
    rules: {
      // I want to change this rule, but it doesn't work because it is applied to all files
      "vitest/max-nested-describe": [
        "error",
        {
          "max": 3
        },
      ],
    },
  },
);
```

Here the `extend` feature becomes helpful

```js
// @ts-check
import qlik from "@qlik/eslint-config";

export default qlik.compose(
  ...qlik.configs.recommended,
  {
    extend: [qlik.configs.vitest],
    rules: {
      // This will add or overwrite the rule in the default config
      "vitest/max-nested-describe": [
        "error",
        {
          "max": 3
        },
      ],
    },
  },
);
```

Example of changing the default file patterns on the vitest config.

```js
// @ts-check
import qlik from "@qlik/eslint-config";

export default qlik.compose(
  ...qlik.configs.recommended,  // pure browser environment, no framework config added
  {
    // adds vitest lint rules on the specified files with an altered rule
    files: ['**/my_tests_are_here/*.spec.ts']
    extend: [qlik.configs.vitest],
    rules: {
      "vitest/max-nested-describe": [
        "error",
        {
          "max": 3
        }
      ]
    }
  },
);
```

This will result in a final config looking like this:

```js
export default [
  {
    ...recommendedJS config
  },
  {
    ...recommendedTS config
  },
  {
    files: ['**/my_tests_are_here/*.spec.ts'],
    ...vitest config
    rules: {
      ... vitest config rules,
      "vitest/max-nested-describe": [
        "error",
        {
          "max": 3
        }
      ]
    }
  }
]
```

<!-- prettier-ignore-end -->
