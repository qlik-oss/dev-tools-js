/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */

const foo = {
  get a() {
    return this.val;
  },
  b: 1,

  // eslint-disable-next-line grouped-accessor-pairs
  set a(value) {
    this.val = value;
  },
};

const bar = {
  set b(value) {
    this.val = value;
  },
  a: 1,
  // eslint-disable-next-line grouped-accessor-pairs
  get b() {
    return this.val;
  },
};

console.log(foo, bar);

class Foo {
  set a(value) {
    this.val = value;
  }
  b() {
    console.log("b");
  }
  // eslint-disable-next-line grouped-accessor-pairs
  get a() {
    return this.val;
  }
}

const Bar = class {
  static get a() {
    return this.val;
  }
  b() {
    console.log("b");
  }
  // eslint-disable-next-line grouped-accessor-pairs
  static set a(value) {
    this.val = value;
  }
};
