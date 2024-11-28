#!/bin/bash

# make the location of this script the current working directory
cd "$(dirname "$0")" || exit 1

# Run the generate-configs.js script next to this file even if cwd is different
node generate-configs.js

# Check if there are any differences between the generated files and the committed files
if ! git diff --exit-code generated/; then
  git add generated/
  git commit -m "chore(eslint-confg): update eslint test configs"
  git push
  echo -e "\033[32mBranch has been updated with new test configs\033[0m"
fi

echo -e "\033[32mNothing was updated\033[0m"
