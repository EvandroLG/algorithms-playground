/*
  Min Operations

  You are given an integer array nums (0-indexed). In one operation, you can choose an element of the array and increment it by 1.
  For example, if nums = [1,2,3], you can choose to increment nums[1] to make nums = [1,3,3].
  Return the minimum number of operations needed to make nums strictly increasing.
  An array nums is strictly increasing if nums[i] < nums[i+1] for all 0 <= i < nums.length - 1. An array of length 1 is trivially strictly increasing.

  Example:
  Input: [1,5,2,4,1]
  Output: 14
*/

function minOperations(arr) {
  let result = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] >= arr[i + 1]) {
      const changes = arr[i] + 1 - arr[i + 1];
      arr[i + 1] = arr[i] + 1;
      result += changes;
    }
  }

  return result;
}

const assert = require('assert');
assert.strictEqual(minOperations([1, 5, 2, 4, 1]), 14);
