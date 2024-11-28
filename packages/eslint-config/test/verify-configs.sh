#!/bin/bash

# make the location of this script the current working directory
cd "$(dirname "$0")" || exit 1

# Run the generate-configs.js script next to this file even if cwd is different
node generate-configs.js

# Check if there are any differences between the generated files and the committed files
if ! git diff --exit-code generated/; then
  echo -e "\033[31mThere is a difference between the new config files and the previously commited config files\033[0m"
  echo -e "\033[31mPlease review the difference and commit them if they are expected\033[0m"
  exit 1
fi

echo -e "\033[32mLint configs has been verified, no diff found!\033[0m"
