/* eslint-disable no-shadow */
/* eslint-disable no-useless-return */

// TODO: remove this when eslint runs on 9 or higher
/* eslint no-useless-assignment: "error" */

function doSomething(v) {
  console.log(v);
}

const condition = true;

function fn1() {
  let v = "used";
  doSomething(v);
  v = "unused"; // eslint-disable-line no-useless-assignment
}
fn1();

function fn2() {
  let v = "used";
  if (condition) {
    v = "unused"; // eslint-disable-line no-useless-assignment
    return;
  }
  doSomething(v);
}
fn2();

function fn3() {
  let v = "used";
  if (condition) {
    doSomething(v);
  } else {
    v = "unused"; // eslint-disable-line no-useless-assignment
  }
}
fn3();

function fn4() {
  let v = "unused"; // eslint-disable-line no-useless-assignment
  if (condition) {
    v = "used";
    doSomething(v);
    return;
  }
}
fn4();

function fn5() {
  const v = "used";
  if (condition) {
    let v = "used";
    console.log(v);
    v = "unused"; // eslint-disable-line no-useless-assignment
  }
  console.log(v);
}
fn5();
