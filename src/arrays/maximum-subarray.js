/*
  Maximum Subarray

  Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
  A subarray is a contiguous part of an array.

  Example:
  Input: [-2,1,-3,4,-1,2,1,-5,4]
  Output: 6
*/

function maximumSubarray(arr) {
  let current = arr[0];
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    const item = arr[i];
    current = Math.max(item, current + item);
    max = Math.max(current, max);
  }

  return max;
}

const assert = require('assert');
assert.equal(maximumSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
