/* eslint-disable no-continue */
/* eslint-disable no-unmodified-loop-condition */
/* eslint-disable no-else-return */
// incorrect code

function doSomething(foo) {
  console.log(foo);
}

let foo = true;

// eslint-disable-next-line no-unreachable-loop
while (foo) {
  doSomething(foo);
  foo = foo.parent;
  break;
}

function verify(item) {
  if (item) {
    return true;
  } else {
    return false;
  }
}

function verifyList(head) {
  const item = head;
  // eslint-disable-next-line no-unreachable-loop
  do {
    if (verify(item)) {
      return true;
    } else {
      return false;
    }
  } while (item);
}

verifyList("head");

function isSomething(item) {
  if (item) {
    return true;
  } else {
    return false;
  }
}

function findSomething(arr) {
  // eslint-disable-next-line no-unreachable-loop
  for (let i = 0; i < arr.length; i++) {
    if (isSomething(arr[i])) {
      return arr[i];
    } else {
      throw new Error("Doesn't exist.");
    }
  }
  return 0;
}

findSomething([]);

const obj = {};
const bar = {};
let firstKey, firstValue;
const id = 1;

// eslint-disable-next-line no-unreachable-loop
for (const key in obj) {
  if (key.startsWith("_")) {
    break;
  }
  firstKey = key;
  firstValue = obj[key];
  break;
}

// eslint-disable-next-line no-unreachable-loop
for (foo of bar) {
  if (foo.id === id) {
    doSomething(foo);
  }
  break;
}

// correct code

while (foo) {
  doSomething(foo);
  foo = foo.parent;
}

function verifyList2(head) {
  let item = head;
  do {
    if (verify(item)) {
      item = item.next;
    } else {
      return false;
    }
  } while (item);

  return true;
}
verifyList2("head");

function findSomething2(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (isSomething(arr[i])) {
      return arr[i];
    }
  }
  throw new Error("Doesn't exist.");
}
findSomething2([]);

for (const key in obj) {
  if (key.startsWith("_")) {
    continue;
  }
  firstKey = key;
  firstValue = obj[key];
  break;
}

for (foo of bar) {
  if (foo.id === id) {
    doSomething(foo);
    break;
  }
}

console.log(firstKey, firstValue);
