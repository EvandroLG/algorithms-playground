/*
  Kth Missing Positive Number

  Given an array arr of positive integers sorted in a strictly increasing order, and an integer k.
  Return the kth positive integer that is missing from this array.

  Example:
  Input: [2,3,4,7,11], 5
  Output: 9
*/

function findKthPositive(arr, k) {
  const missing = generateMissingNumbers(arr);

  if (!missing.length) {
    return arr.at(-1) + k;
  }

  return missing.at(k - 1) ?? arr.at(-1) - missing.length + k;
}

function generateMissingNumbers(arr) {
  let prev = 0;
  const output = [];

  for (const current of arr) {
    const diff = current - prev - 1;

    if (diff) {
      let pivot = prev + 1;

      while (pivot < current) {
        output.push(pivot);
        pivot++;
      }
    }

    prev = current;
  }

  return output;
}

const assert = require('assert');
assert.equal(findKthPositive([2, 3, 4, 7, 11], 5), 9);
