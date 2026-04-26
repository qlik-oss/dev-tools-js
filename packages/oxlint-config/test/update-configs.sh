#!/bin/bash
# update-configs.sh
# Regenerates the test/generated snapshot files and commits them if they changed.
#
# Run this after any change to a config preset:
#   ./test/update-configs.sh

set -euo pipefail

cd "$(dirname "$0")/.." || exit 1

echo "Regenerating oxlint config snapshots..."
node test/generate-configs.js

cd test || exit 1

if ! git diff --exit-code generated/; then
  git add generated/
  git commit -m "chore(oxlint-config): update oxlint config snapshots"
  git push
  echo -e "\033[32mBranch has been updated with new config snapshots\033[0m"
else
  echo -e "\033[32mNothing changed, snapshots are already up to date\033[0m"
fi
