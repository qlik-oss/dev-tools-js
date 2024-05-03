---
"@qlik/browserslist-config": major
---

# Breaking Change

Supported browsers for iOS and Safari has been updated to reflect the official documented support [here](https://help.qlik.com/en-US/sense-admin/February2024/Subsystems/DeployAdministerQSE/Content/Sense_DeployAdminister/Common/supported-browsers.htm)

## What's changed

```js
"last 3 Safari versions",
"iOS >= 13.0",
```

is now

```js
"last 3 Safari major versions",
"last 3 iOS major versions",
```

## Migration path

Nothing needs to be done. Just be aware of that the change might affect bundled output.
