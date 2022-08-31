/*
  Count K Difference

  Given an integer array nums and an integer k, return the number of pairs (i, j) where i < j such that |nums[i] - nums[j]| == k.

  Example:
  Input: [1,2,2,1], 1
  Output: 4
*/

function countKDifference(nums, k) {
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (Math.abs(nums[i] - nums[j]) === k) {
        result++;
      }
    }
  }

  return result;
}

const assert = require('assert');
assert.equal(countKDifference([1, 2, 2, 1], 1), 4);
