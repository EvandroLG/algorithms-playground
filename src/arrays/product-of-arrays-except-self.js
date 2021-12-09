/*
  Product Of Arrays Except Self

  Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
  The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
  You must write an algorithm that runs in O(n) time and without using the division operation.

  Example:
  Input: [1,2,3,4]
  Output: [24,12,8,6]
*/

function productOfArraysExceptSelf(arr) {
  const output = [];
  const left = [];
  const right = [];
  const size = arr.length;
  let acc = 1;

  for (let i = 0; i < size; i++) {
    left[i] = acc;
    acc *= arr[i];
  }

  acc = 1;

  for (let i = size - 1; i >= 0; i--) {
    right[i] = acc;
    acc *= arr[i];
  }

  for (let i = 0; i < size; i++) {
    output[i] = left[i] * right[i];
  }

  return output;
}

const assert = require('assert');
assert.deepEqual(productOfArraysExceptSelf([1, 2, 3, 4]), [24, 12, 8, 6]);
