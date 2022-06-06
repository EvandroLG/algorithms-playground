/*
  Rearrange Items By Sign

  You are given a 0-indexed integer array nums of even length consisting of an equal number of positive and negative integers.
  You should rearrange the elements of nums such that the modified array follows the given conditions:
  - Every consecutive pair of integers have opposite signs.
  - For all integers with the same sign, the order in which they were present in nums is preserved.
  - The rearranged array begins with a positive integer.

  Example:
  Input: [3,1,-2,-5,2,-4]
  Output: [3,-2,1,-5,2,-4]
*/

function rearrangeItemsBySign(arr) {
  const output = [];
  const negative = arr.filter(isNegative).reverse();
  const positive = arr.filter(isPositive).reverse();

  while (positive.length) {
    output.push(positive.pop(), negative.pop());
  }

  return output;
}

function isNegative(n) {
  return n < 0;
}

function isPositive(n) {
  return !isNegative(n);
}

const assert = require('assert');
assert.deepEqual(rearrangeItemsBySign([3, 1, -2, -5, 2, -4]), [
  3,
  -2,
  1,
  -5,
  2,
  -4,
]);
