export default [
  {
    "files": [
      "**/__test__/**/*.{js,jsx,ts,tsx}",
      "**/__tests__/**/*.{js,jsx,ts,tsx}"
    ],
    "languageOptions": {
      "globals": {
        "afterAll": false,
        "afterEach": false,
        "beforeAll": false,
        "beforeEach": false,
        "describe": false,
        "expect": false,
        "fit": false,
        "it": false,
        "jest": false,
        "test": false,
        "xdescribe": false,
        "xit": false,
        "xtest": false
      }
    },
    "name": "@qlik/eslint-config/jest-js",
    "plugins": {
      "jest": "jest-plugin",
      "testing-library": "testing-library-plugin"
    },
    "rules": {
      "jest/expect-expect": "warn",
      "jest/no-alias-methods": "error",
      "jest/no-commented-out-tests": "warn",
      "jest/no-conditional-expect": "error",
      "jest/no-deprecated-functions": "error",
      "jest/no-disabled-tests": "warn",
      "jest/no-done-callback": "error",
      "jest/no-export": "error",
      "jest/no-focused-tests": "error",
      "jest/no-identical-title": "error",
      "jest/no-interpolation-in-snapshots": "error",
      "jest/no-jasmine-globals": "error",
      "jest/no-mocks-import": "error",
      "jest/no-standalone-expect": "error",
      "jest/no-test-prefixes": "error",
      "jest/valid-describe-callback": "error",
      "jest/valid-expect": "error",
      "jest/valid-expect-in-promise": "error",
      "jest/valid-title": "error",
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
      "testing-library/render-result-naming-convention": "error"
    }
  }
]