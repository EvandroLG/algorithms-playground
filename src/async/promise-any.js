/*
  Promise Any

  Given an array of promises, Promise.any returns a single promise with the result of the first promise to be fullfilled.
  If all promises were reject, then it returned promise is rejected.
  Implement something like this yourself as a regular function called promiseAny.
*/

function promiseAny(promises) {
  const REJECT_MESSAGE = 'All promises were rejecte';
  let counter = 0;

  function handlePromises(resolve, reject) {
    if (!promises.length) {
      reject(REJECT_MESSAGE);
      return;
    }

    promises.forEach((promise) => {
      promise
        .then((result) => {
          resolve(result);
        })
        .catch(() => {
          counter++;

          if (counter === promises.length) {
            reject(REJECT_MESSAGE);
          }
        });
    });
  }

  return new Promise(handlePromises);
}

const assert = require('assert');

promiseAny([])
  .then(() => {
    console.log('You should not be here');
  })
  .catch((e) => {
    assert.equal(e, 'All promises were rejecte');
  });

promiseAny([Promise.reject(), Promise.reject(), Promise.reject()])
  .then(() => {
    console.log('You should not be here');
  })
  .catch((e) => {
    assert.equal(e, 'All promises were rejecte');
  });

const p1 = Promise.reject();
const p2 = new Promise((resolve) => setTimeout(resolve, 100, 'quick'));
const p3 = new Promise((resolve) => setTimeout(resolve, 200, 'slow'));
const p4 = new Promise((resolve) => setTimeout(resolve, 300, 'very slow'));

promiseAny([p1, p2, p3, p4])
  .then((resolve) => {
    assert.equal(resolve, 'quick');
  })
  .catch(console.log);
