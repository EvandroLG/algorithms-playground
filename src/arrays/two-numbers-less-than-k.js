/*
  Two Numbers Less Than K

  Given an array nums of integers and integer k, return the maximum sum such that there exists i < j with nums[i] + nums[j] = sum and sum < k.

  Example:
  Input: [34,23,1,24,75,33,54,8], 60
  Output: 58
*/

function twoNumbersLessThanK(arr, k) {
  const sorted = arr.slice().sort((a, b) => a - b);
  let p1 = 0;
  let p2 = arr.length - 1;
  let result = -1;

  while (p1 < p2) {
    const sum = sorted[p1] + sorted[p2];

    if (sum < k) {
      result = Math.max(sum, result);
      p1++;
    } else {
      p2--;
    }
  }

  return result;
}

const assert = require('assert');
assert.equal(twoNumbersLessThanK([34, 23, 1, 24, 75, 33, 54, 8], 60), 58);
