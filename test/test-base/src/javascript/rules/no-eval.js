/* eslint-disable no-unused-vars */

const obj = { x: "foo" };
const key = "x";

// eslint-disable-next-line no-eval
const value = eval(`obj.${key}`);

// eslint-disable-next-line no-eval
(0, eval)("var a = 0");

// eslint-disable-next-line no-eval
const foo = eval;
foo("var a = 0");

// This `this` is the global object.
this.eval("var a = 0");
