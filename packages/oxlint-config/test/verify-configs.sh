#!/bin/bash
# verify-configs.sh
# Regenerates snapshots in a temp copy and fails if they differ from committed.
# Intended for CI.
#
# Usage: ./test/verify-configs.sh

set -euo pipefail

cd "$(dirname "$0")/.." || exit 1

echo "Verifying oxlint config snapshots..."
node test/generate-configs.js

cd test || exit 1

if ! git diff --exit-code generated/; then
  echo -e "\033[31mSnapshot mismatch: the committed snapshots are out of date.\033[0m"
  echo -e "\033[31mRun './test/update-configs.sh' locally and commit the result.\033[0m"
  exit 1
fi

echo -e "\033[32mAll snapshots match, no diff found!\033[0m"
