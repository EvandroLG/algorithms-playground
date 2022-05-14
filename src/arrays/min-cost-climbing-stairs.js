/*
  Min Cost Climbing Stairs

  You are given an integer array cost where cost[i] is the cost of ith step on a staircase.
  Once you pay the cost, you can either climb one or two steps.
  You can either start from the step with index 0, or the step with index 1.
  Return the minimum cost to reach the top of the floor.

  Example:
  Input: [10,15,20]
  Output: 15
*/

function minCostClimbingStairs(arr) {
  const memo = {};

  return (function helper(idx) {
    if (idx <= 1) {
      return 0;
    }

    if (memo.hasOwnProperty(idx)) {
      return memo[idx];
    }

    const downOne = arr[idx - 1] + helper(idx - 1);
    const downTwo = arr[idx - 2] + helper(idx - 2);
    memo[idx] = Math.min(downOne, downTwo);

    return memo[idx];
  })(arr.length);
}

const assert = require('assert');
assert.equal(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]), 6);
