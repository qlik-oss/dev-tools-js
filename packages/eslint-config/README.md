# @qlik/eslint-config

Qlik's ESlint config for pure JavaScript/TypeScript environments.

## Usage

These configs assumes that you are using TypeScript. It is still possible to write `.js` files and get linting on those.

To get started, create `eslint.config.js` (if your package json has `"type": "module"`), otherwise create `eslint.config.mjs`.
If you are not building your project with TypeScript (using Webpack or Vite for example), then tell TypeScript to include
all files by setting "include": `[".*", "**/*"]` in `tsconfig.json`.

For a pure environment with no specific frameworks use:

```js
// @ts-check
import qlik from "@qlik/eslint-config";

export default qlik.compose(
  ...qlik.configs.recommended,
  ...qlik.configs.esm, // or qlik.config.cjs
  {
    ignores: ["dist", "npm", "node_modules"],
  }
);
```

Using React:

```js
// @ts-check
import qlik from "@qlik/eslint-config";

export default qlik.compose(
  ...qlik.configs.recommended,
  ...qlik.configs.esm, // or qlik.config.cjs
  ...qlik.configs.react,
  ...qlik.configs.vitest, // or qlik.configs.jest if you are using Jest
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
  ...qlik.configs.recommended,
  ...qlik.configs.esm,
  ...qlik.configs.svelte,
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
  ...qlik.configs.recommended,
  ...qlik.configs.esm,
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
  ...qlik.configs.recommended,
  ...qlik.configs.esm, // or qlik.configs.cjs
  {
    ignores: ["dist", "npm", "node_modules"],
  }
);
```

Additional configs that can be used in conjunction with the above:

```js
// @ts-check
import qlik from "@qlik/eslint-config";

export default qlik.compose(
  ...qlik.configs.recommended,
  ...qlik.configs.esm, // or qlik.configs.cjs
  ...qlik.configs.vitest, // or qlik.configs.jest
  ...qlik.configs.playwright,
  {
    ignores: ["dist", "npm", "node_modules"],
  }
);
```
