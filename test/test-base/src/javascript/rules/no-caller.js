/* eslint-disable no-unused-vars */

function foo(n) {
  if (n <= 0) {
    return;
  }

  // eslint-disable-next-line no-caller
  arguments.callee(n - 1);
}

[1, 2, 3, 4, 5].map(function (n) {
  // eslint-disable-next-line no-caller
  return !(n > 1) ? 1 : arguments.callee(n - 1) * n;
});
