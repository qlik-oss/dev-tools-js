---
"@qlik/eslint-config": patch
---

disable the `no-void` rule in the base configuration. This rule is not relevant for es2015+ code and it is incompatible with `@typescript-eslint/no-floating-promises` where you can use the void operator to make an intentional floating-promise.
