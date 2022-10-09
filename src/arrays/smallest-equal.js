/*
  Smallest Equal

  Given a 0-indexed integer array nums, return the smallest index i of nums such that i mod 10 == nums[i], or -1 if such index does not exist.
  x mod y denotes the remainder when x is divided by y.

  Example:
  Input: [0,1,2]
  Output: 0
*/

function smallestEqual(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (i % 10 === nums[i]) {
      return i;
    }
  }

  return -1;
}

const assert = require('assert');
assert.equal(smallestEqual([0, 1, 2]), 0);
