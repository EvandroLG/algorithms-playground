/*
  3sum Closest

  Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.
  Return the sum of the three integers.
  You may assume that each input would have exactly one solution.

  Example:
  Input: [-1,2,1,-4], 1
  Output: 2
*/

function threeSumClosest(arr, target) {
  const sorted = arr.slice().sort((a, b) => a - b);
  let result = Infinity;
  let diff = Infinity;

  for (let i = 0; i < sorted.length; i++) {
    let left = i + 1;
    let right = sorted.length - 1;

    while (left < right) {
      const sum = sorted[i] + sorted[left] + sorted[right];
      const lastDiff = Math.abs(sum - target);

      if (lastDiff === 0) {
        return sum;
      }

      if (lastDiff < diff) {
        result = sum;
        diff = lastDiff;
      }

      if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
}

const assert = require('assert');
assert.equal(threeSumClosest([-1, 2, 1, -4], 1), 2);
