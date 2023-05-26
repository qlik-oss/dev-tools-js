# dev-tools-js

A monorepo for front-end tooling.

## What's inside?

This monorepo uses [turborepo](https://turbo.build/repo) as a build system and [pnpm](https://pnpm.io) as a package manager. It includes the following packages:

### Packages and test

- packages
  - `browserslist-config`: a config to share target browsers between different front-end tools.
  - `eslint-config`: Qlik's ESLint config for typescript projects.
  - `prettier-config`: Qlik's Prettier config.
  - `tsconfig`: compiler [options](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) Usefule settings for compiling typeScript projects.

## Contributing

Information about developing and contributing can be found in [the contributing guide](./CONTRIBUTING.md).
