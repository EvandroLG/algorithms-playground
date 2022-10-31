/*
  Find Max K

  Given an integer array nums that does not contain any zeros, find the largest positive integer k such that -k also exists in the array.
  Return the positive integer k. If there is no such integer, return -1.

  Example:
  Input: [-1,10,6,7,-7,1]
  Output: 7
*/

function findMaxK(arr) {
  const memo = new Set();
  const sorted = arr.slice().sort((a, b) => a - b);
  let largest = -Infinity;

  for (const n of sorted) {
    if (n < 0) {
      memo.add(n);
    } else {
      if (n < largest) {
        continue;
      }

      if (memo.has(n * -1)) {
        largest = n;
      }
    }
  }

  return largest === -Infinity ? -1 : largest;
}

const assert = require('assert');
assert.equal(findMaxK([-1, 10, 6, 7, -7, 1]), 7);
