# @qlik/oxfmt-config

Oxfmt config to share among projects for consistent formatting. The config is based on oxfmt's default values except for `printWidth` which is set to 120 (default is 100), and enables `package.json` sorting.

## Usage

Install `@qlik/oxfmt-config` as a devDependency in `package.json`.

If the repo already has a `tsconfig.json`, prefer `oxfmt.config.ts`. Otherwise, use `oxfmt.config.js`.

```ts
import config from "@qlik/oxfmt-config";
import { defineConfig } from "oxfmt";

export default defineConfig({
  ...config,
  // sortImports: true,
  // jsdoc: {
  //   commentLineStrategy: "keep",
  // },
  ignorePatterns: ["pnpm-lock.yaml"],
});
```

## Migration From Prettier

Follow the manual steps below, or paste the AI prompt into a Copilot agent chat.

The ideal end-state is:

- `oxfmt` and `@qlik/oxfmt-config` installed
- `prettier`, `@qlik/prettier-config`, and prettier-only plugins/config removed
- a very small `oxfmt.config.ts` or `oxfmt.config.js`
- `ignorePatterns` containing only repo-specific exclusions that still need explicit formatter ignores
- `format:write` and `format:check` running `oxfmt` and `oxfmt --check`

### Manual steps

1. Inspect the current Prettier setup:
   - `.prettierrc*`, `prettier.config.*`, and `package.json#prettier`
   - `.prettierignore`
   - `package.json` scripts and dependencies
   - CI and editor settings that invoke Prettier
   - whether the repo already has a `tsconfig.json`
   - any `printWidth` other than 120
2. Update dependencies:
   - add `oxfmt` and `@qlik/oxfmt-config`
   - remove `prettier`, `@qlik/prettier-config`, prettier plugins, and other prettier-only packages
3. Create the local oxfmt config:
   - if a `tsconfig.json` is present, create `oxfmt.config.ts`; otherwise create `oxfmt.config.js`
   - prefer `oxfmt.config.ts/js` over `.oxfmtrc.*`
   - import the shared config from `@qlik/oxfmt-config` and keep the file compact
   - if the repo uses a `printWidth` other than 120, carry it over directly under `...config` with a TODO to consider switching back to the shared default
   - otherwise keep the config order as `...config`, commented `sortImports`, commented `jsdoc`, then `ignorePatterns`; if `printWidth` is needed, place it between `...config` and commented `sortImports`
4. Migrate ignore patterns:
   - start from `.prettierignore`
   - move only the patterns that still need explicit formatter ignores into `ignorePatterns`
   - drop entries already covered by `.gitignore` or other VCS ignore defaults
   - delete `.prettierignore` after the moved patterns are preserved
5. Update scripts and automation:
   - replace Prettier commands with `oxfmt`
   - use `oxfmt --check` for CI or read-only validation
   - keep the command shape simple: `oxfmt` and `oxfmt --check`
6. Delete obsolete Prettier config:
   - remove `.prettierrc*`, `prettier.config.*`, and `package.json#prettier`
   - remove repo-local editor settings or CI steps that only exist for Prettier
7. Run the formatter and the repo's normal validation commands.

### AI Prompt

````text
I want to migrate this project from Prettier / @qlik/prettier-config to oxfmt using @qlik/oxfmt-config.

Make the final setup as small and clean as possible, and explain non-trivial changes.

1. Inspect the current formatter setup:
   - `.prettierrc*`, `prettier.config.*`, and `package.json#prettier`
   - `.prettierignore`
   - scripts, dependencies, CI/editor integrations
   - whether the repo has a tsconfig
   - any `printWidth` other than 120

2. Replace Prettier with oxfmt:
   - add `oxfmt` and `@qlik/oxfmt-config`
   - remove `prettier`, `@qlik/prettier-config`, prettier plugins, and other prettier-only tooling
   - create `oxfmt.config.ts` if the repo has a tsconfig; otherwise create `oxfmt.config.js`
   - prefer `oxfmt.config.ts/js` over `.oxfmtrc.*`
   - use this shape:

     ```ts
     import config from "@qlik/oxfmt-config";
     import { defineConfig } from "oxfmt";

     export default defineConfig({
       ...config,
       // TODO: Consider using the shared @qlik/oxfmt-config default printWidth again.
       // printWidth: 100,
       // sortImports: true,
       // jsdoc: {
       //   commentLineStrategy: "keep",
       // },
       ignorePatterns: [],
     });
     ```

   - if the current repo uses a `printWidth` other than 120, uncomment or add that `printWidth` directly under `...config` and keep the TODO above it
   - otherwise keep the order as `...config`, commented `sortImports`, commented `jsdoc`, `ignorePatterns`

3. Migrate ignores and scripts:
   - port `.prettierignore` into `ignorePatterns`
   - drop entries already covered by `.gitignore` or other VCS ignore defaults
   - delete `.prettierignore`
   - replace formatter scripts with `oxfmt` and `oxfmt --check`

4. Delete obsolete Prettier setup:
   - remove `.prettierrc*`, `prettier.config.*`, and `package.json#prettier`
   - remove repo-local editor or CI settings that only exist for Prettier

5. Apply and validate:
   - run `oxfmt`
   - run `oxfmt --check`
   - run the repo's normal lint, type-check, and test commands
   - summarize removed packages/files and any follow-up cleanup

Important:
- Prefer deletion over preserving historical Prettier setup.
- Keep repo-specific config minimal.
- Avoid unrelated refactors.
````
