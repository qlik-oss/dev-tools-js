# @qlik/browserslist-config

A [browserslist](https://github.com/browserslist/browserslist) config we can use across the org.

## Installation and usage

```sh
npm install -D @qlik/browserslist-config
# or
yarn add -D @qlik/browserslist-config
```

Then use it in your `package.json`

```json
"browserslist": [
  "extends @qlik/browserslist-config"
]
```

### Analyze your Browserslist Config

```sh
npx browserslist
```

### Webpack

When your project has a browserslist config, then webpack will use it. Read more [here](https://webpack.js.org/configuration/target/#browserslist).

### Outcome

When a user hits code using incompatible browsers, the code will break and a console error saying it threw an exception and a stack of the error can be found.

### Consideration

you can detect supported browsers on client-side by applying [browserslist-useragent-regexp](https://github.com/browserslist/browserslist-useragent-regexp) and show user friendly information accordingly.

```js
import supportedBrowsers from "./supportedBrowsers.js";

if (!supportedBrowsers.test(navigator.userAgent)) {
  // alert("Your browser is not supported.");
}
```
