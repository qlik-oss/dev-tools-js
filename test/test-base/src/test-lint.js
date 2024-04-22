const parsed = { HEY: "HO" };
const envKeys = parsed
  ? Object.keys(parsed).reduce((prev, next) => {
      prev[`process.env.${next}`] = JSON.stringify(parsed[next]);
      return prev;
    }, {})
  : {};

console.log(envKeys); // eslint-disable-line no-console

const obj = {
  one: "one",
  two: 2,
};

const { one } = obj;

let two;
if (one === "one") {
  two = obj.two;
}

console.log(one, two); // eslint-disable-line no-console

async function returnsPromise() {
  return "value";
}

returnsPromise();
