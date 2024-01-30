/*
  Find Non Min Or Max

  Given an integer array nums containing distinct positive integers, find and return any number from the array that is neither the minimum nor the maximum value in the array, or -1 if there is no such number.
  Return the selected integer.

  Example:
  Input: [3,2,1,4]
  Output: 3
*/

function findNonMinOrMax(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  if (min === max) {
    return -1;
  }

  for (const n of arr) {
    if (n != min && n != max) {
      return n;
    }
  }

  return -1;
}

const assert = require('assert');
assert.equal(findNonMinOrMax([3, 2, 1, 4]), 3);
