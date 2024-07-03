/*
  Find Closest Number

  Given an integer array nums of size n, return the number with the value closest to 0 in nums.
  If there are multiple answers, return the number with the largest value.

  Example:
  Input: [-4,-2,1,4,8]
  Output: 1
*/

function findClosestNumber(arr) {
  let closest = Infinity;
  let result = -Infinity;

  for (const n of arr) {
    const diff = Math.abs(n - 0);

    if (diff < closest) {
      closest = diff;
      result = n;
    } else if (diff === closest) {
      result = Math.max(n, result);
    }
  }

  return result;
}

const assert = require('assert');
assert.strictEqual(findClosestNumber([-4, -2, 1, 4, 8]), 1);
