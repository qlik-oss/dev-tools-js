/* eslint-disable new-cap */

// incorrect code

const something = new Promise((resolve) => {
  resolve(1);
});

const somethingElse = new Promise((resolve) => {
  resolve(2);
});

function doSomething(foo) {
  return foo;
}

function initialize() {
  return new Promise.resolve(3);
}

{
  let result;

  async function foo() {
    result += await something; // eslint-disable-line require-atomic-updates
  }
  foo();

  async function bar() {
    result += await something; // eslint-disable-line require-atomic-updates
  }
  bar();

  async function baz() {
    result += doSomething(await somethingElse); // eslint-disable-line require-atomic-updates
  }
  baz();

  async function qux() {
    if (!result) {
      result = await initialize(); // eslint-disable-line require-atomic-updates
    }
  }
  qux();

  function* generator() {
    result += yield; // eslint-disable-line require-atomic-updates
  }
  generator();
}

// correct code
{
  let result;

  async function foobar() {
    result = (await something) + result;
  }
  foobar();

  async function baz() {
    const tmp = doSomething(await somethingElse);
    result += tmp;
  }
  baz();

  async function qux() {
    if (!result) {
      const tmp = await initialize();
      if (!result) {
        result = tmp;
      }
    }
  }
  qux();

  async function quux() {
    let localVariable = 0;
    console.log(localVariable);
    localVariable += await something;
    console.log(localVariable);
  }
  quux();

  function* generator() {
    result = (yield) + result;
  }
  generator();
}
