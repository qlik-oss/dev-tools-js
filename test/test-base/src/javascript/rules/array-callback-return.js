/* eslint-disable no-useless-return */
/* eslint-disable no-else-return */
/* eslint-disable consistent-return */

// testing array-callback-return rule

// eslint-disable-next-line array-callback-return
const indexMap = [].reduce((acc, item, index) => {
  acc[item] = index;
}, {});

console.log(indexMap);

const nodes = [];

// eslint-disable-next-line array-callback-return
const foo = Array.from(nodes, (node) => {
  if (node.tagName === "DIV") {
    return true;
  }
});

const bar = foo.filter((x) => {
  if (x) {
    return true;
  } else {
    // eslint-disable-next-line array-callback-return
    return;
  }
});

console.log(bar);

export {};
