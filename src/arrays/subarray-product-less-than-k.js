/*
  Subarray Product Less Than K

  Given an array of integers nums and an integer k, return the number of contiguous subarrays where the product of all the elements in the subarray is strictly less than k.

  Example:
  Input: [10, 5, 2, 6], 100
  Output: 8
*/

function subarrayProductLessThanK(arr, k) {
  if (k < 1) {
    return 0;
  }

  let product = 1;
  let result = 0;
  let left = 0;
  let right = 0;

  while (right < arr.length) {
    product *= arr[right];

    while (product >= k) {
      product /= arr[left];
      left++;
    }

    for (let i = left; i <= right; i++) {
      result++;
    }

    right++;
  }

  return result;
}

const assert = require('assert');
assert.equal(subarrayProductLessThanK([10, 5, 2, 6], 100), 8);
