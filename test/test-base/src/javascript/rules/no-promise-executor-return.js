/* eslint-disable no-new */
/* eslint-disable consistent-return */

const a = 1;

function getSomething(cb) {
  if (a === 2) {
    cb(new Error("error"), null);
  }
  cb(null, 1);
}

new Promise((resolve, reject) => {
  if (a === 2) {
    return 3; // eslint-disable-line no-promise-executor-return
  }
  getSomething((err, result) => {
    if (err) {
      reject(err);
    } else {
      resolve(result);
    }
  });
});

new Promise((resolve, reject) =>
  // eslint-disable-next-line no-promise-executor-return
  getSomething((err, data) => {
    if (err) {
      reject(err);
    } else {
      resolve(data);
    }
  }),
);

new Promise(() => {
  return 1; // eslint-disable-line no-promise-executor-return
});

new Promise((r) => r(1)); // eslint-disable-line no-promise-executor-return
