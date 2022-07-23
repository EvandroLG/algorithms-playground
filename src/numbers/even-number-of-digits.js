/*
  Even Number Of Digits

  Given an array nums of integers, return how many of them contain an even number of digits.

  Example:
  Input: [12,345,2,6,7896]
  Output: 2
*/

function evenNumberOfDigits(nums) {
  return nums.reduce((acc, n) => {
    if (hasEvenDigits(n)) {
      acc++;
    }

    return acc;
  }, 0);
}

function hasEvenDigits(n) {
  const s = '' + n;
  return s.length % 2 === 0;
}

const assert = require('assert');
assert.equal(evenNumberOfDigits([12, 345, 2, 6, 7896]), 2);
