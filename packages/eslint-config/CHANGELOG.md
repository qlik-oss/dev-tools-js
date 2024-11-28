# @qlik/eslint-config

## 1.1.1

### Patch Changes

- f4f426a: fix: make `extend` property useful

## 1.1.0

### Minor Changes

- 807ebd8: Exposing single configs as named exports. Can be import as `import { recommendedJS, recommendedTS } from "@qlik/eslint-config"`

## 1.0.4

### Patch Changes

- 91fb7dc: fix: dont override import-x rules in typescript ruleset

## 1.0.3

### Patch Changes

- 4bb6fc1: fix: enable react rules for ts/js files. fixes an issue where rules of hooks were not enable for files containing only hooks.
- 37a5ba3: fix: turn off import-x/no-named-as-default-member

## 1.0.2

### Patch Changes

- f222d0d: fix(eslint-config): no typescript-eslint rules applied on .js files.

## 1.0.1

### Patch Changes

- 9efcb98: fix: remove publish config override

## 1.0.0

### Major Changes

- bfdfaef: feat!: switch to eslint 9 flat config

### Patch Changes

- 669324a: chore: update npm dependencies

## 0.8.2

### Patch Changes

- a28dcec: chore: update deps, switch to new vitest package

## 0.8.1

### Patch Changes

- feb2d5a: chore: update npm dependencies

## 0.8.0

### Minor Changes

- 0c3f6c2: Turn off prefer-destructuring

## 0.7.28

### Patch Changes

- 2332cdc: chore: update npm dependencies

## 0.7.27

### Patch Changes

- b750553: chore: update npm dependencies

## 0.7.26

### Patch Changes

- 86ffd53: chore: update npm dependencies

## 0.7.25

### Patch Changes

- 7e39a7d: clean up dependencies and mark them with `^`

## 0.7.24

### Patch Changes

- 897cfb3: update npm dependencies

## 0.7.23

### Patch Changes

- 11527f5: chore: update npm dependencies

## 0.7.22

### Patch Changes

- 98679e3: chore: update npm dependencies

## 0.7.21

### Patch Changes

- cb01ccc: chore: update npm dependencies

## 0.7.20

### Patch Changes

- 1736c36: chore: update npm dependencies

## 0.7.19

### Patch Changes

- 59ce91f: update npm dependencies

## 0.7.18

### Patch Changes

- eed3ca3: Fix problem with vitest-plugin

## 0.7.17

### Patch Changes

- 5e9e2e9: update npm dependencies

## 0.7.16

### Patch Changes

- 634543e: chore: update npm dependencies

## 0.7.15

### Patch Changes

- f7e3feb: chore: update npm dependencies

## 0.7.14

### Patch Changes

- 429c099: chore: update npm dependencies

## 0.7.13

### Patch Changes

- 7e14cfe: chore: update npm dependencies

## 0.7.12

### Patch Changes

- 542cfd3: chore: update npm dependencies

## 0.7.11

### Patch Changes

- ab7a82c: update npm dependencies

## 0.7.10

### Patch Changes

- 760b48a: Downgrade @typescript-eslint/\*\* to be compatible with eslint-config-airbnb-typescript

## 0.7.9

### Patch Changes

- d10909b: chore: update npm dependencies

## 0.7.8

### Patch Changes

- 8e70bab: Turn off unbound-method for test files

## 0.7.7

### Patch Changes

- 687de01: Add testing-library plugin to vitest eslint config

## 0.7.6

### Patch Changes

- 2a9d774: chore: update npm dependencies

## 0.7.5

### Patch Changes

- e107743: chore: update npm dependencies

## 0.7.4

### Patch Changes

- 948f939: Turn of @typescript-eslint/unbound-method in favor for jest/unbound-method for jest config

## 0.7.3

### Patch Changes

- 366848a: Add eslint-import-resolver-typescript for resolving paths configuration from tsconfig

## 0.7.2

### Patch Changes

- a81b753: chore: update npm dependencies

## 0.7.1

### Patch Changes

- df0de11: chore: update npm dependencies

## 0.7.0

### Minor Changes

- 35141b9: Turn off `playwright/no-networkidle` rule for playwright config

### Patch Changes

- a9babba: Fix playwright matchers to match only js and ts files

## 0.6.7

### Patch Changes

- 6388835: chore: update npm dependencies

## 0.6.6

### Patch Changes

- 9c36ab5: chore: update npm dependencies

## 0.6.5

### Patch Changes

- 000ffe4: Allow IIFE for no-floating-promises

## 0.6.4

### Patch Changes

- 8ee6e1f: chore: update npm dependencies

## 0.6.3

### Patch Changes

- 1345829: Fix glob pattern for test files

## 0.6.2

### Patch Changes

- 70aab0a: chore: update npm dependencies

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
