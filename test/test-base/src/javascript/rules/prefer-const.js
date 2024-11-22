/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
// it's initialized and never reassigned.
let a = 3; // eslint-disable-line prefer-const
console.log(a);

let b;
b = 0; // eslint-disable-line prefer-const
console.log(b);

class C {
  static {
    let a;
    a = 0; // eslint-disable-line prefer-const
    console.log(a);
  }
}

// `i` is redefined (not reassigned) on each loop step.
// eslint-disable-next-line prefer-const
for (let i of [1, 2, 3]) {
  console.log(i);
}

// `a` is redefined (not reassigned) on each loop step.
// eslint-disable-next-line prefer-const
for (let a of [1, 2, 3]) {
  console.log(a);
}
