export default [
  {
    "files": [
      "**/__test{,s}__/**/*.{js,jsx}",
      "**/{test{,s},mock{,s}}/**/*.js",
      "**/*.{test,spec}.{js,jsx}"
    ],
    "name": "@qlik/eslint-config/vitest-js",
    "plugins": {
      "testing-library": "testing-library-plugin",
      "vitest": "vitest-plugin"
    },
    "rules": {
      "no-await-in-loop": "off",
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
      "vitest/no-conditional-expect": "error",
      "vitest/no-disabled-tests": "warn",
      "vitest/no-focused-tests": "error",
      "vitest/no-identical-title": "error",
      "vitest/no-import-node-test": "error",
      "vitest/no-interpolation-in-snapshots": "error",
      "vitest/no-mocks-import": "error",
      "vitest/no-standalone-expect": "error",
      "vitest/no-unneeded-async-expect-function": "error",
      "vitest/prefer-called-exactly-once-with": "error",
      "vitest/require-local-test-context-for-concurrent-snapshots": "error",
      "vitest/valid-describe-callback": "error",
      "vitest/valid-expect": "error",
      "vitest/valid-expect-in-promise": "error",
      "vitest/valid-title": "error"
    }
  },
  {
    "files": [
      "**/__test{,s}__/**/*.{ts,tsx}",
      "**/{test{,s},mock{,s}}/**/*.ts",
      "**/*.{test,spec}.{ts,tsx}"
    ],
    "name": "@qlik/eslint-config/vitest-ts",
    "plugins": {
      "testing-library": "testing-library-plugin",
      "vitest": "vitest-plugin"
    },
    "rules": {
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/no-unsafe-argument": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-call": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-unsafe-return": "off",
      "@typescript-eslint/unbound-method": "off",
      "no-await-in-loop": "off",
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
      "vitest/no-conditional-expect": "error",
      "vitest/no-disabled-tests": "warn",
      "vitest/no-focused-tests": "error",
      "vitest/no-identical-title": "error",
      "vitest/no-import-node-test": "error",
      "vitest/no-interpolation-in-snapshots": "error",
      "vitest/no-mocks-import": "error",
      "vitest/no-standalone-expect": "error",
      "vitest/no-unneeded-async-expect-function": "error",
      "vitest/prefer-called-exactly-once-with": "error",
      "vitest/require-local-test-context-for-concurrent-snapshots": "error",
      "vitest/valid-describe-callback": "error",
      "vitest/valid-expect": "error",
      "vitest/valid-expect-in-promise": "error",
      "vitest/valid-title": "error"
    }
  }
]