/*
  Count Pairs Sum Less Than Target

  Given a 0-indexed integer array nums of length n and an integer target, return the number of pairs (i, j) where 0 <= i < j < n and nums[i] + nums[j] < target.

  Example:
  Input: nums = [1, 2, 3, 4, 5], target = 6
  Output: 4
*/

function countPairsSumLessThanTarget(nums, target) {
  let counter = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] < target) {
        counter++;
      }
    }
  }

  return counter;
}

const assert = require('assert');
assert.equal(countPairsSumLessThanTarget([1, 2, 3, 4, 5], 6), 4);
