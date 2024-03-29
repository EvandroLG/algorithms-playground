/*
  Promise All

  Given an array of promises, Promise.all returns a promise that waits for all of the promises in the array to finish. It then succeeds, yielding an array of result values. If a promise in the array fails, the promise returned by all fails too, with the failure reason from the failing promise.
  Implement something like this yourself as a regular function called promiseAll.
  Remember that after a promise has succeeded or failed, it can't succeed or fail again, and further calls to the functions that resolve it are ignored. This can simplify the way you handle failure of your promise.
*/

function promiseAll(promises) {
  const results = [];
  let counter = 0;

  function handlePromise(resolve, reject) {
    if (!promises.length) {
      resolve([]);
    }

    for (let i = 0; i < promises.length; i++) {
      const promise = promises[i];

      if (!(promise instanceof Promise)) {
        results[i] = promise;
        continue;
      }

      promise
        .then((result) => {
          results[i] = result;
          counter++;

          if (counter === promises.length) {
            resolve(results);
          }
        })
        .catch((e) => {
          reject(e);
        });
    }
  }

  return new Promise(handlePromise);
}

const assert = require('assert');

promiseAll([]).then((resolve) => {
  assert.deepEqual(resolve, []);
});

function soon(val) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(val), Math.random() * 500);
  });
}

promiseAll([soon(1), soon(2), soon(3)]).then((resolve) => {
  assert.deepEqual(resolve, [1, 2, 3]);
});

promiseAll([soon(1), Promise.reject('X'), soon(3), Promise.reject('Y')])
  .then(() => {
    console.log('We should not get here');
  })
  .catch((error) => {
    assert.equal(error, 'X');
  });
