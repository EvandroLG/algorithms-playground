/*
  Climbing Stairs

  You are climbing a staircase. It takes `n` steps to reach the top.
  Each time you can either climb `1` or `2` steps. In how many distinct ways can you climb to the top?

  Example:
  Input: 3
  Output: 3
*/

function climbingStairs(n, memo = {}) {
  if (n < 0) {
    return 0;
  }

  if (n === 0) {
    return 1;
  }

  if (!memo[n]) {
    memo[n] = climbingStairs(n - 1, memo) + climbingStairs(n - 2, memo);
  }

  return memo[n];
}

const assert = require('assert');
assert.equal(climbingStairs(3), 3);
