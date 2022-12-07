/*
  Largest Unique Number

  Given an integer array nums, return the largest integer that only occurs once.
  If no integer occurs once, return -1.

  Example:
  Input: [5,7,3,9,4,9,8,3,1]
  Output: 8
*/

function largestUniqueNumber(arr) {
  const memo = arr.reduce((acc, n) => {
    if (!acc.hasOwnProperty(n)) {
      acc[n] = 0;
    }

    acc[n]++;

    return acc;
  }, {});

  const keys = Object.keys(memo).map(Number);
  const filtered = keys.filter((n) => memo[n] === 1);

  let largest = -Infinity;

  for (const n of filtered) {
    largest = Math.max(largest, n);
  }

  if (largest === -Infinity) {
    return -1;
  }

  return largest;
}

const assert = require('assert');
assert.equal(largestUniqueNumber([5, 7, 3, 9, 4, 9, 8, 3, 1]), 8);
