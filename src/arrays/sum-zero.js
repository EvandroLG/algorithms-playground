/*
  Sum Zero

  Write a function called sumZero which accepts a sorted array of integers.
  The function should find the first pair where the sum is 0.
  Return an array that includes both values that sum to zero or undefined if a pair does not exist.

  Examples:
  [-3, 2, -1, 0, 1, 2, 3] // [-3, 3]
  [-2, 0, 1, 3] // undefined
*/

function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];

    if (sum === 0) {
      return [arr[left], arr[right]];
    }

    if (sum > 0) {
      right = right - 1;
    } else {
      left = left + 1;
    }
  }
}

const assert = require('assert');
assert.deepEqual(sumZero([-3, 2, -1, 0, 1, 2, 3]), [-3, 3]);
assert.equal(sumZero([-2, 0, 1, 3]), undefined);
