/*
  Jump Game

  You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.
  Return true if you can reach the last index, or false otherwise.

  Example:
  Input: [2,3,1,1,4]
  Output: true
*/

function canJump(arr) {
  const lastIndex = arr.length - 1;
  const memo = {};

  return (function helper(index) {
    if (index === lastIndex) {
      return true;
    }

    if (index > lastIndex || !arr[index]) {
      return false;
    }

    if (memo.hasOwnProperty(index)) {
      return memo[index];
    }

    let jump = arr[index];

    while (jump) {
      const nextIndex = index + jump;
      memo[nextIndex] = helper(nextIndex);

      if (memo[nextIndex]) {
        return true;
      }

      jump--;
    }

    return false;
  })(0);
}

const assert = require('assert');
assert.ok(canJump([2, 3, 1, 1, 4]));
