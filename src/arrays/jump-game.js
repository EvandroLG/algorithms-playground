/*
  Jump Game

  You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.
  Return true if you can reach the last index, or false otherwise.

  Example:
  Input: [2,3,1,1,4]
  Output: true
*/

function canJump(nums, index = 0, memo = {}) {
  if (memo[index]) {
    return false;
  }

  if (index >= nums.length) {
    return false;
  }

  if (index === nums.length - 1) {
    return true;
  }

  let jump = nums[index];

  while (jump) {
    const nextIndex = nums[index + jump];
    if (canJump(nums, nextIndex, memo)) {
      return true;
    }

    memo[nextIndex] = true;

    jump--;
  }

  return false;
}

const assert = require('assert');
assert.ok(canJump([2, 3, 1, 1, 4]));
