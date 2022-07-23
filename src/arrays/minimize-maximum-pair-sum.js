/*
  Minimize Maximum Pair Sum

  The pair sum of a pair (a,b) is equal to a + b.
  The maximum pair sum is the largest pair sum in a list of pairs.
  Given an array nums of even length n, pair up the elements of nums into n / 2 pairs such that:
  - Each element of nums is in exactly one pair, and
  - The maximum pair sum is minimized.
  Return the minimum maximum pair sum of any possible pairings.

  Example:
  Input: [3,5,2,3]
  Output: 7
*/

function minimizeMaximumPairSum(nums) {
  const sorted = nums.slice().sort((a, b) => a - b);
  let p1 = 0;
  let p2 = sorted.length - 1;
  let output = 0;

  while (p1 < p2) {
    output = Math.max(output, sorted[p1] + sorted[p2]);
    p1++;
    p2--;
  }

  return output;
}

const assert = require('assert');
assert.equal(minimizeMaximumPairSum([3, 5, 2, 3]), 7);
