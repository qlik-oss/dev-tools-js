/* eslint-disable no-useless-return */
/* eslint-disable no-else-return */
/* eslint-disable no-unused-vars */

function doSomething(condition) {
  if (condition) {
    return true;
  } else {
    // eslint-disable-next-line consistent-return
    return;
  }
}

// eslint-disable-next-line consistent-return
function doSomethingElse(condition) {
  if (condition) {
    return true;
  }
}

function doSomething1(condition) {
  if (condition) {
    return true;
  } else {
    return false;
  }
}

function Foo2() {
  if (!(this instanceof Foo2)) {
    return new Foo2();
  }

  this.a = 0;
}
