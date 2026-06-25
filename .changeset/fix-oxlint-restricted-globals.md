---
"@qlik/oxlint-config": patch
---

Stop restricting confusing browser globals in the oxlint preset to avoid false positives on shadowed callback parameters with oxlint 1.71.0, and port the ESLint preset's restricted global-property list.
