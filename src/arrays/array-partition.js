/*
  Array Partition

  Given an integer array nums of 2n integers, group these integers into n pairs (a1, b1), (a2, b2), ..., (an, bn) such that the sum of min(ai, bi) for all i is maximized.
  Return the maximized sum.

  Example:
  Input: [1,4,3,2]
  Output: 4
*/

function arrayPartition(nums) {
  const sorted = nums.slice().sort((a, b) => a - b);
  let sum = 0;

  for (let i = 0; i < sorted.length; i += 2) {
    sum += Math.min(sorted[i], sorted[i + 1]);
  }

  return sum;
}

const assert = require('assert');
assert.equal(arrayPartition([1, 4, 3, 2]), 4);
