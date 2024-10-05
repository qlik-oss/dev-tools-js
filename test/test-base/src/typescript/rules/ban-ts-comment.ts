/* eslint-disable @typescript-eslint/prefer-ts-expect-error */
/* eslint-disable no-var */
// incorrect

const something = false;

if (typeof something === "boolean") {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore: Unreachable code error
  console.log("hello");
}
if (typeof something === "boolean") {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  /* @ts-ignore: Unreachable code error */
  console.log("hello");
}

type FooType = {
  bar: string;
};

// correct

// Compiler warns about unreachable code error
// @ts-expect-error I know about this
var foo: FooType = {};

console.log(foo);

export {};
