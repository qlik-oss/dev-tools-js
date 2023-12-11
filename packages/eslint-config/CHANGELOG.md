# @qlik/eslint-config

## 0.6.1

### Patch Changes

- 79c6592: chore: update npm dependencies

## 0.6.0

### Minor Changes

- 37fd59d: Changed glob pattern for playwright lint config to match everything insde either `test` or `tests` folder. Also include playwright.config file.

### Patch Changes

- 68f05a4: chore: update npm dependencies

## 0.5.3

### Patch Changes

- dc6dbf7: chore: update npm dependencies

## 0.5.2

### Patch Changes

- 4d5ee96: Turn off assignment rule for `prefer-destructuring`

## 0.5.1

### Patch Changes

- 05f3b77: Add the default allowed property modifiers from airbnb on `no-param-reassign`

## 0.5.0

### Minor Changes

- 90a2184: Improve no-param-reassign to not complain on "prev" property which is a normal use case in reducers

### Patch Changes

- 2a43c6f: chore: update npm dependencies

## 0.4.32

### Patch Changes

- 834fe37: Turn off react/prop-types and react/require-default-props for typescript

## 0.4.31

### Patch Changes

- ca4d796: chore: update npm dependencies

## 0.4.30

### Patch Changes

- 6867dab: chore: update npm dependencies

## 0.4.29

### Patch Changes

- b88d7a1: disable the `no-void` rule in the base configuration. This rule is not relevant for es2015+ code and it is incompatible with `@typescript-eslint/no-floating-promises` where you can use the void operator to make an intentional floating-promise.

## 0.4.28

### Patch Changes

- b4f19c9: chore: update npm dependencies

## 0.4.27

### Patch Changes

- e79deba: Disable @typescript-eslint/no-namespace rule

## 0.4.26

### Patch Changes

- 643e9c2: chore: update npm dependencies

## 0.4.25

### Patch Changes

- 9c4b54f: chore: update npm dependencies

## 0.4.24

### Patch Changes

- bd72505: Fix import/no-unresolved for .svelte files

## 0.4.23

### Patch Changes

- a925f1e: Fix svelte config for .svelte files in typescript

## 0.4.22

### Patch Changes

- 72799eb: chore: update npm dependencies

## 0.4.21

### Patch Changes

- f3accdd: Fixes a bug in react-svelte config where .svelte files were not found correctly if any other file was linted first

## 0.4.20

### Patch Changes

- 0352f26: chore: update all dependencies

## 0.4.19

### Patch Changes

- 145218b: chore: update all dependencies

## 0.4.18

### Patch Changes

- 9742395: chore: update all dependencies

## 0.4.17

### Patch Changes

- a7d61c3: chore: update all dependencies

## 0.4.16

### Patch Changes

- 52e3141: chore: update all dependencies

## 0.4.15

### Patch Changes

- 994e879: chore: update all dependencies

## 0.4.14

### Patch Changes

- 1ca0aa9: Adding react/hooks to config

## 0.4.13

### Patch Changes

- 8cd7684: chore: update all dependencies

## 0.4.12

### Patch Changes

- ae3f42f: Turn off import/order rule because it's inconsistent with prettier-plugin-organize-imports

## 0.4.11

### Patch Changes

- e9d5bbf: Fix prettier peerDeps

## 0.4.10

### Patch Changes

- bde8f0f: chore: update all dependencies

## 0.4.9

### Patch Changes

- 812f165: chore: update all dependencies

## 0.4.8

### Patch Changes

- 69b12c9: chore: update all dependencies

## 0.4.7

### Patch Changes

- 6b3936e: chore: update all dependencies

## 0.4.6

### Patch Changes

- 54d0e4e: Fix react-svelte config to reference the correct file

## 0.4.5

### Patch Changes

- df30e12: Remove optional dependencies

## 0.4.4

### Patch Changes

- 3bd32c9: chore: update all dependencies

## 0.4.3

### Patch Changes

- a8d616c: turn on no-undef (typescript did not handle that)

## 0.4.2

### Patch Changes

- a83712f: chore: update all dependencies

## 0.4.1

### Patch Changes

- adb006c: Fix svelte-js config

## 0.4.0

### Minor Changes

- 327d39e: Adding svelte-js config (javascript only)

## 0.3.0

### Minor Changes

- d44aa7e: Add jest config

## 0.2.1

### Patch Changes

- 092249d: chore: update all dependencies

## 0.2.0

### Minor Changes

- a83aac8: Better override support for supporting .js(x), .ts(s), .svelte mixed together

## 0.1.1

### Patch Changes

- 85bdac8: Fix airbnb-base bug in @qlik/eslint-config index.js

## 0.1.0

### Minor Changes

- e3e89db: Add support for all use cases in @qlik/eslint-config and deprecate the others

## 0.0.16

### Patch Changes

- df9a91e: turn off prefer-default-export for node-esm

## 0.0.15

### Patch Changes

- 0c274b9: Disable poorly working @typescript-eslint/no-unsafe-\* rules
- Updated dependencies [0c274b9]
  - @qlik/eslint-config-base@0.0.15

## 0.0.14

### Patch Changes

- 87953c0: chore: update all dependencies
- Updated dependencies [87953c0]
  - @qlik/eslint-config-base@0.0.14

## 0.0.13

### Patch Changes

- 007f2eb: chore: update all dependencies
- Updated dependencies [007f2eb]
  - @qlik/eslint-config-base@0.0.13

## 0.0.12

### Patch Changes

- f4ba2ca: Update eslint `ecmaVersion` to 2022 to enable using latest syntax everywhere
- Updated dependencies [f4ba2ca]
  - @qlik/eslint-config-base@0.0.12

## 0.0.11

### Patch Changes

- b3f8b7b: update npm dependencies
- Updated dependencies [b3f8b7b]
  - @qlik/eslint-config-base@0.0.11

## 0.0.10

### Patch Changes

- 28980c9: update npm dependencies
- Updated dependencies [28980c9]
  - @qlik/eslint-config-base@0.0.10

## 0.0.9

### Patch Changes

- 7cadb4e: chore: update all dependencies
- Updated dependencies [7cadb4e]
  - @qlik/eslint-config-base@0.0.9

## 0.0.8

### Patch Changes

- 9027474: Update dependencies
- Updated dependencies [9027474]
  - @qlik/eslint-config-base@0.0.8

## 0.0.7

### Patch Changes

- 4b2f113: update npm dependencies
- Updated dependencies [4b2f113]
  - @qlik/eslint-config-base@0.0.7

## 0.0.6

### Patch Changes

- 8df3db0: chore: update all dependencies
- Updated dependencies [8df3db0]
  - @qlik/eslint-config-base@0.0.6

## 0.0.5

### Patch Changes

- 52bcc1f: Fix package.json's
- Updated dependencies [52bcc1f]
  - @qlik/eslint-config-base@0.0.5

## 0.0.4

### Patch Changes

- fcccc37: update npm dependencies
- Updated dependencies [fcccc37]
  - @qlik/eslint-config-base@0.0.4

## 0.0.3

### Patch Changes

- Updated dependencies [0ae660e]
  - @qlik/eslint-config-base@0.0.3

## 0.0.2

### Patch Changes

- Updated dependencies [212979b]
  - @qlik/eslint-config-base@0.0.2
