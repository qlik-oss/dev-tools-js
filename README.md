# dev-tools-js

A monorepo for front-end tooling.

## What's inside?

This monorepo uses [turborepo](https://turbo.build/repo) as a build system and [pnpm](https://pnpm.io) as a package manager. It includes the following packages:

### Packages and test

- packages
  - `browserslist-config`: a config to share target browsers between different front-end tools.
  - `eslint-config-base`: Base ESLint [config](https://eslint.org/docs/latest/user-guide/configuring/).
  - `eslint-config`: Qlik's ESLint config for javascript/typescript projects.
  - `eslint-config-react`: Qlik's ESLint config for react projects.
  - `eslint-config-svelte`: Qlik's ESLint config for svelte projects.
  - `prettier-config`: Qlik's Prettier config.
  - `tsconfig`: compiler [options](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) Usefule settings for compiling typeScript projects.

## Contributing

Information about developing and contributing can be found in [the contributing guide](./CONTRIBUTING.md).
