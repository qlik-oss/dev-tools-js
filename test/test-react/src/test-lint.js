const parsed = { HEY: "HO" };
const envKeys = parsed
  ? Object.keys(parsed).reduce((prev, next) => {
      prev[`process.env.${next}`] = JSON.stringify(parsed[next]);
      return prev;
    }, {})
  : {};

console.log(envKeys); // eslint-disable-line no-console
