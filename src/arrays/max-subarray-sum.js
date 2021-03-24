/*
  Max Subarray Sum

  Write a function called maxSubarraySum which accepts an array of integers and a number called `n`.
  The function should calculate the maximum sum of `n` consecutive elements in the array.

  Example:
  maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2) // 10
*/

function maxSubarraySum(arr, n) {
  if (!arr.length) {
    return 0;
  }

  let max = 0;

  for (let i = 0; i < n; i++) {
    max = max + arr[i];
  }

  let tmp = max;

  for (let i = n; i < arr.length; i++) {
    tmp = tmp - arr[i - n] + arr[i];
    max = Math.max(max, tmp);
  }

  return max;
}

const assert = require('assert');
assert.equal(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2), 10);
assert.equal(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4), 17);
