/*
  Separate Digits

  Given an array of positive integers nums, return an array answer that consists of the digits of each integer in nums after separating them in the same order they appear in nums.
  To separate the digits of an integer is to get all the digits it has in the same order.

  Example:
  Input: [13,25,83,77]
  Output: [1,3,2,5,8,3,7,7]
*/

function separateDigits(arr) {
  return arr.join('').split('').map(Number);
}

const assert = require('assert');
assert.deepEqual(separateDigits([13, 25, 83, 77]), [1, 3, 2, 5, 8, 3, 7, 7]);
