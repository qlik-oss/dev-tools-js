/* eslint-disable no-console */
import mod from "~/subfolder/submodule";
import otherMod from "./normal/submodule";

mod();
otherMod();

const obj = {
  one: "one",
  two: 2,
};

const { one } = obj;

let two;
if (one === "one") {
  two = obj.two;
}

console.log(one, two);

// IIFE functions is ok for no-floating-promises
(async function returnsPromise() {
  return "value";
})();

// prefer-destructuring
const { one: renamed } = obj;
console.log(renamed);
const renamed2 = obj.one;
console.log(renamed2);
