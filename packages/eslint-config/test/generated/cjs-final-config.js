export default [
  {
    "files": [
      "**/*.{js,cjs}"
    ],
    "languageOptions": {
      "ecmaVersion": "latest",
      "globals": {
        "AbortController": false,
        "AbortSignal": false,
        "Blob": false,
        "BroadcastChannel": false,
        "Buffer": false,
        "ByteLengthQueuingStrategy": false,
        "CloseEvent": false,
        "CompressionStream": false,
        "CountQueuingStrategy": false,
        "Crypto": false,
        "CryptoKey": false,
        "CustomEvent": false,
        "DOMException": false,
        "DecompressionStream": false,
        "Event": false,
        "EventTarget": false,
        "File": false,
        "FormData": false,
        "Headers": false,
        "MessageChannel": false,
        "MessageEvent": false,
        "MessagePort": false,
        "Navigator": false,
        "Performance": false,
        "PerformanceEntry": false,
        "PerformanceMark": false,
        "PerformanceMeasure": false,
        "PerformanceObserver": false,
        "PerformanceObserverEntryList": false,
        "PerformanceResourceTiming": false,
        "ReadableByteStreamController": false,
        "ReadableStream": false,
        "ReadableStreamBYOBReader": false,
        "ReadableStreamBYOBRequest": false,
        "ReadableStreamDefaultController": false,
        "ReadableStreamDefaultReader": false,
        "Request": false,
        "Response": false,
        "SubtleCrypto": false,
        "TextDecoder": false,
        "TextDecoderStream": false,
        "TextEncoder": false,
        "TextEncoderStream": false,
        "TransformStream": false,
        "TransformStreamDefaultController": false,
        "URL": false,
        "URLSearchParams": false,
        "WebAssembly": false,
        "WebSocket": false,
        "WritableStream": false,
        "WritableStreamDefaultController": false,
        "WritableStreamDefaultWriter": false,
        "__dirname": false,
        "__filename": false,
        "atob": false,
        "btoa": false,
        "clearImmediate": false,
        "clearInterval": false,
        "clearTimeout": false,
        "console": false,
        "crypto": false,
        "exports": true,
        "fetch": false,
        "global": false,
        "module": false,
        "navigator": false,
        "performance": false,
        "process": false,
        "queueMicrotask": false,
        "require": false,
        "setImmediate": false,
        "setInterval": false,
        "setTimeout": false,
        "structuredClone": false
      },
      "parser": "@qlik/eslint-config/node-cjs-js-parser",
      "parserOptions": {
        "warnOnUnsupportedTypeScriptVersion": false
      },
      "sourceType": "commonjs"
    },
    "name": "@qlik/eslint-config/node-cjs-js",
    "plugins": {
      "@typescript-eslint": "@typescript-eslint-plugin",
      "import-x": "import-x-plugin"
    },
    "rules": {
      "array-callback-return": [
        "error",
        {
          "allowImplicit": true
        }
      ],
      "arrow-body-style": "off",
      "block-scoped-var": "error",
      "camelcase": [
        "error",
        {
          "ignoreDestructuring": false,
          "properties": "never"
        }
      ],
      "class-methods-use-this": [
        "warn",
        {
          "exceptMethods": []
        }
      ],
      "consistent-return": "error",
      "constructor-super": "error",
      "curly": "off",
      "default-case": [
        "error",
        {
          "commentPattern": "^no default$"
        }
      ],
      "default-case-last": "error",
      "default-param-last": "error",
      "eqeqeq": [
        "error",
        "always",
        {
          "null": "ignore"
        }
      ],
      "for-direction": "error",
      "func-names": "warn",
      "getter-return": [
        "error",
        {
          "allowImplicit": true
        }
      ],
      "grouped-accessor-pairs": "error",
      "import-x/consistent-type-specifier-style": "off",
      "import-x/default": "error",
      "import-x/export": "error",
      "import-x/extensions": [
        "error",
        "ignorePackages",
        {
          "js": "never",
          "jsx": "never",
          "mjs": "never",
          "mts": "never",
          "ts": "never",
          "tsx": "never"
        }
      ],
      "import-x/named": "error",
      "import-x/namespace": "error",
      "import-x/newline-after-import": "error",
      "import-x/no-absolute-path": "error",
      "import-x/no-amd": "error",
      "import-x/no-cycle": [
        "error",
        {
          "maxDepth": "∞"
        }
      ],
      "import-x/no-deprecated": "warn",
      "import-x/no-duplicates": "error",
      "import-x/no-dynamic-require": "error",
      "import-x/no-empty-named-blocks": "off",
      "import-x/no-extraneous-dependencies": [
        "off",
        {
          "devDependencies": [
            "**/test*/**",
            "**/mocks/**",
            "**/mock/**",
            "test/**",
            "tests/**",
            "spec/**",
            "**/__tests__/**",
            "**/__mocks__/**",
            "test.{js,jsx,ts,tsx}",
            "test-*.{js,jsx,ts,tsx}",
            "**/*{.,_}{test,spec}.{js,jsx,ts,tsx}",
            "**/jest.config.{cjs,mjs,js,ts}",
            "**/jest.setup.{cjs,mjs,js,ts}",
            "**/vitest.config.{cjs,mjs,js,ts}",
            "**/vue.config.{cjs,mjs,js,ts}",
            "**/svelte.config.{cjs,mjs,js,ts}",
            "**/tsup.config.{cjs,mjs,js,ts}",
            "**/playwright.config.{cjs,mjs,js,ts}",
            "**/webpack.config.{cjs,mjs,js,ts}",
            "**/webpack.mod.{cjs,mjs,js,ts}",
            "**/rollup.config.{cjs,mjs,js,ts}",
            "**/rollup.config.*cjs,mjs,.{js,ts}",
            "**/protractor.conf.{cjs,mjs,js,ts}",
            "**/protractor.conf.*.{cjs,mjs,js,ts}",
            "**/.eslintrc.{cjs,mjs,js,ts}",
            "**/eslint.config.{cjs,mjs,js,ts}",
            "**/.prettierrc.{cjs,mjs,js,ts}",
            "**/.prettierrc"
          ],
          "optionalDependencies": false
        }
      ],
      "import-x/no-import-module-exports": [
        "error",
        {
          "exceptions": []
        }
      ],
      "import-x/no-mutable-exports": "error",
      "import-x/no-named-as-default": "error",
      "import-x/no-named-as-default-member": "off",
      "import-x/no-named-default": "error",
      "import-x/no-nodejs-modules": "off",
      "import-x/no-relative-packages": "error",
      "import-x/no-self-import": "error",
      "import-x/no-unresolved": [
        "error",
        {
          "caseSensitive": true,
          "commonjs": true
        }
      ],
      "import-x/no-unused-modules": "error",
      "import-x/no-useless-path-segments": [
        "error",
        {
          "commonjs": true
        }
      ],
      "import-x/no-webpack-loader-syntax": "error",
      "import-x/prefer-default-export": "off",
      "max-classes-per-file": [
        "error",
        1
      ],
      "new-cap": [
        "error",
        {
          "capIsNew": false,
          "capIsNewExceptions": [
            "Immutable.Map",
            "Immutable.Set",
            "Immutable.List"
          ],
          "newIsCap": true,
          "newIsCapExceptions": []
        }
      ],
      "no-alert": "error",
      "no-array-constructor": "error",
      "no-async-promise-executor": "error",
      "no-await-in-loop": "error",
      "no-bitwise": "error",
      "no-caller": "error",
      "no-case-declarations": "error",
      "no-class-assign": "error",
      "no-compare-neg-zero": "error",
      "no-cond-assign": [
        "error",
        "always"
      ],
      "no-console": "off",
      "no-const-assign": "error",
      "no-constant-binary-expression": "error",
      "no-constant-condition": "warn",
      "no-constructor-return": "error",
      "no-continue": "error",
      "no-control-regex": "error",
      "no-debugger": "error",
      "no-delete-var": "error",
      "no-dupe-args": "error",
      "no-dupe-class-members": "error",
      "no-dupe-else-if": "error",
      "no-dupe-keys": "error",
      "no-duplicate-case": "error",
      "no-else-return": [
        "error",
        {
          "allowElseIf": false
        }
      ],
      "no-empty": "error",
      "no-empty-character-class": "error",
      "no-empty-function": [
        "error",
        {
          "allow": [
            "arrowFunctions",
            "functions",
            "methods"
          ]
        }
      ],
      "no-empty-pattern": "error",
      "no-empty-static-block": "error",
      "no-eval": "error",
      "no-ex-assign": "error",
      "no-extend-native": "error",
      "no-extra-bind": "error",
      "no-extra-boolean-cast": "error",
      "no-extra-label": "error",
      "no-fallthrough": "error",
      "no-func-assign": "error",
      "no-global-assign": [
        "error",
        {
          "exceptions": []
        }
      ],
      "no-implied-eval": "error",
      "no-import-assign": "error",
      "no-inner-declarations": "error",
      "no-invalid-regexp": "error",
      "no-irregular-whitespace": "error",
      "no-iterator": "error",
      "no-label-var": "error",
      "no-labels": [
        "error",
        {
          "allowLoop": false,
          "allowSwitch": false
        }
      ],
      "no-lone-blocks": "error",
      "no-lonely-if": "error",
      "no-loop-func": "error",
      "no-loss-of-precision": "error",
      "no-magic-numbers": "off",
      "no-misleading-character-class": "error",
      "no-multi-assign": [
        "error"
      ],
      "no-multi-str": "error",
      "no-nested-ternary": "error",
      "no-new": "error",
      "no-new-func": "error",
      "no-new-native-nonconstructor": "error",
      "no-new-wrappers": "error",
      "no-nonoctal-decimal-escape": "error",
      "no-obj-calls": "error",
      "no-object-constructor": "error",
      "no-octal": "error",
      "no-octal-escape": "error",
      "no-param-reassign": [
        "error",
        {
          "ignorePropertyModificationsFor": [
            "prev",
            "acc",
            "accumulator",
            "e",
            "ctx",
            "context",
            "req",
            "request",
            "res",
            "response",
            "$scope",
            "staticContext",
            "sharedState",
            "state"
          ],
          "props": true
        }
      ],
      "no-promise-executor-return": "error",
      "no-proto": "error",
      "no-prototype-builtins": "error",
      "no-redeclare": "error",
      "no-regex-spaces": "error",
      "no-restricted-exports": [
        "error",
        {
          "restrictedNamedExports": [
            "default",
            "then"
          ]
        }
      ],
      "no-restricted-globals": [
        "error",
        {
          "message": "Use Number.isFinite instead",
          "name": "isFinite"
        },
        {
          "message": "Use Number.isNaN instead",
          "name": "isNaN"
        },
        {
          "message": "Use window.addEventListener instead",
          "name": "addEventListener"
        },
        {
          "message": "Use window.blur instead",
          "name": "blur"
        },
        {
          "message": "Use window.close instead",
          "name": "close"
        },
        {
          "message": "Use window.closed instead",
          "name": "closed"
        },
        {
          "message": "Use window.confirm instead",
          "name": "confirm"
        },
        {
          "message": "Use window.defaultStatus instead",
          "name": "defaultStatus"
        },
        {
          "message": "Use window.defaultstatus instead",
          "name": "defaultstatus"
        },
        {
          "message": "Use window.event instead",
          "name": "event"
        },
        {
          "message": "Use window.external instead",
          "name": "external"
        },
        {
          "message": "Use window.find instead",
          "name": "find"
        },
        {
          "message": "Use window.focus instead",
          "name": "focus"
        },
        {
          "message": "Use window.frameElement instead",
          "name": "frameElement"
        },
        {
          "message": "Use window.frames instead",
          "name": "frames"
        },
        {
          "message": "Use window.history instead",
          "name": "history"
        },
        {
          "message": "Use window.innerHeight instead",
          "name": "innerHeight"
        },
        {
          "message": "Use window.innerWidth instead",
          "name": "innerWidth"
        },
        {
          "message": "Use window.length instead",
          "name": "length"
        },
        {
          "message": "Use window.location instead",
          "name": "location"
        },
        {
          "message": "Use window.locationbar instead",
          "name": "locationbar"
        },
        {
          "message": "Use window.menubar instead",
          "name": "menubar"
        },
        {
          "message": "Use window.moveBy instead",
          "name": "moveBy"
        },
        {
          "message": "Use window.moveTo instead",
          "name": "moveTo"
        },
        {
          "message": "Use window.name instead",
          "name": "name"
        },
        {
          "message": "Use window.onblur instead",
          "name": "onblur"
        },
        {
          "message": "Use window.onerror instead",
          "name": "onerror"
        },
        {
          "message": "Use window.onfocus instead",
          "name": "onfocus"
        },
        {
          "message": "Use window.onload instead",
          "name": "onload"
        },
        {
          "message": "Use window.onresize instead",
          "name": "onresize"
        },
        {
          "message": "Use window.onunload instead",
          "name": "onunload"
        },
        {
          "message": "Use window.open instead",
          "name": "open"
        },
        {
          "message": "Use window.opener instead",
          "name": "opener"
        },
        {
          "message": "Use window.opera instead",
          "name": "opera"
        },
        {
          "message": "Use window.outerHeight instead",
          "name": "outerHeight"
        },
        {
          "message": "Use window.outerWidth instead",
          "name": "outerWidth"
        },
        {
          "message": "Use window.pageXOffset instead",
          "name": "pageXOffset"
        },
        {
          "message": "Use window.pageYOffset instead",
          "name": "pageYOffset"
        },
        {
          "message": "Use window.parent instead",
          "name": "parent"
        },
        {
          "message": "Use window.print instead",
          "name": "print"
        },
        {
          "message": "Use window.removeEventListener instead",
          "name": "removeEventListener"
        },
        {
          "message": "Use window.resizeBy instead",
          "name": "resizeBy"
        },
        {
          "message": "Use window.resizeTo instead",
          "name": "resizeTo"
        },
        {
          "message": "Use window.screen instead",
          "name": "screen"
        },
        {
          "message": "Use window.screenLeft instead",
          "name": "screenLeft"
        },
        {
          "message": "Use window.screenTop instead",
          "name": "screenTop"
        },
        {
          "message": "Use window.screenX instead",
          "name": "screenX"
        },
        {
          "message": "Use window.screenY instead",
          "name": "screenY"
        },
        {
          "message": "Use window.scroll instead",
          "name": "scroll"
        },
        {
          "message": "Use window.scrollbars instead",
          "name": "scrollbars"
        },
        {
          "message": "Use window.scrollBy instead",
          "name": "scrollBy"
        },
        {
          "message": "Use window.scrollTo instead",
          "name": "scrollTo"
        },
        {
          "message": "Use window.scrollX instead",
          "name": "scrollX"
        },
        {
          "message": "Use window.scrollY instead",
          "name": "scrollY"
        },
        {
          "message": "Use window.self instead",
          "name": "self"
        },
        {
          "message": "Use window.status instead",
          "name": "status"
        },
        {
          "message": "Use window.statusbar instead",
          "name": "statusbar"
        },
        {
          "message": "Use window.stop instead",
          "name": "stop"
        },
        {
          "message": "Use window.toolbar instead",
          "name": "toolbar"
        },
        {
          "message": "Use window.top instead",
          "name": "top"
        }
      ],
      "no-restricted-imports": [
        "off",
        {
          "paths": [],
          "patterns": []
        }
      ],
      "no-restricted-properties": [
        "error",
        {
          "message": "arguments.callee is deprecated",
          "object": "arguments",
          "property": "callee"
        },
        {
          "message": "Please use Number.isFinite instead",
          "object": "global",
          "property": "isFinite"
        },
        {
          "message": "Please use Number.isFinite instead",
          "object": "self",
          "property": "isFinite"
        },
        {
          "message": "Please use Number.isFinite instead",
          "object": "window",
          "property": "isFinite"
        },
        {
          "message": "Please use Number.isNaN instead",
          "object": "global",
          "property": "isNaN"
        },
        {
          "message": "Please use Number.isNaN instead",
          "object": "self",
          "property": "isNaN"
        },
        {
          "message": "Please use Number.isNaN instead",
          "object": "window",
          "property": "isNaN"
        },
        {
          "message": "Please use Object.defineProperty instead.",
          "property": "__defineGetter__"
        },
        {
          "message": "Please use Object.defineProperty instead.",
          "property": "__defineSetter__"
        },
        {
          "message": "Use the exponentiation operator (**) instead.",
          "object": "Math",
          "property": "pow"
        }
      ],
      "no-restricted-syntax": [
        "error",
        {
          "message": "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.",
          "selector": "LabeledStatement"
        },
        {
          "message": "`with` is disallowed in strict mode because it makes code impossible to predict and optimize.",
          "selector": "WithStatement"
        }
      ],
      "no-return-assign": [
        "error",
        "always"
      ],
      "no-script-url": "error",
      "no-self-assign": [
        "error",
        {
          "props": true
        }
      ],
      "no-self-compare": "error",
      "no-sequences": "error",
      "no-setter-return": "error",
      "no-shadow": "error",
      "no-shadow-restricted-names": "error",
      "no-sparse-arrays": "error",
      "no-template-curly-in-string": "error",
      "no-this-before-super": "error",
      "no-throw-literal": "error",
      "no-undef": "error",
      "no-undef-init": "error",
      "no-underscore-dangle": "off",
      "no-unexpected-multiline": "error",
      "no-unmodified-loop-condition": "error",
      "no-unneeded-ternary": [
        "error",
        {
          "defaultAssignment": false
        }
      ],
      "no-unreachable": "error",
      "no-unreachable-loop": [
        "error",
        {
          "ignore": []
        }
      ],
      "no-unsafe-finally": "error",
      "no-unsafe-negation": "error",
      "no-unsafe-optional-chaining": [
        "error",
        {
          "disallowArithmeticOperators": true
        }
      ],
      "no-unused-expressions": [
        "error",
        {
          "allowShortCircuit": false,
          "allowTaggedTemplates": false,
          "allowTernary": false
        }
      ],
      "no-unused-labels": "error",
      "no-unused-private-class-members": "error",
      "no-unused-vars": [
        "error",
        {
          "args": "after-used",
          "ignoreRestSiblings": true,
          "vars": "all"
        }
      ],
      "no-useless-backreference": "error",
      "no-useless-call": "error",
      "no-useless-catch": "error",
      "no-useless-computed-key": "error",
      "no-useless-concat": "error",
      "no-useless-constructor": "error",
      "no-useless-escape": "error",
      "no-useless-rename": [
        "error",
        {
          "ignoreDestructuring": false,
          "ignoreExport": false,
          "ignoreImport": false
        }
      ],
      "no-useless-return": "error",
      "no-var": "error",
      "no-with": "error",
      "object-shorthand": [
        "error",
        "always",
        {
          "avoidQuotes": true,
          "ignoreConstructors": false
        }
      ],
      "one-var": [
        "error",
        "never"
      ],
      "operator-assignment": [
        "error",
        "always"
      ],
      "prefer-arrow-callback": "off",
      "prefer-const": [
        "error",
        {
          "destructuring": "any",
          "ignoreReadBeforeAssign": true
        }
      ],
      "prefer-exponentiation-operator": "error",
      "prefer-numeric-literals": "error",
      "prefer-object-has-own": "error",
      "prefer-object-spread": "error",
      "prefer-promise-reject-errors": [
        "error",
        {
          "allowEmptyReject": true
        }
      ],
      "prefer-regex-literals": [
        "error",
        {
          "disallowRedundantWrapping": true
        }
      ],
      "prefer-rest-params": "error",
      "prefer-spread": "error",
      "prefer-template": "error",
      "radix": "error",
      "require-atomic-updates": "error",
      "require-yield": "error",
      "symbol-description": "error",
      "unicode-bom": [
        "error",
        "never"
      ],
      "use-isnan": "error",
      "valid-typeof": [
        "error",
        {
          "requireStringLiterals": true
        }
      ],
      "yoda": "error"
    }
  },
  {
    "files": [
      "**/*.{ts,cts}"
    ],
    "languageOptions": {
      "ecmaVersion": "latest",
      "globals": {
        "AbortController": false,
        "AbortSignal": false,
        "Blob": false,
        "BroadcastChannel": false,
        "Buffer": false,
        "ByteLengthQueuingStrategy": false,
        "CloseEvent": false,
        "CompressionStream": false,
        "CountQueuingStrategy": false,
        "Crypto": false,
        "CryptoKey": false,
        "CustomEvent": false,
        "DOMException": false,
        "DecompressionStream": false,
        "Event": false,
        "EventTarget": false,
        "File": false,
        "FormData": false,
        "Headers": false,
        "MessageChannel": false,
        "MessageEvent": false,
        "MessagePort": false,
        "Navigator": false,
        "Performance": false,
        "PerformanceEntry": false,
        "PerformanceMark": false,
        "PerformanceMeasure": false,
        "PerformanceObserver": false,
        "PerformanceObserverEntryList": false,
        "PerformanceResourceTiming": false,
        "ReadableByteStreamController": false,
        "ReadableStream": false,
        "ReadableStreamBYOBReader": false,
        "ReadableStreamBYOBRequest": false,
        "ReadableStreamDefaultController": false,
        "ReadableStreamDefaultReader": false,
        "Request": false,
        "Response": false,
        "SubtleCrypto": false,
        "TextDecoder": false,
        "TextDecoderStream": false,
        "TextEncoder": false,
        "TextEncoderStream": false,
        "TransformStream": false,
        "TransformStreamDefaultController": false,
        "URL": false,
        "URLSearchParams": false,
        "WebAssembly": false,
        "WebSocket": false,
        "WritableStream": false,
        "WritableStreamDefaultController": false,
        "WritableStreamDefaultWriter": false,
        "__dirname": false,
        "__filename": false,
        "atob": false,
        "btoa": false,
        "clearImmediate": false,
        "clearInterval": false,
        "clearTimeout": false,
        "console": false,
        "crypto": false,
        "exports": true,
        "fetch": false,
        "global": false,
        "module": false,
        "navigator": false,
        "performance": false,
        "process": false,
        "queueMicrotask": false,
        "require": false,
        "setImmediate": false,
        "setInterval": false,
        "setTimeout": false,
        "structuredClone": false
      },
      "parser": "@qlik/eslint-config/node-cjs-ts-parser",
      "parserOptions": {
        "parser": {
          "meta": {
            "name": "typescript-eslint/parser",
            "version": "8.16.0"
          },
          "version": "8.16.0"
        },
        "projectService": true,
        "warnOnUnsupportedTypeScriptVersion": false
      },
      "sourceType": "commonjs"
    },
    "name": "@qlik/eslint-config/node-cjs-ts",
    "plugins": {
      "@typescript-eslint": "@typescript-eslint-plugin",
      "import-x": "import-x-plugin"
    },
    "rules": {
      "@typescript-eslint/ban-ts-comment": "error",
      "@typescript-eslint/class-methods-use-this": [
        "warn",
        {
          "exceptMethods": []
        }
      ],
      "@typescript-eslint/consistent-type-exports": "error",
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/default-param-last": "error",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/method-signature-style": "error",
      "@typescript-eslint/naming-convention": [
        "error",
        {
          "format": [
            "camelCase",
            "PascalCase",
            "UPPER_CASE"
          ],
          "selector": "variable"
        },
        {
          "format": [
            "camelCase",
            "PascalCase"
          ],
          "selector": "function"
        },
        {
          "format": [
            "PascalCase"
          ],
          "selector": "typeLike"
        }
      ],
      "@typescript-eslint/no-array-constructor": "error",
      "@typescript-eslint/no-confusing-void-expression": "error",
      "@typescript-eslint/no-duplicate-enum-values": "error",
      "@typescript-eslint/no-dynamic-delete": "error",
      "@typescript-eslint/no-empty-object-type": "error",
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-extra-non-null-assertion": "error",
      "@typescript-eslint/no-extraneous-class": "error",
      "@typescript-eslint/no-floating-promises": [
        "error",
        {
          "ignoreIIFE": true
        }
      ],
      "@typescript-eslint/no-import-type-side-effects": "error",
      "@typescript-eslint/no-invalid-void-type": "error",
      "@typescript-eslint/no-loop-func": "error",
      "@typescript-eslint/no-magic-numbers": "off",
      "@typescript-eslint/no-meaningless-void-operator": "error",
      "@typescript-eslint/no-misused-new": "error",
      "@typescript-eslint/no-misused-promises": [
        "error",
        {
          "checksConditionals": false
        }
      ],
      "@typescript-eslint/no-mixed-enums": "error",
      "@typescript-eslint/no-namespace": "error",
      "@typescript-eslint/no-non-null-asserted-nullish-coalescing": "error",
      "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
      "@typescript-eslint/no-non-null-assertion": "error",
      "@typescript-eslint/no-redeclare": "error",
      "@typescript-eslint/no-require-imports": "error",
      "@typescript-eslint/no-restricted-imports": [
        "off",
        {
          "paths": [],
          "patterns": []
        }
      ],
      "@typescript-eslint/no-restricted-types": [
        "error",
        {}
      ],
      "@typescript-eslint/no-shadow": "error",
      "@typescript-eslint/no-this-alias": "error",
      "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
      "@typescript-eslint/no-unnecessary-condition": "error",
      "@typescript-eslint/no-unnecessary-parameter-property-assignment": "error",
      "@typescript-eslint/no-unnecessary-qualifier": "error",
      "@typescript-eslint/no-unnecessary-template-expression": "error",
      "@typescript-eslint/no-unnecessary-type-arguments": "error",
      "@typescript-eslint/no-unnecessary-type-constraint": "error",
      "@typescript-eslint/no-unnecessary-type-parameters": "off",
      "@typescript-eslint/no-unsafe-declaration-merging": "error",
      "@typescript-eslint/no-unsafe-function-type": "error",
      "@typescript-eslint/no-unused-expressions": "error",
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/no-useless-constructor": "error",
      "@typescript-eslint/no-useless-empty-export": "error",
      "@typescript-eslint/no-wrapper-object-types": "error",
      "@typescript-eslint/prefer-as-const": "error",
      "@typescript-eslint/prefer-enum-initializers": "error",
      "@typescript-eslint/prefer-for-of": "off",
      "@typescript-eslint/prefer-literal-enum-member": "error",
      "@typescript-eslint/prefer-namespace-keyword": "error",
      "@typescript-eslint/prefer-reduce-type-parameter": "error",
      "@typescript-eslint/prefer-return-this-type": "error",
      "@typescript-eslint/require-array-sort-compare": "error",
      "@typescript-eslint/return-await": "error",
      "@typescript-eslint/strict-boolean-expressions": "off",
      "@typescript-eslint/switch-exhaustiveness-check": "error",
      "@typescript-eslint/triple-slash-reference": "error",
      "@typescript-eslint/unified-signatures": "error",
      "@typescript-eslint/use-unknown-in-catch-callback-variable": "error",
      "array-callback-return": [
        "error",
        {
          "allowImplicit": true
        }
      ],
      "arrow-body-style": "off",
      "block-scoped-var": "error",
      "camelcase": "off",
      "class-methods-use-this": "off",
      "consistent-return": "error",
      "constructor-super": "off",
      "curly": "off",
      "default-case": [
        "error",
        {
          "commentPattern": "^no default$"
        }
      ],
      "default-case-last": "error",
      "default-param-last": "off",
      "eqeqeq": [
        "error",
        "always",
        {
          "null": "ignore"
        }
      ],
      "for-direction": "error",
      "func-names": "warn",
      "getter-return": "off",
      "grouped-accessor-pairs": "error",
      "import-x/consistent-type-specifier-style": "off",
      "import-x/default": "error",
      "import-x/export": "error",
      "import-x/extensions": [
        "error",
        "ignorePackages",
        {
          "js": "never",
          "jsx": "never",
          "mjs": "never",
          "mts": "never",
          "ts": "never",
          "tsx": "never"
        }
      ],
      "import-x/named": "off",
      "import-x/namespace": "error",
      "import-x/newline-after-import": "error",
      "import-x/no-absolute-path": "error",
      "import-x/no-amd": "error",
      "import-x/no-cycle": [
        "error",
        {
          "maxDepth": "∞"
        }
      ],
      "import-x/no-deprecated": "warn",
      "import-x/no-duplicates": "error",
      "import-x/no-dynamic-require": "error",
      "import-x/no-empty-named-blocks": "off",
      "import-x/no-extraneous-dependencies": [
        "off",
        {
          "devDependencies": [
            "**/test*/**",
            "**/mocks/**",
            "**/mock/**",
            "test/**",
            "tests/**",
            "spec/**",
            "**/__tests__/**",
            "**/__mocks__/**",
            "test.{js,jsx,ts,tsx}",
            "test-*.{js,jsx,ts,tsx}",
            "**/*{.,_}{test,spec}.{js,jsx,ts,tsx}",
            "**/jest.config.{cjs,mjs,js,ts}",
            "**/jest.setup.{cjs,mjs,js,ts}",
            "**/vitest.config.{cjs,mjs,js,ts}",
            "**/vue.config.{cjs,mjs,js,ts}",
            "**/svelte.config.{cjs,mjs,js,ts}",
            "**/tsup.config.{cjs,mjs,js,ts}",
            "**/playwright.config.{cjs,mjs,js,ts}",
            "**/webpack.config.{cjs,mjs,js,ts}",
            "**/webpack.mod.{cjs,mjs,js,ts}",
            "**/rollup.config.{cjs,mjs,js,ts}",
            "**/rollup.config.*cjs,mjs,.{js,ts}",
            "**/protractor.conf.{cjs,mjs,js,ts}",
            "**/protractor.conf.*.{cjs,mjs,js,ts}",
            "**/.eslintrc.{cjs,mjs,js,ts}",
            "**/eslint.config.{cjs,mjs,js,ts}",
            "**/.prettierrc.{cjs,mjs,js,ts}",
            "**/.prettierrc"
          ],
          "optionalDependencies": false
        }
      ],
      "import-x/no-import-module-exports": [
        "error",
        {
          "exceptions": []
        }
      ],
      "import-x/no-mutable-exports": "error",
      "import-x/no-named-as-default": "error",
      "import-x/no-named-as-default-member": "off",
      "import-x/no-named-default": "error",
      "import-x/no-nodejs-modules": "off",
      "import-x/no-relative-packages": "error",
      "import-x/no-self-import": "error",
      "import-x/no-unresolved": [
        "error",
        {
          "caseSensitive": true,
          "commonjs": true
        }
      ],
      "import-x/no-unused-modules": "error",
      "import-x/no-useless-path-segments": [
        "error",
        {
          "commonjs": true
        }
      ],
      "import-x/no-webpack-loader-syntax": "error",
      "import-x/prefer-default-export": "off",
      "max-classes-per-file": [
        "error",
        1
      ],
      "new-cap": [
        "error",
        {
          "capIsNew": false,
          "capIsNewExceptions": [
            "Immutable.Map",
            "Immutable.Set",
            "Immutable.List"
          ],
          "newIsCap": true,
          "newIsCapExceptions": []
        }
      ],
      "no-alert": "error",
      "no-array-constructor": "off",
      "no-async-promise-executor": "error",
      "no-await-in-loop": "error",
      "no-bitwise": "error",
      "no-caller": "error",
      "no-case-declarations": "error",
      "no-class-assign": "off",
      "no-compare-neg-zero": "error",
      "no-cond-assign": [
        "error",
        "always"
      ],
      "no-console": "off",
      "no-const-assign": "off",
      "no-constant-binary-expression": "error",
      "no-constant-condition": "warn",
      "no-constructor-return": "error",
      "no-continue": "error",
      "no-control-regex": "error",
      "no-debugger": "error",
      "no-delete-var": "error",
      "no-dupe-args": "off",
      "no-dupe-class-members": "off",
      "no-dupe-else-if": "error",
      "no-dupe-keys": "off",
      "no-duplicate-case": "error",
      "no-else-return": [
        "error",
        {
          "allowElseIf": false
        }
      ],
      "no-empty": "error",
      "no-empty-character-class": "error",
      "no-empty-function": [
        "error",
        {
          "allow": [
            "arrowFunctions",
            "functions",
            "methods"
          ]
        }
      ],
      "no-empty-pattern": "error",
      "no-empty-static-block": "error",
      "no-eval": "error",
      "no-ex-assign": "error",
      "no-extend-native": "error",
      "no-extra-bind": "error",
      "no-extra-boolean-cast": "error",
      "no-extra-label": "error",
      "no-fallthrough": "error",
      "no-func-assign": "off",
      "no-global-assign": [
        "error",
        {
          "exceptions": []
        }
      ],
      "no-implied-eval": "error",
      "no-import-assign": "off",
      "no-inner-declarations": "error",
      "no-invalid-regexp": "error",
      "no-irregular-whitespace": "error",
      "no-iterator": "error",
      "no-label-var": "error",
      "no-labels": [
        "error",
        {
          "allowLoop": false,
          "allowSwitch": false
        }
      ],
      "no-lone-blocks": "error",
      "no-lonely-if": "error",
      "no-loop-func": "off",
      "no-loss-of-precision": "error",
      "no-magic-numbers": "off",
      "no-misleading-character-class": "error",
      "no-multi-assign": [
        "error"
      ],
      "no-multi-str": "error",
      "no-nested-ternary": "error",
      "no-new": "error",
      "no-new-func": "error",
      "no-new-native-nonconstructor": "off",
      "no-new-symbol": "off",
      "no-new-wrappers": "error",
      "no-nonoctal-decimal-escape": "error",
      "no-obj-calls": "off",
      "no-object-constructor": "error",
      "no-octal": "error",
      "no-octal-escape": "error",
      "no-param-reassign": [
        "error",
        {
          "ignorePropertyModificationsFor": [
            "prev",
            "acc",
            "accumulator",
            "e",
            "ctx",
            "context",
            "req",
            "request",
            "res",
            "response",
            "$scope",
            "staticContext",
            "sharedState",
            "state"
          ],
          "props": true
        }
      ],
      "no-promise-executor-return": "error",
      "no-proto": "error",
      "no-prototype-builtins": "error",
      "no-redeclare": "off",
      "no-regex-spaces": "error",
      "no-restricted-exports": [
        "error",
        {
          "restrictedNamedExports": [
            "default",
            "then"
          ]
        }
      ],
      "no-restricted-globals": [
        "error",
        {
          "message": "Use Number.isFinite instead",
          "name": "isFinite"
        },
        {
          "message": "Use Number.isNaN instead",
          "name": "isNaN"
        },
        {
          "message": "Use window.addEventListener instead",
          "name": "addEventListener"
        },
        {
          "message": "Use window.blur instead",
          "name": "blur"
        },
        {
          "message": "Use window.close instead",
          "name": "close"
        },
        {
          "message": "Use window.closed instead",
          "name": "closed"
        },
        {
          "message": "Use window.confirm instead",
          "name": "confirm"
        },
        {
          "message": "Use window.defaultStatus instead",
          "name": "defaultStatus"
        },
        {
          "message": "Use window.defaultstatus instead",
          "name": "defaultstatus"
        },
        {
          "message": "Use window.event instead",
          "name": "event"
        },
        {
          "message": "Use window.external instead",
          "name": "external"
        },
        {
          "message": "Use window.find instead",
          "name": "find"
        },
        {
          "message": "Use window.focus instead",
          "name": "focus"
        },
        {
          "message": "Use window.frameElement instead",
          "name": "frameElement"
        },
        {
          "message": "Use window.frames instead",
          "name": "frames"
        },
        {
          "message": "Use window.history instead",
          "name": "history"
        },
        {
          "message": "Use window.innerHeight instead",
          "name": "innerHeight"
        },
        {
          "message": "Use window.innerWidth instead",
          "name": "innerWidth"
        },
        {
          "message": "Use window.length instead",
          "name": "length"
        },
        {
          "message": "Use window.location instead",
          "name": "location"
        },
        {
          "message": "Use window.locationbar instead",
          "name": "locationbar"
        },
        {
          "message": "Use window.menubar instead",
          "name": "menubar"
        },
        {
          "message": "Use window.moveBy instead",
          "name": "moveBy"
        },
        {
          "message": "Use window.moveTo instead",
          "name": "moveTo"
        },
        {
          "message": "Use window.name instead",
          "name": "name"
        },
        {
          "message": "Use window.onblur instead",
          "name": "onblur"
        },
        {
          "message": "Use window.onerror instead",
          "name": "onerror"
        },
        {
          "message": "Use window.onfocus instead",
          "name": "onfocus"
        },
        {
          "message": "Use window.onload instead",
          "name": "onload"
        },
        {
          "message": "Use window.onresize instead",
          "name": "onresize"
        },
        {
          "message": "Use window.onunload instead",
          "name": "onunload"
        },
        {
          "message": "Use window.open instead",
          "name": "open"
        },
        {
          "message": "Use window.opener instead",
          "name": "opener"
        },
        {
          "message": "Use window.opera instead",
          "name": "opera"
        },
        {
          "message": "Use window.outerHeight instead",
          "name": "outerHeight"
        },
        {
          "message": "Use window.outerWidth instead",
          "name": "outerWidth"
        },
        {
          "message": "Use window.pageXOffset instead",
          "name": "pageXOffset"
        },
        {
          "message": "Use window.pageYOffset instead",
          "name": "pageYOffset"
        },
        {
          "message": "Use window.parent instead",
          "name": "parent"
        },
        {
          "message": "Use window.print instead",
          "name": "print"
        },
        {
          "message": "Use window.removeEventListener instead",
          "name": "removeEventListener"
        },
        {
          "message": "Use window.resizeBy instead",
          "name": "resizeBy"
        },
        {
          "message": "Use window.resizeTo instead",
          "name": "resizeTo"
        },
        {
          "message": "Use window.screen instead",
          "name": "screen"
        },
        {
          "message": "Use window.screenLeft instead",
          "name": "screenLeft"
        },
        {
          "message": "Use window.screenTop instead",
          "name": "screenTop"
        },
        {
          "message": "Use window.screenX instead",
          "name": "screenX"
        },
        {
          "message": "Use window.screenY instead",
          "name": "screenY"
        },
        {
          "message": "Use window.scroll instead",
          "name": "scroll"
        },
        {
          "message": "Use window.scrollbars instead",
          "name": "scrollbars"
        },
        {
          "message": "Use window.scrollBy instead",
          "name": "scrollBy"
        },
        {
          "message": "Use window.scrollTo instead",
          "name": "scrollTo"
        },
        {
          "message": "Use window.scrollX instead",
          "name": "scrollX"
        },
        {
          "message": "Use window.scrollY instead",
          "name": "scrollY"
        },
        {
          "message": "Use window.self instead",
          "name": "self"
        },
        {
          "message": "Use window.status instead",
          "name": "status"
        },
        {
          "message": "Use window.statusbar instead",
          "name": "statusbar"
        },
        {
          "message": "Use window.stop instead",
          "name": "stop"
        },
        {
          "message": "Use window.toolbar instead",
          "name": "toolbar"
        },
        {
          "message": "Use window.top instead",
          "name": "top"
        }
      ],
      "no-restricted-imports": "off",
      "no-restricted-properties": [
        "error",
        {
          "message": "arguments.callee is deprecated",
          "object": "arguments",
          "property": "callee"
        },
        {
          "message": "Please use Number.isFinite instead",
          "object": "global",
          "property": "isFinite"
        },
        {
          "message": "Please use Number.isFinite instead",
          "object": "self",
          "property": "isFinite"
        },
        {
          "message": "Please use Number.isFinite instead",
          "object": "window",
          "property": "isFinite"
        },
        {
          "message": "Please use Number.isNaN instead",
          "object": "global",
          "property": "isNaN"
        },
        {
          "message": "Please use Number.isNaN instead",
          "object": "self",
          "property": "isNaN"
        },
        {
          "message": "Please use Number.isNaN instead",
          "object": "window",
          "property": "isNaN"
        },
        {
          "message": "Please use Object.defineProperty instead.",
          "property": "__defineGetter__"
        },
        {
          "message": "Please use Object.defineProperty instead.",
          "property": "__defineSetter__"
        },
        {
          "message": "Use the exponentiation operator (**) instead.",
          "object": "Math",
          "property": "pow"
        }
      ],
      "no-restricted-syntax": [
        "error",
        {
          "message": "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.",
          "selector": "LabeledStatement"
        },
        {
          "message": "`with` is disallowed in strict mode because it makes code impossible to predict and optimize.",
          "selector": "WithStatement"
        }
      ],
      "no-return-assign": [
        "error",
        "always"
      ],
      "no-return-await": "off",
      "no-script-url": "error",
      "no-self-assign": [
        "error",
        {
          "props": true
        }
      ],
      "no-self-compare": "error",
      "no-sequences": "error",
      "no-setter-return": "off",
      "no-shadow": "off",
      "no-shadow-restricted-names": "error",
      "no-sparse-arrays": "error",
      "no-template-curly-in-string": "error",
      "no-this-before-super": "off",
      "no-throw-literal": "error",
      "no-undef": "off",
      "no-undef-init": "error",
      "no-underscore-dangle": "off",
      "no-unexpected-multiline": "error",
      "no-unmodified-loop-condition": "error",
      "no-unneeded-ternary": [
        "error",
        {
          "defaultAssignment": false
        }
      ],
      "no-unreachable": "off",
      "no-unreachable-loop": [
        "error",
        {
          "ignore": []
        }
      ],
      "no-unsafe-finally": "error",
      "no-unsafe-negation": "off",
      "no-unsafe-optional-chaining": [
        "error",
        {
          "disallowArithmeticOperators": true
        }
      ],
      "no-unused-expressions": "off",
      "no-unused-labels": "error",
      "no-unused-private-class-members": "error",
      "no-unused-vars": "off",
      "no-useless-backreference": "error",
      "no-useless-call": "error",
      "no-useless-catch": "error",
      "no-useless-computed-key": "error",
      "no-useless-concat": "error",
      "no-useless-constructor": "off",
      "no-useless-escape": "error",
      "no-useless-rename": [
        "error",
        {
          "ignoreDestructuring": false,
          "ignoreExport": false,
          "ignoreImport": false
        }
      ],
      "no-useless-return": "error",
      "no-var": "error",
      "no-with": "error",
      "object-shorthand": [
        "error",
        "always",
        {
          "avoidQuotes": true,
          "ignoreConstructors": false
        }
      ],
      "one-var": [
        "error",
        "never"
      ],
      "operator-assignment": [
        "error",
        "always"
      ],
      "prefer-arrow-callback": "off",
      "prefer-const": "error",
      "prefer-exponentiation-operator": "error",
      "prefer-numeric-literals": "error",
      "prefer-object-has-own": "error",
      "prefer-object-spread": "error",
      "prefer-promise-reject-errors": [
        "error",
        {
          "allowEmptyReject": true
        }
      ],
      "prefer-regex-literals": [
        "error",
        {
          "disallowRedundantWrapping": true
        }
      ],
      "prefer-rest-params": "error",
      "prefer-spread": "error",
      "prefer-template": "error",
      "radix": "error",
      "require-atomic-updates": "error",
      "require-yield": "error",
      "symbol-description": "error",
      "unicode-bom": [
        "error",
        "never"
      ],
      "use-isnan": "error",
      "valid-typeof": [
        "error",
        {
          "requireStringLiterals": true
        }
      ],
      "yoda": "error"
    },
    "settings": {
      "import-x/extensions": [
        ".ts",
        ".tsx",
        ".cts",
        ".mts",
        ".js",
        ".jsx",
        ".cjs",
        ".mjs"
      ],
      "import-x/external-module-folders": [
        "node_modules",
        "node_modules/@types"
      ],
      "import-x/parsers": {
        "@typescript-eslint/parser": [
          ".ts",
          ".tsx",
          ".cts",
          ".mts"
        ]
      },
      "import-x/resolver": {
        "typescript": true
      }
    }
  }
]