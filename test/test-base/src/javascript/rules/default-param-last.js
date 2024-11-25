// eslint-disable-next-line default-param-last
function f(a = 0, b) {
  return a + b;
}

// eslint-disable-next-line default-param-last
function g(a, b = 0, c) {
  return a + b + c;
}

f(2, 1);
g(2, 1);
