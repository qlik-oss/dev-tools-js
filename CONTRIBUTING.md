# Contributing to Frontend-kit

## Developing with Turborepo

Follow these steps to get started:

1. Clone this repository.
1. Install node.js >= 16 and pnpm (npm install -g pnpm).
1. Install a code editor of your own choice, we recommend Visual Studio Code.

[Turborepo](https://turbo.build/repo) helps by making running tasks simpler and much more efficient. Inside [the root package.json](./package.json), several tasks are specified in `scripts` which use `turbo run`. And each of them is specified in [the turbo.json](./turbo.json).

> Note: Every task that's registered inside turbo.json can be run with turbo run \<task\>. Additionally, devDependencies listed in the `package.json` under the root are also available in each app and package.

Read more about how CLI test and end-to-end test work [here](./test/README.md).

## Linting

Run ESLint for all packages in `packages` and `test` together with:

```shell
pnpm lint
```

## Format

Check/write formatting for all packages in `packages` and `test` together with:

```shell
pnpm format:write
pnpm format:check
```

## Submitting a Pull Request

When your code is ready to be reviewed, you make a Pull Request from your branch.

PR title should follow [the commit message convention](https://www.conventionalcommits.org/en/v1.0.0/).

If your change doesn't need a release, run 'pnpm empty-changeset' or just click the link the bot displays in your PR and add an empty changeset. Otherwise, check the Releasing section below.

## Releasing

If your changes should update the package version, follow the steps to do releasing:

1. Run `pnpm prepare-release` and answer a few questions to declare which packages and how your changes should be released
2. Commit and push an auto-generated markdown file (a "changeset" with a random name, with the change type and summary) in the `.changeset` folder (along with the rest of your changes) to your PR
3. Merge your PR into the main branch. It will trigger a GitHub action to check for any number of these specific markdown files, calculate the final semver, and open (or update) a PR with the proposed package versions & changelogs and the removal of that markdown file
4. Merge that PR after the changes are verified and you're ready to do a release. It will trigger the Release GitHub action again to create/push new git tags and publish packages to GitHub Packages npm registry automatically
