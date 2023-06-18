/*
  Difference Of Sum

  You are given a positive integer array nums.
  - The element sum is the sum of all the elements in nums.
  - The digit sum is the sum of all the digits (not necessarily distinct) that appear in nums.
  Return the absolute difference between the element sum and digit sum of nums.
  Note that the absolute difference between two integers x and y is defined as |x - y|.

  Example:
  Input: [1,15,6,3]
  Output: 9
*/

function differenceOfSum(arr) {
  const elementSum = getElementSum(arr);
  const digitSum = getDigitSum(arr);

  return Math.abs(elementSum - digitSum);
}

function getElementSum(arr) {
  return arr.reduce((acc, item) => acc + item);
}

function getDigitSum(arr) {
  return arr.reduce((acc, item) => {
    if (item >= 10) {
      const s = '' + item;
      const fragments = s.split('');
      const sum = fragments.map(Number).reduce((acc, item) => acc + item);

      return acc + sum;
    }

    return acc + item;
  }, 0);
}

const assert = require('assert');
assert.equal(differenceOfSum([1, 15, 6, 3]), 9);
