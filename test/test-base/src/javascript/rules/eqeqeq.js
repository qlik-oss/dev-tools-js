const x = 10;

// eslint-disable-next-line eqeqeq
if (x == 42) {
  console.log("Hello");
}

const text = "Hello";
// eslint-disable-next-line no-shadow-restricted-names
const undefined = "World";

// eslint-disable-next-line eqeqeq
if (text == "") {
  console.log("World");
}

const obj = {
  stuff: "Hello",
  getStuff() {
    return this.stuff;
  },
};

// eslint-disable-next-line eqeqeq
if (obj.getStuff() != undefined) {
  console.log("World");
}

const foo = undefined;

if (foo === null) {
  console.log("Hello");
}
