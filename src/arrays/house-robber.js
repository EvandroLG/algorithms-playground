/*
  House Robber

  You are a professional robber planning to rob houses along a street.
  Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.
  Return the maximum amount of money you can rob tonight without alerting the police.

  Example:
  Input: [1,2,3,1]
  Output: 4
*/

function houseRobber(arr) {
  const memo = {};

  return (function helper(idx = 0) {
    if (idx >= arr.length) {
      return 0;
    }

    if (!memo.hasOwnProperty(idx)) {
      memo[idx] = Math.max(helper(idx + 1), helper(idx + 2) + arr[idx]);
    }

    return memo[idx];
  })();
}

const assert = require('assert');
assert.equal(houseRobber([1, 2, 3, 1]), 4);
