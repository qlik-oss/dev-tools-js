export default [
  {
    "files": [
      "**/*.{js,mjs}"
    ],
    "languageOptions": {
      "ecmaVersion": "latest",
      "globals": {
        "AbortController": false,
        "AbortSignal": false,
        "AsyncDisposableStack": false,
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
        "DisposableStack": false,
        "ErrorEvent": false,
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
        "Storage": false,
        "SubtleCrypto": false,
        "SuppressedError": false,
        "TextDecoder": false,
        "TextDecoderStream": false,
        "TextEncoder": false,
        "TextEncoderStream": false,
        "TransformStream": false,
        "TransformStreamDefaultController": false,
        "URL": false,
        "URLPattern": false,
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
        "localStorage": false,
        "module": false,
        "navigator": false,
        "performance": false,
        "process": false,
        "queueMicrotask": false,
        "require": false,
        "sessionStorage": false,
        "setImmediate": false,
        "setInterval": false,
        "setTimeout": false,
        "structuredClone": false
      },
      "parser": "@qlik/eslint-config/node-esm-js-parser",
      "parserOptions": {
        "warnOnUnsupportedTypeScriptVersion": false
      },
      "sourceType": "module"
    },
    "name": "@qlik/eslint-config/node-esm-js",
    "plugins": {
      "@typescript-eslint": "@typescript-eslint-plugin",
      "import-x": "import-x-plugin"
    },
    "rules": {
      "@babel/object-curly-spacing": "off",
      "@babel/semi": "off",
      "@stylistic/array-bracket-newline": "off",
      "@stylistic/array-bracket-spacing": "off",
      "@stylistic/array-element-newline": "off",
      "@stylistic/arrow-parens": "off",
      "@stylistic/arrow-spacing": "off",
      "@stylistic/block-spacing": "off",
      "@stylistic/brace-style": "off",
      "@stylistic/comma-dangle": "off",
      "@stylistic/comma-spacing": "off",
      "@stylistic/comma-style": "off",
      "@stylistic/computed-property-spacing": "off",
      "@stylistic/dot-location": "off",
      "@stylistic/eol-last": "off",
      "@stylistic/func-call-spacing": "off",
      "@stylistic/function-call-argument-newline": "off",
      "@stylistic/function-call-spacing": "off",
      "@stylistic/function-paren-newline": "off",
      "@stylistic/generator-star-spacing": "off",
      "@stylistic/implicit-arrow-linebreak": "off",
      "@stylistic/indent": "off",
      "@stylistic/indent-binary-ops": "off",
      "@stylistic/js/array-bracket-newline": "off",
      "@stylistic/js/array-bracket-spacing": "off",
      "@stylistic/js/array-element-newline": "off",
      "@stylistic/js/arrow-parens": "off",
      "@stylistic/js/arrow-spacing": "off",
      "@stylistic/js/block-spacing": "off",
      "@stylistic/js/brace-style": "off",
      "@stylistic/js/comma-dangle": "off",
      "@stylistic/js/comma-spacing": "off",
      "@stylistic/js/comma-style": "off",
      "@stylistic/js/computed-property-spacing": "off",
      "@stylistic/js/dot-location": "off",
      "@stylistic/js/eol-last": "off",
      "@stylistic/js/func-call-spacing": "off",
      "@stylistic/js/function-call-argument-newline": "off",
      "@stylistic/js/function-call-spacing": "off",
      "@stylistic/js/function-paren-newline": "off",
      "@stylistic/js/generator-star-spacing": "off",
      "@stylistic/js/implicit-arrow-linebreak": "off",
      "@stylistic/js/indent": "off",
      "@stylistic/js/jsx-quotes": "off",
      "@stylistic/js/key-spacing": "off",
      "@stylistic/js/keyword-spacing": "off",
      "@stylistic/js/linebreak-style": "off",
      "@stylistic/js/lines-around-comment": 0,
      "@stylistic/js/max-len": 0,
      "@stylistic/js/max-statements-per-line": "off",
      "@stylistic/js/multiline-ternary": "off",
      "@stylistic/js/new-parens": "off",
      "@stylistic/js/newline-per-chained-call": "off",
      "@stylistic/js/no-confusing-arrow": 0,
      "@stylistic/js/no-extra-parens": "off",
      "@stylistic/js/no-extra-semi": "off",
      "@stylistic/js/no-floating-decimal": "off",
      "@stylistic/js/no-mixed-operators": 0,
      "@stylistic/js/no-mixed-spaces-and-tabs": "off",
      "@stylistic/js/no-multi-spaces": "off",
      "@stylistic/js/no-multiple-empty-lines": "off",
      "@stylistic/js/no-tabs": 0,
      "@stylistic/js/no-trailing-spaces": "off",
      "@stylistic/js/no-whitespace-before-property": "off",
      "@stylistic/js/nonblock-statement-body-position": "off",
      "@stylistic/js/object-curly-newline": "off",
      "@stylistic/js/object-curly-spacing": "off",
      "@stylistic/js/object-property-newline": "off",
      "@stylistic/js/one-var-declaration-per-line": "off",
      "@stylistic/js/operator-linebreak": "off",
      "@stylistic/js/padded-blocks": "off",
      "@stylistic/js/quote-props": "off",
      "@stylistic/js/quotes": 0,
      "@stylistic/js/rest-spread-spacing": "off",
      "@stylistic/js/semi": "off",
      "@stylistic/js/semi-spacing": "off",
      "@stylistic/js/semi-style": "off",
      "@stylistic/js/space-before-blocks": "off",
      "@stylistic/js/space-before-function-paren": "off",
      "@stylistic/js/space-in-parens": "off",
      "@stylistic/js/space-infix-ops": "off",
      "@stylistic/js/space-unary-ops": "off",
      "@stylistic/js/switch-colon-spacing": "off",
      "@stylistic/js/template-curly-spacing": "off",
      "@stylistic/js/template-tag-spacing": "off",
      "@stylistic/js/wrap-iife": "off",
      "@stylistic/js/wrap-regex": "off",
      "@stylistic/js/yield-star-spacing": "off",
      "@stylistic/jsx-child-element-spacing": "off",
      "@stylistic/jsx-closing-bracket-location": "off",
      "@stylistic/jsx-closing-tag-location": "off",
      "@stylistic/jsx-curly-newline": "off",
      "@stylistic/jsx-curly-spacing": "off",
      "@stylistic/jsx-equals-spacing": "off",
      "@stylistic/jsx-first-prop-new-line": "off",
      "@stylistic/jsx-indent": "off",
      "@stylistic/jsx-indent-props": "off",
      "@stylistic/jsx-max-props-per-line": "off",
      "@stylistic/jsx-newline": "off",
      "@stylistic/jsx-one-expression-per-line": "off",
      "@stylistic/jsx-props-no-multi-spaces": "off",
      "@stylistic/jsx-quotes": "off",
      "@stylistic/jsx-tag-spacing": "off",
      "@stylistic/jsx-wrap-multilines": "off",
      "@stylistic/jsx/jsx-child-element-spacing": "off",
      "@stylistic/jsx/jsx-closing-bracket-location": "off",
      "@stylistic/jsx/jsx-closing-tag-location": "off",
      "@stylistic/jsx/jsx-curly-newline": "off",
      "@stylistic/jsx/jsx-curly-spacing": "off",
      "@stylistic/jsx/jsx-equals-spacing": "off",
      "@stylistic/jsx/jsx-first-prop-new-line": "off",
      "@stylistic/jsx/jsx-indent": "off",
      "@stylistic/jsx/jsx-indent-props": "off",
      "@stylistic/jsx/jsx-max-props-per-line": "off",
      "@stylistic/key-spacing": "off",
      "@stylistic/keyword-spacing": "off",
      "@stylistic/linebreak-style": "off",
      "@stylistic/lines-around-comment": 0,
      "@stylistic/max-len": 0,
      "@stylistic/max-statements-per-line": "off",
      "@stylistic/member-delimiter-style": "off",
      "@stylistic/multiline-ternary": "off",
      "@stylistic/new-parens": "off",
      "@stylistic/newline-per-chained-call": "off",
      "@stylistic/no-confusing-arrow": 0,
      "@stylistic/no-extra-parens": "off",
      "@stylistic/no-extra-semi": "off",
      "@stylistic/no-floating-decimal": "off",
      "@stylistic/no-mixed-operators": 0,
      "@stylistic/no-mixed-spaces-and-tabs": "off",
      "@stylistic/no-multi-spaces": "off",
      "@stylistic/no-multiple-empty-lines": "off",
      "@stylistic/no-tabs": 0,
      "@stylistic/no-trailing-spaces": "off",
      "@stylistic/no-whitespace-before-property": "off",
      "@stylistic/nonblock-statement-body-position": "off",
      "@stylistic/object-curly-newline": "off",
      "@stylistic/object-curly-spacing": "off",
      "@stylistic/object-property-newline": "off",
      "@stylistic/one-var-declaration-per-line": "off",
      "@stylistic/operator-linebreak": "off",
      "@stylistic/padded-blocks": "off",
      "@stylistic/quote-props": "off",
      "@stylistic/quotes": 0,
      "@stylistic/rest-spread-spacing": "off",
      "@stylistic/semi": "off",
      "@stylistic/semi-spacing": "off",
      "@stylistic/semi-style": "off",
      "@stylistic/space-before-blocks": "off",
      "@stylistic/space-before-function-paren": "off",
      "@stylistic/space-in-parens": "off",
      "@stylistic/space-infix-ops": "off",
      "@stylistic/space-unary-ops": "off",
      "@stylistic/switch-colon-spacing": "off",
      "@stylistic/template-curly-spacing": "off",
      "@stylistic/template-tag-spacing": "off",
      "@stylistic/ts/block-spacing": "off",
      "@stylistic/ts/brace-style": "off",
      "@stylistic/ts/comma-dangle": "off",
      "@stylistic/ts/comma-spacing": "off",
      "@stylistic/ts/func-call-spacing": "off",
      "@stylistic/ts/function-call-spacing": "off",
      "@stylistic/ts/indent": "off",
      "@stylistic/ts/key-spacing": "off",
      "@stylistic/ts/keyword-spacing": "off",
      "@stylistic/ts/lines-around-comment": 0,
      "@stylistic/ts/member-delimiter-style": "off",
      "@stylistic/ts/no-extra-parens": "off",
      "@stylistic/ts/no-extra-semi": "off",
      "@stylistic/ts/object-curly-spacing": "off",
      "@stylistic/ts/quotes": 0,
      "@stylistic/ts/semi": "off",
      "@stylistic/ts/space-before-blocks": "off",
      "@stylistic/ts/space-before-function-paren": "off",
      "@stylistic/ts/space-infix-ops": "off",
      "@stylistic/ts/type-annotation-spacing": "off",
      "@stylistic/type-annotation-spacing": "off",
      "@stylistic/type-generic-spacing": "off",
      "@stylistic/type-named-tuple-spacing": "off",
      "@stylistic/wrap-iife": "off",
      "@stylistic/wrap-regex": "off",
      "@stylistic/yield-star-spacing": "off",
      "@typescript-eslint/block-spacing": "off",
      "@typescript-eslint/brace-style": "off",
      "@typescript-eslint/comma-dangle": "off",
      "@typescript-eslint/comma-spacing": "off",
      "@typescript-eslint/func-call-spacing": "off",
      "@typescript-eslint/indent": "off",
      "@typescript-eslint/key-spacing": "off",
      "@typescript-eslint/keyword-spacing": "off",
      "@typescript-eslint/lines-around-comment": 0,
      "@typescript-eslint/member-delimiter-style": "off",
      "@typescript-eslint/no-extra-parens": "off",
      "@typescript-eslint/no-extra-semi": "off",
      "@typescript-eslint/object-curly-spacing": "off",
      "@typescript-eslint/quotes": 0,
      "@typescript-eslint/semi": "off",
      "@typescript-eslint/space-before-blocks": "off",
      "@typescript-eslint/space-before-function-paren": "off",
      "@typescript-eslint/space-infix-ops": "off",
      "@typescript-eslint/type-annotation-spacing": "off",
      "array-bracket-newline": "off",
      "array-bracket-spacing": "off",
      "array-callback-return": [
        "error",
        {
          "allowImplicit": true
        }
      ],
      "array-element-newline": "off",
      "arrow-body-style": "off",
      "arrow-parens": "off",
      "arrow-spacing": "off",
      "babel/object-curly-spacing": "off",
      "babel/quotes": 0,
      "babel/semi": "off",
      "block-scoped-var": "error",
      "block-spacing": "off",
      "brace-style": "off",
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
      "comma-dangle": "off",
      "comma-spacing": "off",
      "comma-style": "off",
      "computed-property-spacing": "off",
      "consistent-return": "error",
      "constructor-super": "error",
      "curly": 0,
      "default-case": [
        "error",
        {
          "commentPattern": "^no default$"
        }
      ],
      "default-case-last": "error",
      "default-param-last": "error",
      "dot-location": "off",
      "eol-last": "off",
      "eqeqeq": [
        "error",
        "always",
        {
          "null": "ignore"
        }
      ],
      "flowtype/boolean-style": "off",
      "flowtype/delimiter-dangle": "off",
      "flowtype/generic-spacing": "off",
      "flowtype/object-type-curly-spacing": "off",
      "flowtype/object-type-delimiter": "off",
      "flowtype/quotes": "off",
      "flowtype/semi": "off",
      "flowtype/space-after-type-colon": "off",
      "flowtype/space-before-generic-bracket": "off",
      "flowtype/space-before-type-colon": "off",
      "flowtype/union-intersection-spacing": "off",
      "for-direction": "error",
      "func-call-spacing": "off",
      "func-names": "warn",
      "function-call-argument-newline": "off",
      "function-paren-newline": "off",
      "generator-star": "off",
      "generator-star-spacing": "off",
      "getter-return": [
        "error",
        {
          "allowImplicit": true
        }
      ],
      "grouped-accessor-pairs": "error",
      "implicit-arrow-linebreak": "off",
      "import-x/consistent-type-specifier-style": "off",
      "import-x/default": "error",
      "import-x/export": "error",
      "import-x/extensions": [
        "error",
        "ignorePackages",
        {
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
          "ignoreExternal": true
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
      "indent": "off",
      "indent-legacy": "off",
      "jsx-quotes": "off",
      "key-spacing": "off",
      "keyword-spacing": "off",
      "linebreak-style": "off",
      "lines-around-comment": 0,
      "max-classes-per-file": [
        "error",
        1
      ],
      "max-len": 0,
      "max-statements-per-line": "off",
      "multiline-ternary": "off",
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
      "new-parens": "off",
      "newline-per-chained-call": "off",
      "no-alert": "error",
      "no-array-constructor": "error",
      "no-arrow-condition": "off",
      "no-async-promise-executor": "error",
      "no-await-in-loop": "error",
      "no-bitwise": "error",
      "no-caller": "error",
      "no-case-declarations": "error",
      "no-class-assign": "error",
      "no-comma-dangle": "off",
      "no-compare-neg-zero": "error",
      "no-cond-assign": [
        "error",
        "always"
      ],
      "no-confusing-arrow": 0,
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
      "no-extra-parens": "off",
      "no-extra-semi": "off",
      "no-fallthrough": "error",
      "no-floating-decimal": "off",
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
      "no-mixed-operators": 0,
      "no-mixed-spaces-and-tabs": "off",
      "no-multi-assign": [
        "error"
      ],
      "no-multi-spaces": "off",
      "no-multi-str": "error",
      "no-multiple-empty-lines": "off",
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
      "no-reserved-keys": "off",
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
      "no-space-before-semi": "off",
      "no-spaced-func": "off",
      "no-sparse-arrays": "error",
      "no-tabs": 0,
      "no-template-curly-in-string": "error",
      "no-this-before-super": "error",
      "no-throw-literal": "error",
      "no-trailing-spaces": "off",
      "no-undef": "error",
      "no-undef-init": "error",
      "no-underscore-dangle": "off",
      "no-unexpected-multiline": 0,
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
      "no-whitespace-before-property": "off",
      "no-with": "error",
      "no-wrap-func": "off",
      "nonblock-statement-body-position": "off",
      "object-curly-newline": "off",
      "object-curly-spacing": "off",
      "object-property-newline": "off",
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
      "one-var-declaration-per-line": "off",
      "operator-assignment": [
        "error",
        "always"
      ],
      "operator-linebreak": "off",
      "padded-blocks": "off",
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
      "quote-props": "off",
      "quotes": 0,
      "radix": "error",
      "react/jsx-child-element-spacing": "off",
      "react/jsx-closing-bracket-location": "off",
      "react/jsx-closing-tag-location": "off",
      "react/jsx-curly-newline": "off",
      "react/jsx-curly-spacing": "off",
      "react/jsx-equals-spacing": "off",
      "react/jsx-first-prop-new-line": "off",
      "react/jsx-indent": "off",
      "react/jsx-indent-props": "off",
      "react/jsx-max-props-per-line": "off",
      "react/jsx-newline": "off",
      "react/jsx-one-expression-per-line": "off",
      "react/jsx-props-no-multi-spaces": "off",
      "react/jsx-space-before-closing": "off",
      "react/jsx-tag-spacing": "off",
      "react/jsx-wrap-multilines": "off",
      "require-atomic-updates": "error",
      "require-yield": "error",
      "rest-spread-spacing": "off",
      "semi": "off",
      "semi-spacing": "off",
      "semi-style": "off",
      "space-after-function-name": "off",
      "space-after-keywords": "off",
      "space-before-blocks": "off",
      "space-before-function-paren": "off",
      "space-before-function-parentheses": "off",
      "space-before-keywords": "off",
      "space-in-brackets": "off",
      "space-in-parens": "off",
      "space-infix-ops": "off",
      "space-return-throw-case": "off",
      "space-unary-ops": "off",
      "space-unary-word-ops": "off",
      "standard/array-bracket-even-spacing": "off",
      "standard/computed-property-even-spacing": "off",
      "standard/object-curly-even-spacing": "off",
      "switch-colon-spacing": "off",
      "symbol-description": "error",
      "template-curly-spacing": "off",
      "template-tag-spacing": "off",
      "unicode-bom": [
        "error",
        "never"
      ],
      "unicorn/empty-brace-spaces": "off",
      "unicorn/no-nested-ternary": "off",
      "unicorn/number-literal-case": "off",
      "unicorn/template-indent": 0,
      "use-isnan": "error",
      "valid-typeof": [
        "error",
        {
          "requireStringLiterals": true
        }
      ],
      "vue/array-bracket-newline": "off",
      "vue/array-bracket-spacing": "off",
      "vue/array-element-newline": "off",
      "vue/arrow-spacing": "off",
      "vue/block-spacing": "off",
      "vue/block-tag-newline": "off",
      "vue/brace-style": "off",
      "vue/comma-dangle": "off",
      "vue/comma-spacing": "off",
      "vue/comma-style": "off",
      "vue/dot-location": "off",
      "vue/func-call-spacing": "off",
      "vue/html-closing-bracket-newline": "off",
      "vue/html-closing-bracket-spacing": "off",
      "vue/html-end-tags": "off",
      "vue/html-indent": "off",
      "vue/html-quotes": "off",
      "vue/html-self-closing": 0,
      "vue/key-spacing": "off",
      "vue/keyword-spacing": "off",
      "vue/max-attributes-per-line": "off",
      "vue/max-len": 0,
      "vue/multiline-html-element-content-newline": "off",
      "vue/multiline-ternary": "off",
      "vue/mustache-interpolation-spacing": "off",
      "vue/no-extra-parens": "off",
      "vue/no-multi-spaces": "off",
      "vue/no-spaces-around-equal-signs-in-attribute": "off",
      "vue/object-curly-newline": "off",
      "vue/object-curly-spacing": "off",
      "vue/object-property-newline": "off",
      "vue/operator-linebreak": "off",
      "vue/quote-props": "off",
      "vue/script-indent": "off",
      "vue/singleline-html-element-content-newline": "off",
      "vue/space-in-parens": "off",
      "vue/space-infix-ops": "off",
      "vue/space-unary-ops": "off",
      "vue/template-curly-spacing": "off",
      "wrap-iife": "off",
      "wrap-regex": "off",
      "yield-star-spacing": "off",
      "yoda": "error"
    }
  },
  {
    "files": [
      "**/*.{ts,mts}"
    ],
    "languageOptions": {
      "ecmaVersion": "latest",
      "globals": {
        "AbortController": false,
        "AbortSignal": false,
        "AsyncDisposableStack": false,
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
        "DisposableStack": false,
        "ErrorEvent": false,
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
        "Storage": false,
        "SubtleCrypto": false,
        "SuppressedError": false,
        "TextDecoder": false,
        "TextDecoderStream": false,
        "TextEncoder": false,
        "TextEncoderStream": false,
        "TransformStream": false,
        "TransformStreamDefaultController": false,
        "URL": false,
        "URLPattern": false,
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
        "localStorage": false,
        "module": false,
        "navigator": false,
        "performance": false,
        "process": false,
        "queueMicrotask": false,
        "require": false,
        "sessionStorage": false,
        "setImmediate": false,
        "setInterval": false,
        "setTimeout": false,
        "structuredClone": false
      },
      "parser": "@qlik/eslint-config/node-esm-ts-parser",
      "parserOptions": {
        "parser": {
          "meta": {
            "name": "typescript-eslint/parser",
            "version": "8.53.0"
          },
          "version": "8.53.0"
        },
        "projectService": true,
        "warnOnUnsupportedTypeScriptVersion": false
      },
      "sourceType": "module"
    },
    "name": "@qlik/eslint-config/node-esm-ts",
    "plugins": {
      "@typescript-eslint": "@typescript-eslint-plugin",
      "import-x": "import-x-plugin"
    },
    "rules": {
      "@babel/object-curly-spacing": "off",
      "@babel/semi": "off",
      "@stylistic/array-bracket-newline": "off",
      "@stylistic/array-bracket-spacing": "off",
      "@stylistic/array-element-newline": "off",
      "@stylistic/arrow-parens": "off",
      "@stylistic/arrow-spacing": "off",
      "@stylistic/block-spacing": "off",
      "@stylistic/brace-style": "off",
      "@stylistic/comma-dangle": "off",
      "@stylistic/comma-spacing": "off",
      "@stylistic/comma-style": "off",
      "@stylistic/computed-property-spacing": "off",
      "@stylistic/dot-location": "off",
      "@stylistic/eol-last": "off",
      "@stylistic/func-call-spacing": "off",
      "@stylistic/function-call-argument-newline": "off",
      "@stylistic/function-call-spacing": "off",
      "@stylistic/function-paren-newline": "off",
      "@stylistic/generator-star-spacing": "off",
      "@stylistic/implicit-arrow-linebreak": "off",
      "@stylistic/indent": "off",
      "@stylistic/indent-binary-ops": "off",
      "@stylistic/js/array-bracket-newline": "off",
      "@stylistic/js/array-bracket-spacing": "off",
      "@stylistic/js/array-element-newline": "off",
      "@stylistic/js/arrow-parens": "off",
      "@stylistic/js/arrow-spacing": "off",
      "@stylistic/js/block-spacing": "off",
      "@stylistic/js/brace-style": "off",
      "@stylistic/js/comma-dangle": "off",
      "@stylistic/js/comma-spacing": "off",
      "@stylistic/js/comma-style": "off",
      "@stylistic/js/computed-property-spacing": "off",
      "@stylistic/js/dot-location": "off",
      "@stylistic/js/eol-last": "off",
      "@stylistic/js/func-call-spacing": "off",
      "@stylistic/js/function-call-argument-newline": "off",
      "@stylistic/js/function-call-spacing": "off",
      "@stylistic/js/function-paren-newline": "off",
      "@stylistic/js/generator-star-spacing": "off",
      "@stylistic/js/implicit-arrow-linebreak": "off",
      "@stylistic/js/indent": "off",
      "@stylistic/js/jsx-quotes": "off",
      "@stylistic/js/key-spacing": "off",
      "@stylistic/js/keyword-spacing": "off",
      "@stylistic/js/linebreak-style": "off",
      "@stylistic/js/lines-around-comment": 0,
      "@stylistic/js/max-len": 0,
      "@stylistic/js/max-statements-per-line": "off",
      "@stylistic/js/multiline-ternary": "off",
      "@stylistic/js/new-parens": "off",
      "@stylistic/js/newline-per-chained-call": "off",
      "@stylistic/js/no-confusing-arrow": 0,
      "@stylistic/js/no-extra-parens": "off",
      "@stylistic/js/no-extra-semi": "off",
      "@stylistic/js/no-floating-decimal": "off",
      "@stylistic/js/no-mixed-operators": 0,
      "@stylistic/js/no-mixed-spaces-and-tabs": "off",
      "@stylistic/js/no-multi-spaces": "off",
      "@stylistic/js/no-multiple-empty-lines": "off",
      "@stylistic/js/no-tabs": 0,
      "@stylistic/js/no-trailing-spaces": "off",
      "@stylistic/js/no-whitespace-before-property": "off",
      "@stylistic/js/nonblock-statement-body-position": "off",
      "@stylistic/js/object-curly-newline": "off",
      "@stylistic/js/object-curly-spacing": "off",
      "@stylistic/js/object-property-newline": "off",
      "@stylistic/js/one-var-declaration-per-line": "off",
      "@stylistic/js/operator-linebreak": "off",
      "@stylistic/js/padded-blocks": "off",
      "@stylistic/js/quote-props": "off",
      "@stylistic/js/quotes": 0,
      "@stylistic/js/rest-spread-spacing": "off",
      "@stylistic/js/semi": "off",
      "@stylistic/js/semi-spacing": "off",
      "@stylistic/js/semi-style": "off",
      "@stylistic/js/space-before-blocks": "off",
      "@stylistic/js/space-before-function-paren": "off",
      "@stylistic/js/space-in-parens": "off",
      "@stylistic/js/space-infix-ops": "off",
      "@stylistic/js/space-unary-ops": "off",
      "@stylistic/js/switch-colon-spacing": "off",
      "@stylistic/js/template-curly-spacing": "off",
      "@stylistic/js/template-tag-spacing": "off",
      "@stylistic/js/wrap-iife": "off",
      "@stylistic/js/wrap-regex": "off",
      "@stylistic/js/yield-star-spacing": "off",
      "@stylistic/jsx-child-element-spacing": "off",
      "@stylistic/jsx-closing-bracket-location": "off",
      "@stylistic/jsx-closing-tag-location": "off",
      "@stylistic/jsx-curly-newline": "off",
      "@stylistic/jsx-curly-spacing": "off",
      "@stylistic/jsx-equals-spacing": "off",
      "@stylistic/jsx-first-prop-new-line": "off",
      "@stylistic/jsx-indent": "off",
      "@stylistic/jsx-indent-props": "off",
      "@stylistic/jsx-max-props-per-line": "off",
      "@stylistic/jsx-newline": "off",
      "@stylistic/jsx-one-expression-per-line": "off",
      "@stylistic/jsx-props-no-multi-spaces": "off",
      "@stylistic/jsx-quotes": "off",
      "@stylistic/jsx-tag-spacing": "off",
      "@stylistic/jsx-wrap-multilines": "off",
      "@stylistic/jsx/jsx-child-element-spacing": "off",
      "@stylistic/jsx/jsx-closing-bracket-location": "off",
      "@stylistic/jsx/jsx-closing-tag-location": "off",
      "@stylistic/jsx/jsx-curly-newline": "off",
      "@stylistic/jsx/jsx-curly-spacing": "off",
      "@stylistic/jsx/jsx-equals-spacing": "off",
      "@stylistic/jsx/jsx-first-prop-new-line": "off",
      "@stylistic/jsx/jsx-indent": "off",
      "@stylistic/jsx/jsx-indent-props": "off",
      "@stylistic/jsx/jsx-max-props-per-line": "off",
      "@stylistic/key-spacing": "off",
      "@stylistic/keyword-spacing": "off",
      "@stylistic/linebreak-style": "off",
      "@stylistic/lines-around-comment": 0,
      "@stylistic/max-len": 0,
      "@stylistic/max-statements-per-line": "off",
      "@stylistic/member-delimiter-style": "off",
      "@stylistic/multiline-ternary": "off",
      "@stylistic/new-parens": "off",
      "@stylistic/newline-per-chained-call": "off",
      "@stylistic/no-confusing-arrow": 0,
      "@stylistic/no-extra-parens": "off",
      "@stylistic/no-extra-semi": "off",
      "@stylistic/no-floating-decimal": "off",
      "@stylistic/no-mixed-operators": 0,
      "@stylistic/no-mixed-spaces-and-tabs": "off",
      "@stylistic/no-multi-spaces": "off",
      "@stylistic/no-multiple-empty-lines": "off",
      "@stylistic/no-tabs": 0,
      "@stylistic/no-trailing-spaces": "off",
      "@stylistic/no-whitespace-before-property": "off",
      "@stylistic/nonblock-statement-body-position": "off",
      "@stylistic/object-curly-newline": "off",
      "@stylistic/object-curly-spacing": "off",
      "@stylistic/object-property-newline": "off",
      "@stylistic/one-var-declaration-per-line": "off",
      "@stylistic/operator-linebreak": "off",
      "@stylistic/padded-blocks": "off",
      "@stylistic/quote-props": "off",
      "@stylistic/quotes": 0,
      "@stylistic/rest-spread-spacing": "off",
      "@stylistic/semi": "off",
      "@stylistic/semi-spacing": "off",
      "@stylistic/semi-style": "off",
      "@stylistic/space-before-blocks": "off",
      "@stylistic/space-before-function-paren": "off",
      "@stylistic/space-in-parens": "off",
      "@stylistic/space-infix-ops": "off",
      "@stylistic/space-unary-ops": "off",
      "@stylistic/switch-colon-spacing": "off",
      "@stylistic/template-curly-spacing": "off",
      "@stylistic/template-tag-spacing": "off",
      "@stylistic/ts/block-spacing": "off",
      "@stylistic/ts/brace-style": "off",
      "@stylistic/ts/comma-dangle": "off",
      "@stylistic/ts/comma-spacing": "off",
      "@stylistic/ts/func-call-spacing": "off",
      "@stylistic/ts/function-call-spacing": "off",
      "@stylistic/ts/indent": "off",
      "@stylistic/ts/key-spacing": "off",
      "@stylistic/ts/keyword-spacing": "off",
      "@stylistic/ts/lines-around-comment": 0,
      "@stylistic/ts/member-delimiter-style": "off",
      "@stylistic/ts/no-extra-parens": "off",
      "@stylistic/ts/no-extra-semi": "off",
      "@stylistic/ts/object-curly-spacing": "off",
      "@stylistic/ts/quotes": 0,
      "@stylistic/ts/semi": "off",
      "@stylistic/ts/space-before-blocks": "off",
      "@stylistic/ts/space-before-function-paren": "off",
      "@stylistic/ts/space-infix-ops": "off",
      "@stylistic/ts/type-annotation-spacing": "off",
      "@stylistic/type-annotation-spacing": "off",
      "@stylistic/type-generic-spacing": "off",
      "@stylistic/type-named-tuple-spacing": "off",
      "@stylistic/wrap-iife": "off",
      "@stylistic/wrap-regex": "off",
      "@stylistic/yield-star-spacing": "off",
      "@typescript-eslint/ban-ts-comment": "error",
      "@typescript-eslint/block-spacing": "off",
      "@typescript-eslint/brace-style": "off",
      "@typescript-eslint/class-methods-use-this": [
        "warn",
        {
          "exceptMethods": []
        }
      ],
      "@typescript-eslint/comma-dangle": "off",
      "@typescript-eslint/comma-spacing": "off",
      "@typescript-eslint/consistent-type-exports": "error",
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/default-param-last": "error",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/func-call-spacing": "off",
      "@typescript-eslint/indent": "off",
      "@typescript-eslint/key-spacing": "off",
      "@typescript-eslint/keyword-spacing": "off",
      "@typescript-eslint/lines-around-comment": 0,
      "@typescript-eslint/member-delimiter-style": "off",
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
      "@typescript-eslint/no-extra-parens": "off",
      "@typescript-eslint/no-extra-semi": "off",
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
      "@typescript-eslint/object-curly-spacing": "off",
      "@typescript-eslint/prefer-as-const": "error",
      "@typescript-eslint/prefer-enum-initializers": "error",
      "@typescript-eslint/prefer-for-of": "off",
      "@typescript-eslint/prefer-literal-enum-member": "error",
      "@typescript-eslint/prefer-namespace-keyword": "error",
      "@typescript-eslint/prefer-reduce-type-parameter": "error",
      "@typescript-eslint/prefer-return-this-type": "error",
      "@typescript-eslint/quotes": 0,
      "@typescript-eslint/require-array-sort-compare": "error",
      "@typescript-eslint/return-await": "error",
      "@typescript-eslint/semi": "off",
      "@typescript-eslint/space-before-blocks": "off",
      "@typescript-eslint/space-before-function-paren": "off",
      "@typescript-eslint/space-infix-ops": "off",
      "@typescript-eslint/strict-boolean-expressions": "off",
      "@typescript-eslint/switch-exhaustiveness-check": "error",
      "@typescript-eslint/triple-slash-reference": "error",
      "@typescript-eslint/type-annotation-spacing": "off",
      "@typescript-eslint/unified-signatures": "error",
      "@typescript-eslint/use-unknown-in-catch-callback-variable": "error",
      "array-bracket-newline": "off",
      "array-bracket-spacing": "off",
      "array-callback-return": [
        "error",
        {
          "allowImplicit": true
        }
      ],
      "array-element-newline": "off",
      "arrow-body-style": "off",
      "arrow-parens": "off",
      "arrow-spacing": "off",
      "babel/object-curly-spacing": "off",
      "babel/quotes": 0,
      "babel/semi": "off",
      "block-scoped-var": "error",
      "block-spacing": "off",
      "brace-style": "off",
      "camelcase": "off",
      "class-methods-use-this": "off",
      "comma-dangle": "off",
      "comma-spacing": "off",
      "comma-style": "off",
      "computed-property-spacing": "off",
      "consistent-return": "error",
      "constructor-super": "off",
      "curly": 0,
      "default-case": [
        "error",
        {
          "commentPattern": "^no default$"
        }
      ],
      "default-case-last": "error",
      "default-param-last": "off",
      "dot-location": "off",
      "eol-last": "off",
      "eqeqeq": [
        "error",
        "always",
        {
          "null": "ignore"
        }
      ],
      "flowtype/boolean-style": "off",
      "flowtype/delimiter-dangle": "off",
      "flowtype/generic-spacing": "off",
      "flowtype/object-type-curly-spacing": "off",
      "flowtype/object-type-delimiter": "off",
      "flowtype/quotes": "off",
      "flowtype/semi": "off",
      "flowtype/space-after-type-colon": "off",
      "flowtype/space-before-generic-bracket": "off",
      "flowtype/space-before-type-colon": "off",
      "flowtype/union-intersection-spacing": "off",
      "for-direction": "error",
      "func-call-spacing": "off",
      "func-names": "warn",
      "function-call-argument-newline": "off",
      "function-paren-newline": "off",
      "generator-star": "off",
      "generator-star-spacing": "off",
      "getter-return": "off",
      "grouped-accessor-pairs": "error",
      "implicit-arrow-linebreak": "off",
      "import-x/consistent-type-specifier-style": "off",
      "import-x/default": "error",
      "import-x/export": "error",
      "import-x/extensions": [
        "error",
        "ignorePackages",
        {
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
          "ignoreExternal": true
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
      "indent": "off",
      "indent-legacy": "off",
      "jsx-quotes": "off",
      "key-spacing": "off",
      "keyword-spacing": "off",
      "linebreak-style": "off",
      "lines-around-comment": 0,
      "max-classes-per-file": [
        "error",
        1
      ],
      "max-len": 0,
      "max-statements-per-line": "off",
      "multiline-ternary": "off",
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
      "new-parens": "off",
      "newline-per-chained-call": "off",
      "no-alert": "error",
      "no-array-constructor": "off",
      "no-arrow-condition": "off",
      "no-async-promise-executor": "error",
      "no-await-in-loop": "error",
      "no-bitwise": "error",
      "no-caller": "error",
      "no-case-declarations": "error",
      "no-class-assign": "off",
      "no-comma-dangle": "off",
      "no-compare-neg-zero": "error",
      "no-cond-assign": [
        "error",
        "always"
      ],
      "no-confusing-arrow": 0,
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
      "no-extra-parens": "off",
      "no-extra-semi": "off",
      "no-fallthrough": "error",
      "no-floating-decimal": "off",
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
      "no-mixed-operators": 0,
      "no-mixed-spaces-and-tabs": "off",
      "no-multi-assign": [
        "error"
      ],
      "no-multi-spaces": "off",
      "no-multi-str": "error",
      "no-multiple-empty-lines": "off",
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
      "no-reserved-keys": "off",
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
      "no-space-before-semi": "off",
      "no-spaced-func": "off",
      "no-sparse-arrays": "error",
      "no-tabs": 0,
      "no-template-curly-in-string": "error",
      "no-this-before-super": "off",
      "no-throw-literal": "error",
      "no-trailing-spaces": "off",
      "no-undef": "off",
      "no-undef-init": "error",
      "no-underscore-dangle": "off",
      "no-unexpected-multiline": 0,
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
      "no-whitespace-before-property": "off",
      "no-with": "off",
      "no-wrap-func": "off",
      "nonblock-statement-body-position": "off",
      "object-curly-newline": "off",
      "object-curly-spacing": "off",
      "object-property-newline": "off",
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
      "one-var-declaration-per-line": "off",
      "operator-assignment": [
        "error",
        "always"
      ],
      "operator-linebreak": "off",
      "padded-blocks": "off",
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
      "quote-props": "off",
      "quotes": 0,
      "radix": "error",
      "react/jsx-child-element-spacing": "off",
      "react/jsx-closing-bracket-location": "off",
      "react/jsx-closing-tag-location": "off",
      "react/jsx-curly-newline": "off",
      "react/jsx-curly-spacing": "off",
      "react/jsx-equals-spacing": "off",
      "react/jsx-first-prop-new-line": "off",
      "react/jsx-indent": "off",
      "react/jsx-indent-props": "off",
      "react/jsx-max-props-per-line": "off",
      "react/jsx-newline": "off",
      "react/jsx-one-expression-per-line": "off",
      "react/jsx-props-no-multi-spaces": "off",
      "react/jsx-space-before-closing": "off",
      "react/jsx-tag-spacing": "off",
      "react/jsx-wrap-multilines": "off",
      "require-atomic-updates": "error",
      "require-yield": "error",
      "rest-spread-spacing": "off",
      "semi": "off",
      "semi-spacing": "off",
      "semi-style": "off",
      "space-after-function-name": "off",
      "space-after-keywords": "off",
      "space-before-blocks": "off",
      "space-before-function-paren": "off",
      "space-before-function-parentheses": "off",
      "space-before-keywords": "off",
      "space-in-brackets": "off",
      "space-in-parens": "off",
      "space-infix-ops": "off",
      "space-return-throw-case": "off",
      "space-unary-ops": "off",
      "space-unary-word-ops": "off",
      "standard/array-bracket-even-spacing": "off",
      "standard/computed-property-even-spacing": "off",
      "standard/object-curly-even-spacing": "off",
      "switch-colon-spacing": "off",
      "symbol-description": "error",
      "template-curly-spacing": "off",
      "template-tag-spacing": "off",
      "unicode-bom": [
        "error",
        "never"
      ],
      "unicorn/empty-brace-spaces": "off",
      "unicorn/no-nested-ternary": "off",
      "unicorn/number-literal-case": "off",
      "unicorn/template-indent": 0,
      "use-isnan": "error",
      "valid-typeof": [
        "error",
        {
          "requireStringLiterals": true
        }
      ],
      "vue/array-bracket-newline": "off",
      "vue/array-bracket-spacing": "off",
      "vue/array-element-newline": "off",
      "vue/arrow-spacing": "off",
      "vue/block-spacing": "off",
      "vue/block-tag-newline": "off",
      "vue/brace-style": "off",
      "vue/comma-dangle": "off",
      "vue/comma-spacing": "off",
      "vue/comma-style": "off",
      "vue/dot-location": "off",
      "vue/func-call-spacing": "off",
      "vue/html-closing-bracket-newline": "off",
      "vue/html-closing-bracket-spacing": "off",
      "vue/html-end-tags": "off",
      "vue/html-indent": "off",
      "vue/html-quotes": "off",
      "vue/html-self-closing": 0,
      "vue/key-spacing": "off",
      "vue/keyword-spacing": "off",
      "vue/max-attributes-per-line": "off",
      "vue/max-len": 0,
      "vue/multiline-html-element-content-newline": "off",
      "vue/multiline-ternary": "off",
      "vue/mustache-interpolation-spacing": "off",
      "vue/no-extra-parens": "off",
      "vue/no-multi-spaces": "off",
      "vue/no-spaces-around-equal-signs-in-attribute": "off",
      "vue/object-curly-newline": "off",
      "vue/object-curly-spacing": "off",
      "vue/object-property-newline": "off",
      "vue/operator-linebreak": "off",
      "vue/quote-props": "off",
      "vue/script-indent": "off",
      "vue/singleline-html-element-content-newline": "off",
      "vue/space-in-parens": "off",
      "vue/space-infix-ops": "off",
      "vue/space-unary-ops": "off",
      "vue/template-curly-spacing": "off",
      "wrap-iife": "off",
      "wrap-regex": "off",
      "yield-star-spacing": "off",
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
  },
  {
    "files": [
      "**/*.cjs"
    ],
    "languageOptions": {
      "ecmaVersion": "latest",
      "globals": {
        "AbortController": false,
        "AbortSignal": false,
        "AsyncDisposableStack": false,
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
        "DisposableStack": false,
        "ErrorEvent": false,
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
        "Storage": false,
        "SubtleCrypto": false,
        "SuppressedError": false,
        "TextDecoder": false,
        "TextDecoderStream": false,
        "TextEncoder": false,
        "TextEncoderStream": false,
        "TransformStream": false,
        "TransformStreamDefaultController": false,
        "URL": false,
        "URLPattern": false,
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
        "localStorage": false,
        "module": false,
        "navigator": false,
        "performance": false,
        "process": false,
        "queueMicrotask": false,
        "require": false,
        "sessionStorage": false,
        "setImmediate": false,
        "setInterval": false,
        "setTimeout": false,
        "structuredClone": false
      },
      "parser": "@qlik/eslint-config/node-esm-cjs-parser",
      "parserOptions": {
        "warnOnUnsupportedTypeScriptVersion": false
      },
      "sourceType": "commonjs"
    },
    "name": "@qlik/eslint-config/node-esm-cjs",
    "plugins": {
      "@typescript-eslint": "@typescript-eslint-plugin",
      "import-x": "import-x-plugin"
    },
    "rules": {
      "@babel/object-curly-spacing": "off",
      "@babel/semi": "off",
      "@stylistic/array-bracket-newline": "off",
      "@stylistic/array-bracket-spacing": "off",
      "@stylistic/array-element-newline": "off",
      "@stylistic/arrow-parens": "off",
      "@stylistic/arrow-spacing": "off",
      "@stylistic/block-spacing": "off",
      "@stylistic/brace-style": "off",
      "@stylistic/comma-dangle": "off",
      "@stylistic/comma-spacing": "off",
      "@stylistic/comma-style": "off",
      "@stylistic/computed-property-spacing": "off",
      "@stylistic/dot-location": "off",
      "@stylistic/eol-last": "off",
      "@stylistic/func-call-spacing": "off",
      "@stylistic/function-call-argument-newline": "off",
      "@stylistic/function-call-spacing": "off",
      "@stylistic/function-paren-newline": "off",
      "@stylistic/generator-star-spacing": "off",
      "@stylistic/implicit-arrow-linebreak": "off",
      "@stylistic/indent": "off",
      "@stylistic/indent-binary-ops": "off",
      "@stylistic/js/array-bracket-newline": "off",
      "@stylistic/js/array-bracket-spacing": "off",
      "@stylistic/js/array-element-newline": "off",
      "@stylistic/js/arrow-parens": "off",
      "@stylistic/js/arrow-spacing": "off",
      "@stylistic/js/block-spacing": "off",
      "@stylistic/js/brace-style": "off",
      "@stylistic/js/comma-dangle": "off",
      "@stylistic/js/comma-spacing": "off",
      "@stylistic/js/comma-style": "off",
      "@stylistic/js/computed-property-spacing": "off",
      "@stylistic/js/dot-location": "off",
      "@stylistic/js/eol-last": "off",
      "@stylistic/js/func-call-spacing": "off",
      "@stylistic/js/function-call-argument-newline": "off",
      "@stylistic/js/function-call-spacing": "off",
      "@stylistic/js/function-paren-newline": "off",
      "@stylistic/js/generator-star-spacing": "off",
      "@stylistic/js/implicit-arrow-linebreak": "off",
      "@stylistic/js/indent": "off",
      "@stylistic/js/jsx-quotes": "off",
      "@stylistic/js/key-spacing": "off",
      "@stylistic/js/keyword-spacing": "off",
      "@stylistic/js/linebreak-style": "off",
      "@stylistic/js/lines-around-comment": 0,
      "@stylistic/js/max-len": 0,
      "@stylistic/js/max-statements-per-line": "off",
      "@stylistic/js/multiline-ternary": "off",
      "@stylistic/js/new-parens": "off",
      "@stylistic/js/newline-per-chained-call": "off",
      "@stylistic/js/no-confusing-arrow": 0,
      "@stylistic/js/no-extra-parens": "off",
      "@stylistic/js/no-extra-semi": "off",
      "@stylistic/js/no-floating-decimal": "off",
      "@stylistic/js/no-mixed-operators": 0,
      "@stylistic/js/no-mixed-spaces-and-tabs": "off",
      "@stylistic/js/no-multi-spaces": "off",
      "@stylistic/js/no-multiple-empty-lines": "off",
      "@stylistic/js/no-tabs": 0,
      "@stylistic/js/no-trailing-spaces": "off",
      "@stylistic/js/no-whitespace-before-property": "off",
      "@stylistic/js/nonblock-statement-body-position": "off",
      "@stylistic/js/object-curly-newline": "off",
      "@stylistic/js/object-curly-spacing": "off",
      "@stylistic/js/object-property-newline": "off",
      "@stylistic/js/one-var-declaration-per-line": "off",
      "@stylistic/js/operator-linebreak": "off",
      "@stylistic/js/padded-blocks": "off",
      "@stylistic/js/quote-props": "off",
      "@stylistic/js/quotes": 0,
      "@stylistic/js/rest-spread-spacing": "off",
      "@stylistic/js/semi": "off",
      "@stylistic/js/semi-spacing": "off",
      "@stylistic/js/semi-style": "off",
      "@stylistic/js/space-before-blocks": "off",
      "@stylistic/js/space-before-function-paren": "off",
      "@stylistic/js/space-in-parens": "off",
      "@stylistic/js/space-infix-ops": "off",
      "@stylistic/js/space-unary-ops": "off",
      "@stylistic/js/switch-colon-spacing": "off",
      "@stylistic/js/template-curly-spacing": "off",
      "@stylistic/js/template-tag-spacing": "off",
      "@stylistic/js/wrap-iife": "off",
      "@stylistic/js/wrap-regex": "off",
      "@stylistic/js/yield-star-spacing": "off",
      "@stylistic/jsx-child-element-spacing": "off",
      "@stylistic/jsx-closing-bracket-location": "off",
      "@stylistic/jsx-closing-tag-location": "off",
      "@stylistic/jsx-curly-newline": "off",
      "@stylistic/jsx-curly-spacing": "off",
      "@stylistic/jsx-equals-spacing": "off",
      "@stylistic/jsx-first-prop-new-line": "off",
      "@stylistic/jsx-indent": "off",
      "@stylistic/jsx-indent-props": "off",
      "@stylistic/jsx-max-props-per-line": "off",
      "@stylistic/jsx-newline": "off",
      "@stylistic/jsx-one-expression-per-line": "off",
      "@stylistic/jsx-props-no-multi-spaces": "off",
      "@stylistic/jsx-quotes": "off",
      "@stylistic/jsx-tag-spacing": "off",
      "@stylistic/jsx-wrap-multilines": "off",
      "@stylistic/jsx/jsx-child-element-spacing": "off",
      "@stylistic/jsx/jsx-closing-bracket-location": "off",
      "@stylistic/jsx/jsx-closing-tag-location": "off",
      "@stylistic/jsx/jsx-curly-newline": "off",
      "@stylistic/jsx/jsx-curly-spacing": "off",
      "@stylistic/jsx/jsx-equals-spacing": "off",
      "@stylistic/jsx/jsx-first-prop-new-line": "off",
      "@stylistic/jsx/jsx-indent": "off",
      "@stylistic/jsx/jsx-indent-props": "off",
      "@stylistic/jsx/jsx-max-props-per-line": "off",
      "@stylistic/key-spacing": "off",
      "@stylistic/keyword-spacing": "off",
      "@stylistic/linebreak-style": "off",
      "@stylistic/lines-around-comment": 0,
      "@stylistic/max-len": 0,
      "@stylistic/max-statements-per-line": "off",
      "@stylistic/member-delimiter-style": "off",
      "@stylistic/multiline-ternary": "off",
      "@stylistic/new-parens": "off",
      "@stylistic/newline-per-chained-call": "off",
      "@stylistic/no-confusing-arrow": 0,
      "@stylistic/no-extra-parens": "off",
      "@stylistic/no-extra-semi": "off",
      "@stylistic/no-floating-decimal": "off",
      "@stylistic/no-mixed-operators": 0,
      "@stylistic/no-mixed-spaces-and-tabs": "off",
      "@stylistic/no-multi-spaces": "off",
      "@stylistic/no-multiple-empty-lines": "off",
      "@stylistic/no-tabs": 0,
      "@stylistic/no-trailing-spaces": "off",
      "@stylistic/no-whitespace-before-property": "off",
      "@stylistic/nonblock-statement-body-position": "off",
      "@stylistic/object-curly-newline": "off",
      "@stylistic/object-curly-spacing": "off",
      "@stylistic/object-property-newline": "off",
      "@stylistic/one-var-declaration-per-line": "off",
      "@stylistic/operator-linebreak": "off",
      "@stylistic/padded-blocks": "off",
      "@stylistic/quote-props": "off",
      "@stylistic/quotes": 0,
      "@stylistic/rest-spread-spacing": "off",
      "@stylistic/semi": "off",
      "@stylistic/semi-spacing": "off",
      "@stylistic/semi-style": "off",
      "@stylistic/space-before-blocks": "off",
      "@stylistic/space-before-function-paren": "off",
      "@stylistic/space-in-parens": "off",
      "@stylistic/space-infix-ops": "off",
      "@stylistic/space-unary-ops": "off",
      "@stylistic/switch-colon-spacing": "off",
      "@stylistic/template-curly-spacing": "off",
      "@stylistic/template-tag-spacing": "off",
      "@stylistic/ts/block-spacing": "off",
      "@stylistic/ts/brace-style": "off",
      "@stylistic/ts/comma-dangle": "off",
      "@stylistic/ts/comma-spacing": "off",
      "@stylistic/ts/func-call-spacing": "off",
      "@stylistic/ts/function-call-spacing": "off",
      "@stylistic/ts/indent": "off",
      "@stylistic/ts/key-spacing": "off",
      "@stylistic/ts/keyword-spacing": "off",
      "@stylistic/ts/lines-around-comment": 0,
      "@stylistic/ts/member-delimiter-style": "off",
      "@stylistic/ts/no-extra-parens": "off",
      "@stylistic/ts/no-extra-semi": "off",
      "@stylistic/ts/object-curly-spacing": "off",
      "@stylistic/ts/quotes": 0,
      "@stylistic/ts/semi": "off",
      "@stylistic/ts/space-before-blocks": "off",
      "@stylistic/ts/space-before-function-paren": "off",
      "@stylistic/ts/space-infix-ops": "off",
      "@stylistic/ts/type-annotation-spacing": "off",
      "@stylistic/type-annotation-spacing": "off",
      "@stylistic/type-generic-spacing": "off",
      "@stylistic/type-named-tuple-spacing": "off",
      "@stylistic/wrap-iife": "off",
      "@stylistic/wrap-regex": "off",
      "@stylistic/yield-star-spacing": "off",
      "@typescript-eslint/block-spacing": "off",
      "@typescript-eslint/brace-style": "off",
      "@typescript-eslint/comma-dangle": "off",
      "@typescript-eslint/comma-spacing": "off",
      "@typescript-eslint/func-call-spacing": "off",
      "@typescript-eslint/indent": "off",
      "@typescript-eslint/key-spacing": "off",
      "@typescript-eslint/keyword-spacing": "off",
      "@typescript-eslint/lines-around-comment": 0,
      "@typescript-eslint/member-delimiter-style": "off",
      "@typescript-eslint/no-extra-parens": "off",
      "@typescript-eslint/no-extra-semi": "off",
      "@typescript-eslint/object-curly-spacing": "off",
      "@typescript-eslint/quotes": 0,
      "@typescript-eslint/semi": "off",
      "@typescript-eslint/space-before-blocks": "off",
      "@typescript-eslint/space-before-function-paren": "off",
      "@typescript-eslint/space-infix-ops": "off",
      "@typescript-eslint/type-annotation-spacing": "off",
      "array-bracket-newline": "off",
      "array-bracket-spacing": "off",
      "array-callback-return": [
        "error",
        {
          "allowImplicit": true
        }
      ],
      "array-element-newline": "off",
      "arrow-body-style": "off",
      "arrow-parens": "off",
      "arrow-spacing": "off",
      "babel/object-curly-spacing": "off",
      "babel/quotes": 0,
      "babel/semi": "off",
      "block-scoped-var": "error",
      "block-spacing": "off",
      "brace-style": "off",
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
      "comma-dangle": "off",
      "comma-spacing": "off",
      "comma-style": "off",
      "computed-property-spacing": "off",
      "consistent-return": "error",
      "constructor-super": "error",
      "curly": 0,
      "default-case": [
        "error",
        {
          "commentPattern": "^no default$"
        }
      ],
      "default-case-last": "error",
      "default-param-last": "error",
      "dot-location": "off",
      "eol-last": "off",
      "eqeqeq": [
        "error",
        "always",
        {
          "null": "ignore"
        }
      ],
      "flowtype/boolean-style": "off",
      "flowtype/delimiter-dangle": "off",
      "flowtype/generic-spacing": "off",
      "flowtype/object-type-curly-spacing": "off",
      "flowtype/object-type-delimiter": "off",
      "flowtype/quotes": "off",
      "flowtype/semi": "off",
      "flowtype/space-after-type-colon": "off",
      "flowtype/space-before-generic-bracket": "off",
      "flowtype/space-before-type-colon": "off",
      "flowtype/union-intersection-spacing": "off",
      "for-direction": "error",
      "func-call-spacing": "off",
      "func-names": "warn",
      "function-call-argument-newline": "off",
      "function-paren-newline": "off",
      "generator-star": "off",
      "generator-star-spacing": "off",
      "getter-return": [
        "error",
        {
          "allowImplicit": true
        }
      ],
      "grouped-accessor-pairs": "error",
      "implicit-arrow-linebreak": "off",
      "import-x/consistent-type-specifier-style": "off",
      "import-x/default": "error",
      "import-x/export": "error",
      "import-x/extensions": [
        "error",
        "ignorePackages",
        {
          "cjs": "never",
          "cts": "never",
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
          "ignoreExternal": true
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
      "indent": "off",
      "indent-legacy": "off",
      "jsx-quotes": "off",
      "key-spacing": "off",
      "keyword-spacing": "off",
      "linebreak-style": "off",
      "lines-around-comment": 0,
      "max-classes-per-file": [
        "error",
        1
      ],
      "max-len": 0,
      "max-statements-per-line": "off",
      "multiline-ternary": "off",
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
      "new-parens": "off",
      "newline-per-chained-call": "off",
      "no-alert": "error",
      "no-array-constructor": "error",
      "no-arrow-condition": "off",
      "no-async-promise-executor": "error",
      "no-await-in-loop": "error",
      "no-bitwise": "error",
      "no-caller": "error",
      "no-case-declarations": "error",
      "no-class-assign": "error",
      "no-comma-dangle": "off",
      "no-compare-neg-zero": "error",
      "no-cond-assign": [
        "error",
        "always"
      ],
      "no-confusing-arrow": 0,
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
      "no-extra-parens": "off",
      "no-extra-semi": "off",
      "no-fallthrough": "error",
      "no-floating-decimal": "off",
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
      "no-mixed-operators": 0,
      "no-mixed-spaces-and-tabs": "off",
      "no-multi-assign": [
        "error"
      ],
      "no-multi-spaces": "off",
      "no-multi-str": "error",
      "no-multiple-empty-lines": "off",
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
      "no-reserved-keys": "off",
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
      "no-space-before-semi": "off",
      "no-spaced-func": "off",
      "no-sparse-arrays": "error",
      "no-tabs": 0,
      "no-template-curly-in-string": "error",
      "no-this-before-super": "error",
      "no-throw-literal": "error",
      "no-trailing-spaces": "off",
      "no-undef": "error",
      "no-undef-init": "error",
      "no-underscore-dangle": "off",
      "no-unexpected-multiline": 0,
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
      "no-whitespace-before-property": "off",
      "no-with": "error",
      "no-wrap-func": "off",
      "nonblock-statement-body-position": "off",
      "object-curly-newline": "off",
      "object-curly-spacing": "off",
      "object-property-newline": "off",
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
      "one-var-declaration-per-line": "off",
      "operator-assignment": [
        "error",
        "always"
      ],
      "operator-linebreak": "off",
      "padded-blocks": "off",
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
      "quote-props": "off",
      "quotes": 0,
      "radix": "error",
      "react/jsx-child-element-spacing": "off",
      "react/jsx-closing-bracket-location": "off",
      "react/jsx-closing-tag-location": "off",
      "react/jsx-curly-newline": "off",
      "react/jsx-curly-spacing": "off",
      "react/jsx-equals-spacing": "off",
      "react/jsx-first-prop-new-line": "off",
      "react/jsx-indent": "off",
      "react/jsx-indent-props": "off",
      "react/jsx-max-props-per-line": "off",
      "react/jsx-newline": "off",
      "react/jsx-one-expression-per-line": "off",
      "react/jsx-props-no-multi-spaces": "off",
      "react/jsx-space-before-closing": "off",
      "react/jsx-tag-spacing": "off",
      "react/jsx-wrap-multilines": "off",
      "require-atomic-updates": "error",
      "require-yield": "error",
      "rest-spread-spacing": "off",
      "semi": "off",
      "semi-spacing": "off",
      "semi-style": "off",
      "space-after-function-name": "off",
      "space-after-keywords": "off",
      "space-before-blocks": "off",
      "space-before-function-paren": "off",
      "space-before-function-parentheses": "off",
      "space-before-keywords": "off",
      "space-in-brackets": "off",
      "space-in-parens": "off",
      "space-infix-ops": "off",
      "space-return-throw-case": "off",
      "space-unary-ops": "off",
      "space-unary-word-ops": "off",
      "standard/array-bracket-even-spacing": "off",
      "standard/computed-property-even-spacing": "off",
      "standard/object-curly-even-spacing": "off",
      "switch-colon-spacing": "off",
      "symbol-description": "error",
      "template-curly-spacing": "off",
      "template-tag-spacing": "off",
      "unicode-bom": [
        "error",
        "never"
      ],
      "unicorn/empty-brace-spaces": "off",
      "unicorn/no-nested-ternary": "off",
      "unicorn/number-literal-case": "off",
      "unicorn/template-indent": 0,
      "use-isnan": "error",
      "valid-typeof": [
        "error",
        {
          "requireStringLiterals": true
        }
      ],
      "vue/array-bracket-newline": "off",
      "vue/array-bracket-spacing": "off",
      "vue/array-element-newline": "off",
      "vue/arrow-spacing": "off",
      "vue/block-spacing": "off",
      "vue/block-tag-newline": "off",
      "vue/brace-style": "off",
      "vue/comma-dangle": "off",
      "vue/comma-spacing": "off",
      "vue/comma-style": "off",
      "vue/dot-location": "off",
      "vue/func-call-spacing": "off",
      "vue/html-closing-bracket-newline": "off",
      "vue/html-closing-bracket-spacing": "off",
      "vue/html-end-tags": "off",
      "vue/html-indent": "off",
      "vue/html-quotes": "off",
      "vue/html-self-closing": 0,
      "vue/key-spacing": "off",
      "vue/keyword-spacing": "off",
      "vue/max-attributes-per-line": "off",
      "vue/max-len": 0,
      "vue/multiline-html-element-content-newline": "off",
      "vue/multiline-ternary": "off",
      "vue/mustache-interpolation-spacing": "off",
      "vue/no-extra-parens": "off",
      "vue/no-multi-spaces": "off",
      "vue/no-spaces-around-equal-signs-in-attribute": "off",
      "vue/object-curly-newline": "off",
      "vue/object-curly-spacing": "off",
      "vue/object-property-newline": "off",
      "vue/operator-linebreak": "off",
      "vue/quote-props": "off",
      "vue/script-indent": "off",
      "vue/singleline-html-element-content-newline": "off",
      "vue/space-in-parens": "off",
      "vue/space-infix-ops": "off",
      "vue/space-unary-ops": "off",
      "vue/template-curly-spacing": "off",
      "wrap-iife": "off",
      "wrap-regex": "off",
      "yield-star-spacing": "off",
      "yoda": "error"
    }
  },
  {
    "files": [
      "**/*.cts"
    ],
    "languageOptions": {
      "ecmaVersion": "latest",
      "globals": {
        "AbortController": false,
        "AbortSignal": false,
        "AsyncDisposableStack": false,
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
        "DisposableStack": false,
        "ErrorEvent": false,
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
        "Storage": false,
        "SubtleCrypto": false,
        "SuppressedError": false,
        "TextDecoder": false,
        "TextDecoderStream": false,
        "TextEncoder": false,
        "TextEncoderStream": false,
        "TransformStream": false,
        "TransformStreamDefaultController": false,
        "URL": false,
        "URLPattern": false,
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
        "localStorage": false,
        "module": false,
        "navigator": false,
        "performance": false,
        "process": false,
        "queueMicrotask": false,
        "require": false,
        "sessionStorage": false,
        "setImmediate": false,
        "setInterval": false,
        "setTimeout": false,
        "structuredClone": false
      },
      "parser": "@qlik/eslint-config/node-esm-cts-parser",
      "parserOptions": {
        "parser": {
          "meta": {
            "name": "typescript-eslint/parser",
            "version": "8.53.0"
          },
          "version": "8.53.0"
        },
        "projectService": true,
        "warnOnUnsupportedTypeScriptVersion": false
      },
      "sourceType": "commonjs"
    },
    "name": "@qlik/eslint-config/node-esm-cts",
    "plugins": {
      "@typescript-eslint": "@typescript-eslint-plugin",
      "import-x": "import-x-plugin"
    },
    "rules": {
      "@babel/object-curly-spacing": "off",
      "@babel/semi": "off",
      "@stylistic/array-bracket-newline": "off",
      "@stylistic/array-bracket-spacing": "off",
      "@stylistic/array-element-newline": "off",
      "@stylistic/arrow-parens": "off",
      "@stylistic/arrow-spacing": "off",
      "@stylistic/block-spacing": "off",
      "@stylistic/brace-style": "off",
      "@stylistic/comma-dangle": "off",
      "@stylistic/comma-spacing": "off",
      "@stylistic/comma-style": "off",
      "@stylistic/computed-property-spacing": "off",
      "@stylistic/dot-location": "off",
      "@stylistic/eol-last": "off",
      "@stylistic/func-call-spacing": "off",
      "@stylistic/function-call-argument-newline": "off",
      "@stylistic/function-call-spacing": "off",
      "@stylistic/function-paren-newline": "off",
      "@stylistic/generator-star-spacing": "off",
      "@stylistic/implicit-arrow-linebreak": "off",
      "@stylistic/indent": "off",
      "@stylistic/indent-binary-ops": "off",
      "@stylistic/js/array-bracket-newline": "off",
      "@stylistic/js/array-bracket-spacing": "off",
      "@stylistic/js/array-element-newline": "off",
      "@stylistic/js/arrow-parens": "off",
      "@stylistic/js/arrow-spacing": "off",
      "@stylistic/js/block-spacing": "off",
      "@stylistic/js/brace-style": "off",
      "@stylistic/js/comma-dangle": "off",
      "@stylistic/js/comma-spacing": "off",
      "@stylistic/js/comma-style": "off",
      "@stylistic/js/computed-property-spacing": "off",
      "@stylistic/js/dot-location": "off",
      "@stylistic/js/eol-last": "off",
      "@stylistic/js/func-call-spacing": "off",
      "@stylistic/js/function-call-argument-newline": "off",
      "@stylistic/js/function-call-spacing": "off",
      "@stylistic/js/function-paren-newline": "off",
      "@stylistic/js/generator-star-spacing": "off",
      "@stylistic/js/implicit-arrow-linebreak": "off",
      "@stylistic/js/indent": "off",
      "@stylistic/js/jsx-quotes": "off",
      "@stylistic/js/key-spacing": "off",
      "@stylistic/js/keyword-spacing": "off",
      "@stylistic/js/linebreak-style": "off",
      "@stylistic/js/lines-around-comment": 0,
      "@stylistic/js/max-len": 0,
      "@stylistic/js/max-statements-per-line": "off",
      "@stylistic/js/multiline-ternary": "off",
      "@stylistic/js/new-parens": "off",
      "@stylistic/js/newline-per-chained-call": "off",
      "@stylistic/js/no-confusing-arrow": 0,
      "@stylistic/js/no-extra-parens": "off",
      "@stylistic/js/no-extra-semi": "off",
      "@stylistic/js/no-floating-decimal": "off",
      "@stylistic/js/no-mixed-operators": 0,
      "@stylistic/js/no-mixed-spaces-and-tabs": "off",
      "@stylistic/js/no-multi-spaces": "off",
      "@stylistic/js/no-multiple-empty-lines": "off",
      "@stylistic/js/no-tabs": 0,
      "@stylistic/js/no-trailing-spaces": "off",
      "@stylistic/js/no-whitespace-before-property": "off",
      "@stylistic/js/nonblock-statement-body-position": "off",
      "@stylistic/js/object-curly-newline": "off",
      "@stylistic/js/object-curly-spacing": "off",
      "@stylistic/js/object-property-newline": "off",
      "@stylistic/js/one-var-declaration-per-line": "off",
      "@stylistic/js/operator-linebreak": "off",
      "@stylistic/js/padded-blocks": "off",
      "@stylistic/js/quote-props": "off",
      "@stylistic/js/quotes": 0,
      "@stylistic/js/rest-spread-spacing": "off",
      "@stylistic/js/semi": "off",
      "@stylistic/js/semi-spacing": "off",
      "@stylistic/js/semi-style": "off",
      "@stylistic/js/space-before-blocks": "off",
      "@stylistic/js/space-before-function-paren": "off",
      "@stylistic/js/space-in-parens": "off",
      "@stylistic/js/space-infix-ops": "off",
      "@stylistic/js/space-unary-ops": "off",
      "@stylistic/js/switch-colon-spacing": "off",
      "@stylistic/js/template-curly-spacing": "off",
      "@stylistic/js/template-tag-spacing": "off",
      "@stylistic/js/wrap-iife": "off",
      "@stylistic/js/wrap-regex": "off",
      "@stylistic/js/yield-star-spacing": "off",
      "@stylistic/jsx-child-element-spacing": "off",
      "@stylistic/jsx-closing-bracket-location": "off",
      "@stylistic/jsx-closing-tag-location": "off",
      "@stylistic/jsx-curly-newline": "off",
      "@stylistic/jsx-curly-spacing": "off",
      "@stylistic/jsx-equals-spacing": "off",
      "@stylistic/jsx-first-prop-new-line": "off",
      "@stylistic/jsx-indent": "off",
      "@stylistic/jsx-indent-props": "off",
      "@stylistic/jsx-max-props-per-line": "off",
      "@stylistic/jsx-newline": "off",
      "@stylistic/jsx-one-expression-per-line": "off",
      "@stylistic/jsx-props-no-multi-spaces": "off",
      "@stylistic/jsx-quotes": "off",
      "@stylistic/jsx-tag-spacing": "off",
      "@stylistic/jsx-wrap-multilines": "off",
      "@stylistic/jsx/jsx-child-element-spacing": "off",
      "@stylistic/jsx/jsx-closing-bracket-location": "off",
      "@stylistic/jsx/jsx-closing-tag-location": "off",
      "@stylistic/jsx/jsx-curly-newline": "off",
      "@stylistic/jsx/jsx-curly-spacing": "off",
      "@stylistic/jsx/jsx-equals-spacing": "off",
      "@stylistic/jsx/jsx-first-prop-new-line": "off",
      "@stylistic/jsx/jsx-indent": "off",
      "@stylistic/jsx/jsx-indent-props": "off",
      "@stylistic/jsx/jsx-max-props-per-line": "off",
      "@stylistic/key-spacing": "off",
      "@stylistic/keyword-spacing": "off",
      "@stylistic/linebreak-style": "off",
      "@stylistic/lines-around-comment": 0,
      "@stylistic/max-len": 0,
      "@stylistic/max-statements-per-line": "off",
      "@stylistic/member-delimiter-style": "off",
      "@stylistic/multiline-ternary": "off",
      "@stylistic/new-parens": "off",
      "@stylistic/newline-per-chained-call": "off",
      "@stylistic/no-confusing-arrow": 0,
      "@stylistic/no-extra-parens": "off",
      "@stylistic/no-extra-semi": "off",
      "@stylistic/no-floating-decimal": "off",
      "@stylistic/no-mixed-operators": 0,
      "@stylistic/no-mixed-spaces-and-tabs": "off",
      "@stylistic/no-multi-spaces": "off",
      "@stylistic/no-multiple-empty-lines": "off",
      "@stylistic/no-tabs": 0,
      "@stylistic/no-trailing-spaces": "off",
      "@stylistic/no-whitespace-before-property": "off",
      "@stylistic/nonblock-statement-body-position": "off",
      "@stylistic/object-curly-newline": "off",
      "@stylistic/object-curly-spacing": "off",
      "@stylistic/object-property-newline": "off",
      "@stylistic/one-var-declaration-per-line": "off",
      "@stylistic/operator-linebreak": "off",
      "@stylistic/padded-blocks": "off",
      "@stylistic/quote-props": "off",
      "@stylistic/quotes": 0,
      "@stylistic/rest-spread-spacing": "off",
      "@stylistic/semi": "off",
      "@stylistic/semi-spacing": "off",
      "@stylistic/semi-style": "off",
      "@stylistic/space-before-blocks": "off",
      "@stylistic/space-before-function-paren": "off",
      "@stylistic/space-in-parens": "off",
      "@stylistic/space-infix-ops": "off",
      "@stylistic/space-unary-ops": "off",
      "@stylistic/switch-colon-spacing": "off",
      "@stylistic/template-curly-spacing": "off",
      "@stylistic/template-tag-spacing": "off",
      "@stylistic/ts/block-spacing": "off",
      "@stylistic/ts/brace-style": "off",
      "@stylistic/ts/comma-dangle": "off",
      "@stylistic/ts/comma-spacing": "off",
      "@stylistic/ts/func-call-spacing": "off",
      "@stylistic/ts/function-call-spacing": "off",
      "@stylistic/ts/indent": "off",
      "@stylistic/ts/key-spacing": "off",
      "@stylistic/ts/keyword-spacing": "off",
      "@stylistic/ts/lines-around-comment": 0,
      "@stylistic/ts/member-delimiter-style": "off",
      "@stylistic/ts/no-extra-parens": "off",
      "@stylistic/ts/no-extra-semi": "off",
      "@stylistic/ts/object-curly-spacing": "off",
      "@stylistic/ts/quotes": 0,
      "@stylistic/ts/semi": "off",
      "@stylistic/ts/space-before-blocks": "off",
      "@stylistic/ts/space-before-function-paren": "off",
      "@stylistic/ts/space-infix-ops": "off",
      "@stylistic/ts/type-annotation-spacing": "off",
      "@stylistic/type-annotation-spacing": "off",
      "@stylistic/type-generic-spacing": "off",
      "@stylistic/type-named-tuple-spacing": "off",
      "@stylistic/wrap-iife": "off",
      "@stylistic/wrap-regex": "off",
      "@stylistic/yield-star-spacing": "off",
      "@typescript-eslint/ban-ts-comment": "error",
      "@typescript-eslint/block-spacing": "off",
      "@typescript-eslint/brace-style": "off",
      "@typescript-eslint/class-methods-use-this": [
        "warn",
        {
          "exceptMethods": []
        }
      ],
      "@typescript-eslint/comma-dangle": "off",
      "@typescript-eslint/comma-spacing": "off",
      "@typescript-eslint/consistent-type-exports": "error",
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/default-param-last": "error",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/func-call-spacing": "off",
      "@typescript-eslint/indent": "off",
      "@typescript-eslint/key-spacing": "off",
      "@typescript-eslint/keyword-spacing": "off",
      "@typescript-eslint/lines-around-comment": 0,
      "@typescript-eslint/member-delimiter-style": "off",
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
      "@typescript-eslint/no-extra-parens": "off",
      "@typescript-eslint/no-extra-semi": "off",
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
      "@typescript-eslint/object-curly-spacing": "off",
      "@typescript-eslint/prefer-as-const": "error",
      "@typescript-eslint/prefer-enum-initializers": "error",
      "@typescript-eslint/prefer-for-of": "off",
      "@typescript-eslint/prefer-literal-enum-member": "error",
      "@typescript-eslint/prefer-namespace-keyword": "error",
      "@typescript-eslint/prefer-reduce-type-parameter": "error",
      "@typescript-eslint/prefer-return-this-type": "error",
      "@typescript-eslint/quotes": 0,
      "@typescript-eslint/require-array-sort-compare": "error",
      "@typescript-eslint/return-await": "error",
      "@typescript-eslint/semi": "off",
      "@typescript-eslint/space-before-blocks": "off",
      "@typescript-eslint/space-before-function-paren": "off",
      "@typescript-eslint/space-infix-ops": "off",
      "@typescript-eslint/strict-boolean-expressions": "off",
      "@typescript-eslint/switch-exhaustiveness-check": "error",
      "@typescript-eslint/triple-slash-reference": "error",
      "@typescript-eslint/type-annotation-spacing": "off",
      "@typescript-eslint/unified-signatures": "error",
      "@typescript-eslint/use-unknown-in-catch-callback-variable": "error",
      "array-bracket-newline": "off",
      "array-bracket-spacing": "off",
      "array-callback-return": [
        "error",
        {
          "allowImplicit": true
        }
      ],
      "array-element-newline": "off",
      "arrow-body-style": "off",
      "arrow-parens": "off",
      "arrow-spacing": "off",
      "babel/object-curly-spacing": "off",
      "babel/quotes": 0,
      "babel/semi": "off",
      "block-scoped-var": "error",
      "block-spacing": "off",
      "brace-style": "off",
      "camelcase": "off",
      "class-methods-use-this": "off",
      "comma-dangle": "off",
      "comma-spacing": "off",
      "comma-style": "off",
      "computed-property-spacing": "off",
      "consistent-return": "error",
      "constructor-super": "off",
      "curly": 0,
      "default-case": [
        "error",
        {
          "commentPattern": "^no default$"
        }
      ],
      "default-case-last": "error",
      "default-param-last": "off",
      "dot-location": "off",
      "eol-last": "off",
      "eqeqeq": [
        "error",
        "always",
        {
          "null": "ignore"
        }
      ],
      "flowtype/boolean-style": "off",
      "flowtype/delimiter-dangle": "off",
      "flowtype/generic-spacing": "off",
      "flowtype/object-type-curly-spacing": "off",
      "flowtype/object-type-delimiter": "off",
      "flowtype/quotes": "off",
      "flowtype/semi": "off",
      "flowtype/space-after-type-colon": "off",
      "flowtype/space-before-generic-bracket": "off",
      "flowtype/space-before-type-colon": "off",
      "flowtype/union-intersection-spacing": "off",
      "for-direction": "error",
      "func-call-spacing": "off",
      "func-names": "warn",
      "function-call-argument-newline": "off",
      "function-paren-newline": "off",
      "generator-star": "off",
      "generator-star-spacing": "off",
      "getter-return": "off",
      "grouped-accessor-pairs": "error",
      "implicit-arrow-linebreak": "off",
      "import-x/consistent-type-specifier-style": "off",
      "import-x/default": "error",
      "import-x/export": "error",
      "import-x/extensions": [
        "error",
        "ignorePackages",
        {
          "cjs": "never",
          "cts": "never",
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
          "ignoreExternal": true
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
      "indent": "off",
      "indent-legacy": "off",
      "jsx-quotes": "off",
      "key-spacing": "off",
      "keyword-spacing": "off",
      "linebreak-style": "off",
      "lines-around-comment": 0,
      "max-classes-per-file": [
        "error",
        1
      ],
      "max-len": 0,
      "max-statements-per-line": "off",
      "multiline-ternary": "off",
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
      "new-parens": "off",
      "newline-per-chained-call": "off",
      "no-alert": "error",
      "no-array-constructor": "off",
      "no-arrow-condition": "off",
      "no-async-promise-executor": "error",
      "no-await-in-loop": "error",
      "no-bitwise": "error",
      "no-caller": "error",
      "no-case-declarations": "error",
      "no-class-assign": "off",
      "no-comma-dangle": "off",
      "no-compare-neg-zero": "error",
      "no-cond-assign": [
        "error",
        "always"
      ],
      "no-confusing-arrow": 0,
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
      "no-extra-parens": "off",
      "no-extra-semi": "off",
      "no-fallthrough": "error",
      "no-floating-decimal": "off",
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
      "no-mixed-operators": 0,
      "no-mixed-spaces-and-tabs": "off",
      "no-multi-assign": [
        "error"
      ],
      "no-multi-spaces": "off",
      "no-multi-str": "error",
      "no-multiple-empty-lines": "off",
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
      "no-reserved-keys": "off",
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
      "no-space-before-semi": "off",
      "no-spaced-func": "off",
      "no-sparse-arrays": "error",
      "no-tabs": 0,
      "no-template-curly-in-string": "error",
      "no-this-before-super": "off",
      "no-throw-literal": "error",
      "no-trailing-spaces": "off",
      "no-undef": "off",
      "no-undef-init": "error",
      "no-underscore-dangle": "off",
      "no-unexpected-multiline": 0,
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
      "no-whitespace-before-property": "off",
      "no-with": "off",
      "no-wrap-func": "off",
      "nonblock-statement-body-position": "off",
      "object-curly-newline": "off",
      "object-curly-spacing": "off",
      "object-property-newline": "off",
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
      "one-var-declaration-per-line": "off",
      "operator-assignment": [
        "error",
        "always"
      ],
      "operator-linebreak": "off",
      "padded-blocks": "off",
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
      "quote-props": "off",
      "quotes": 0,
      "radix": "error",
      "react/jsx-child-element-spacing": "off",
      "react/jsx-closing-bracket-location": "off",
      "react/jsx-closing-tag-location": "off",
      "react/jsx-curly-newline": "off",
      "react/jsx-curly-spacing": "off",
      "react/jsx-equals-spacing": "off",
      "react/jsx-first-prop-new-line": "off",
      "react/jsx-indent": "off",
      "react/jsx-indent-props": "off",
      "react/jsx-max-props-per-line": "off",
      "react/jsx-newline": "off",
      "react/jsx-one-expression-per-line": "off",
      "react/jsx-props-no-multi-spaces": "off",
      "react/jsx-space-before-closing": "off",
      "react/jsx-tag-spacing": "off",
      "react/jsx-wrap-multilines": "off",
      "require-atomic-updates": "error",
      "require-yield": "error",
      "rest-spread-spacing": "off",
      "semi": "off",
      "semi-spacing": "off",
      "semi-style": "off",
      "space-after-function-name": "off",
      "space-after-keywords": "off",
      "space-before-blocks": "off",
      "space-before-function-paren": "off",
      "space-before-function-parentheses": "off",
      "space-before-keywords": "off",
      "space-in-brackets": "off",
      "space-in-parens": "off",
      "space-infix-ops": "off",
      "space-return-throw-case": "off",
      "space-unary-ops": "off",
      "space-unary-word-ops": "off",
      "standard/array-bracket-even-spacing": "off",
      "standard/computed-property-even-spacing": "off",
      "standard/object-curly-even-spacing": "off",
      "switch-colon-spacing": "off",
      "symbol-description": "error",
      "template-curly-spacing": "off",
      "template-tag-spacing": "off",
      "unicode-bom": [
        "error",
        "never"
      ],
      "unicorn/empty-brace-spaces": "off",
      "unicorn/no-nested-ternary": "off",
      "unicorn/number-literal-case": "off",
      "unicorn/template-indent": 0,
      "use-isnan": "error",
      "valid-typeof": [
        "error",
        {
          "requireStringLiterals": true
        }
      ],
      "vue/array-bracket-newline": "off",
      "vue/array-bracket-spacing": "off",
      "vue/array-element-newline": "off",
      "vue/arrow-spacing": "off",
      "vue/block-spacing": "off",
      "vue/block-tag-newline": "off",
      "vue/brace-style": "off",
      "vue/comma-dangle": "off",
      "vue/comma-spacing": "off",
      "vue/comma-style": "off",
      "vue/dot-location": "off",
      "vue/func-call-spacing": "off",
      "vue/html-closing-bracket-newline": "off",
      "vue/html-closing-bracket-spacing": "off",
      "vue/html-end-tags": "off",
      "vue/html-indent": "off",
      "vue/html-quotes": "off",
      "vue/html-self-closing": 0,
      "vue/key-spacing": "off",
      "vue/keyword-spacing": "off",
      "vue/max-attributes-per-line": "off",
      "vue/max-len": 0,
      "vue/multiline-html-element-content-newline": "off",
      "vue/multiline-ternary": "off",
      "vue/mustache-interpolation-spacing": "off",
      "vue/no-extra-parens": "off",
      "vue/no-multi-spaces": "off",
      "vue/no-spaces-around-equal-signs-in-attribute": "off",
      "vue/object-curly-newline": "off",
      "vue/object-curly-spacing": "off",
      "vue/object-property-newline": "off",
      "vue/operator-linebreak": "off",
      "vue/quote-props": "off",
      "vue/script-indent": "off",
      "vue/singleline-html-element-content-newline": "off",
      "vue/space-in-parens": "off",
      "vue/space-infix-ops": "off",
      "vue/space-unary-ops": "off",
      "vue/template-curly-spacing": "off",
      "wrap-iife": "off",
      "wrap-regex": "off",
      "yield-star-spacing": "off",
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