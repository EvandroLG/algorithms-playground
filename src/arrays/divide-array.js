/*
  Divide Array

  You are given an integer array nums consisting of 2 * n integers.
  You need to divide nums into n pairs such that:
  - Each element belongs to exactly one pair.
  - The elements present in a pair are equal.
  Return true if nums can be divided into n pairs, otherwise return false.

  Example:
  Input: [3,2,3,2,2,2]
  Output: true
*/

function divideArray(arr) {
  if (!arr.length || arr.length % 2 > 0) {
    return false;
  }

  const numberOfPairs = arr / 2;
  const memo = arr.reduce((acc, n) => {
    if (!acc.hasOwnProperty(n)) {
      acc[n] = 0;
    }

    acc[n]++;

    return acc;
  }, {});

  const entries = Object.entries(memo);
  let size = numberOfPairs;

  for (const [_, value] of entries) {
    if (size === 0 || value % 2 > 0) {
      return false;
    }

    size -= value;

    if (size < 0) {
      return false;
    }
  }

  return !size;
}

const assert = require('assert');
assert.ok(divideArray([3, 2, 3, 2, 2, 2]));
