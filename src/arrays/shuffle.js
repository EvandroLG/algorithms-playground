/*
  Shuffle

  Creates an new array shuffled values.

  Example:
  shuffle([1, 2, 3, 4]); // [4, 1, 3, 2]
*/

function swap(arr, i, j) {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

function shuffle(arr) {
  const result = arr.slice();
  let index = arr.length;

  while (index > 0) {
    const randomIdx = Math.floor(Math.random() * index);
    index--;
    swap(result, index, randomIdx);
  }

  return result;
}

const assert = require('assert');

const arr = [1, 2, 3, 4];
const shuffled = shuffle(arr);

function compare(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}

assert.equal(arr.length, shuffled.length);
assert.ok(!compare(arr, shuffled));
assert.deepEqual(arr.sort(), shuffled.sort());
