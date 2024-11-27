export default [
  {
    "files": [
      "**/__test__/**/*.{js,jsx,ts,tsx}",
      "**/__tests__/**/*.{js,jsx,ts,tsx}"
    ],
    "name": "@qlik/eslint-config/vitest-js",
    "plugins": {
      "testing-library": "testing-library-plugin",
      "vitest": "vitest-plugin"
    },
    "rules": {
      "testing-library/await-async-events": [
        "error",
        {
          "eventModule": "userEvent"
        }
      ],
      "testing-library/await-async-queries": "error",
      "testing-library/await-async-utils": "error",
      "testing-library/no-await-sync-events": [
        "error",
        {
          "eventModules": [
            "fire-event"
          ]
        }
      ],
      "testing-library/no-await-sync-queries": "error",
      "testing-library/no-container": "error",
      "testing-library/no-debugging-utils": "warn",
      "testing-library/no-dom-import": [
        "error",
        "react"
      ],
      "testing-library/no-global-regexp-flag-in-query": "error",
      "testing-library/no-manual-cleanup": "error",
      "testing-library/no-node-access": "error",
      "testing-library/no-promise-in-fire-event": "error",
      "testing-library/no-render-in-lifecycle": "error",
      "testing-library/no-unnecessary-act": "error",
      "testing-library/no-wait-for-multiple-assertions": "error",
      "testing-library/no-wait-for-side-effects": "error",
      "testing-library/no-wait-for-snapshot": "error",
      "testing-library/prefer-find-by": "error",
      "testing-library/prefer-presence-queries": "error",
      "testing-library/prefer-query-by-disappearance": "error",
      "testing-library/prefer-screen-queries": "error",
      "testing-library/render-result-naming-convention": "error",
      "vitest/expect-expect": "error",
      "vitest/no-commented-out-tests": "error",
      "vitest/no-identical-title": "error",
      "vitest/no-import-node-test": "error",
      "vitest/require-local-test-context-for-concurrent-snapshots": "error",
      "vitest/valid-describe-callback": "error",
      "vitest/valid-expect": "error",
      "vitest/valid-title": "error"
    }
  }
]