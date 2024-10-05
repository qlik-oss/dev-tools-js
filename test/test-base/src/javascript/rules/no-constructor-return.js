/* eslint-disable no-unused-vars */
// no-constructor-return
class A {
  constructor(a) {
    this.a = a;
    // eslint-disable-next-line no-constructor-return
    return a;
  }

  getA() {
    return this.a;
  }
}
