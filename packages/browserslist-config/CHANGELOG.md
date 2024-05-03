# @qlik/browserslist-config

## 3.0.0

### Major Changes

- 61172c7: # Breaking Change

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

## 2.0.0

### Major Changes

- b88d7a1: Make it 2.0 so that it continues from qlik's internal browserslist package versioning. There is actually no breaking change. Just syncing the versions between Qlik's internal browserslist package and this one.

## 0.0.2

### Patch Changes

- cdc7b6f: update README
