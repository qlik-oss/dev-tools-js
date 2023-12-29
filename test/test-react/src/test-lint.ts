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

// IIFE functions is ok for no-floating-promises
(async function returnsPromise() {
  return "value";
})();
