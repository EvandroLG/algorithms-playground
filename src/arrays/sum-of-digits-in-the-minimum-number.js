/*
  Sum Of Digits In The Minimum Number

  Given an integer array nums, return 0 if the sum of the digits of the minimum integer in nums is odd, or 1 otherwise.

  Example:
  Input: [34,23,1,24,75,33,54,8]
  Output: 0
*/

function sumOfDigitsInTheMinimumNumber(n) {
  const result = sumMinimumDigits(n);
  return isEven(result) ? 1 : 0;
}

function sumMinimumDigits(arr) {
  const smallest = findSmallest(arr);
  return sumDigits(smallest);
}

function findSmallest(arr) {
  return arr.reduce((smallest, item) => {
    if (smallest < item) {
      return smallest;
    }

    return item;
  });
}

function sumDigits(n) {
  const str = '' + n;
  const fragments = str.split('');
  const nums = fragments.map(Number);

  return nums.reduce((acc, item) => acc + item);
}

function isEven(n) {
  return n % 2 === 0;
}

const assert = require('assert');
assert.equal(sumOfDigitsInTheMinimumNumber([34, 23, 1, 24, 75, 33, 54, 8]), 0);
