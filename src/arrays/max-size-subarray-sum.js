/*
  Max Size Subarray Sum

  Given an integer array nums and an integer k, return the maximum length of a subarray that sums to k. If there is not one, return 0 instead.

  Example:
  Input: [1,-1,5,-2,3], 3
  Output: 4
*/

function maxSizeSubarraySum(arr, k) {
  let prefixSum = 0;
  let max = 0;
  const map = {};

  for (let i = 0; i < arr.length; i++) {
    prefixSum += arr[i];

    if (prefixSum === k) {
      max = i + 1;
    }

    if (map.hasOwnProperty(prefixSum - k)) {
      max = Math.max(max, i - map[prefixSum - k]);
    }

    if (!map.hasOwnProperty(prefixSum)) {
      map[prefixSum] = i;
    }
  }

  return max;
}

const assert = require('assert');
assert.ok(maxSizeSubarraySum([1, -1, 5, -2, 3], 3), 4);
