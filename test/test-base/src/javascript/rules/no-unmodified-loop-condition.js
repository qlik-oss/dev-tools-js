/* eslint-disable no-unmodified-loop-condition */
/* eslint-disable no-var */

let node = "something";

while (node) {
  doSomething(node);
}
node = other;

for (let j = 0; j < 5; j++) {
  doSomething(j);
}

while (node !== root) {
  doSomething(node);
}

// correct

while (node) {
  doSomething(node);
  node = node.parent;
}

for (var j = 0; j < items.length; ++j) {
  doSomething(items[j]);
}

// OK, the result of this binary expression is changed in this loop.
while (node !== root) {
  doSomething(node);
  node = node.parent;
}

// OK, the result of this ternary expression is changed in this loop.
while (node ? A : B) {
  doSomething(node);
  node = node.parent;
}

// A property might be a getter which has side effect...
// Or "doSomething" can modify "obj.foo".
while (obj.foo) {
  doSomething(obj);
}

// A function call can return various values.
while (check(obj)) {
  doSomething(obj);
}
