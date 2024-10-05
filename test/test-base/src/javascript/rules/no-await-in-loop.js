// no-await-in-loop and require await

// eslint-disable-next-line require-await
async function returnsPromise() {
  return "value";
}
async function fn(arr) {
  for (const item of arr) {
    await Promise.resolve(item); // eslint-disable-line no-await-in-loop
  }
}

fn([1, 2, 3]);
returnsPromise();
