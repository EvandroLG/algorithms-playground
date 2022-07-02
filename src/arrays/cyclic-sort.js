/*
  Cyclic Sort

  Given an array of scrambled numbers from 1-n, write a function to sort them in place.

  Example:
  Input: [3, 1, 5, 4, 2]
  Output: [1, 2, 3, 4, 5]

*/

function cyclicSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];

    if (i === value - 1) {
      continue;
    }

    swap(arr, i, value - 1);
    i--;
  }

  return arr;
}

function swap(arr, i, j) {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

const assert = require('assert');
assert.deepEqual(cyclicSort([3, 1, 5, 4, 2]), [1, 2, 3, 4, 5]);
assert.deepEqual(cyclicSort([2, 6, 4, 3, 1, 5]), [1, 2, 3, 4, 5, 6]);
