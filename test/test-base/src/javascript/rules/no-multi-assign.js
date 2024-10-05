/* eslint-disable no-unused-vars */
/* eslint-disable block-scoped-var */
/* eslint-disable prefer-const */
/* eslint-disable no-var */

{
  // eslint-disable-next-line no-multi-assign
  let a = (b = c = 5);

  // eslint-disable-next-line no-multi-assign
  const foo = (bar = "baz");

  // eslint-disable-next-line no-multi-assign
  let d = (e = f);

  class Foo {
    // eslint-disable-next-line no-multi-assign
    a = (b = 10);
  }

  // eslint-disable-next-line no-multi-assign
  a = b = "quux";
}

// correct code
{
  var a = 5;
  var b = 5;
  var c = 5;

  const foo = "baz";
  const bar = "baz";

  let d = c;
  let e = c;

  class Foo {
    a = 10;
    b = 10;
  }

  a = "quux";
  b = "quux";
}
