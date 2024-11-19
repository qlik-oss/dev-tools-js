// incorrect

// eslint-disable-next-line func-names
const foo = function () {
  console.log("foo");
};
foo();

// ok
const baz = () => {
  console.log("baz");
};
baz();
