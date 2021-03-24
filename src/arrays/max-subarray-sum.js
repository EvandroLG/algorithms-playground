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

  let tmp = arr[0];
  let max = 0;
  let counter = 1;

  for (let i = 1; i < arr.length; i++) {
    counter = counter + 1;
    tmp = tmp + arr[i];

    if (counter === n) {
      max = Math.max(tmp, max);
      counter = 1;
      tmp = arr[i];
    }
  }

  return max;
}

const assert = require('assert');
assert.ok(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2));
assert.ok(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4));
