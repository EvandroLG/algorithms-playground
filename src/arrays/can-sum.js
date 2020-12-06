/*
  CanSum
  Write a function that returns a boolean indicating wheather or not it is possible to generate the target value using numbers from the array.

  Example:
  Input: [5, 3, 4, 7], 7
  Output: true
*/

function canSum(arr, target) {
  if (target === 0) {
    return true;
  }

  if (target < 0) {
    return false;
  }

  for (const value of arr) {
    const remainder = target - value;

    if (canSum(arr, remainder)) {
      return true;
    }
  }

  return false;
}

const assert = require('assert');
assert.ok(canSum([5, 3, 4, 7], 7));
assert.ok(!canSum([2, 4], 7));
