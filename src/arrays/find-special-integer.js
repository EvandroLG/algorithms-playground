/*
  Find Special Integer

  Given an integer array sorted in non-decreasing order, there is exactly one integer in the array that occurs more than 25% of the time, return that integer.

  Example:
  Input: [1,2,2,6,6,6,6,7,10]
  Output: 6
*/

function findSpecialInteger(arr) {
  if (arr.length <= 1) {
    return arr.at(0) ?? -1;
  }

  const n = (25 / 100) * arr.length;
  let matches = 1;
  let p1 = 0;
  let p2 = 1;

  while (p2 < arr.length) {
    if (arr[p1] === arr[p2]) {
      matches++;

      if (matches > n) {
        return arr[p1];
      }
    } else {
      matches = 1;
    }

    p1++;
    p2++;
  }

  return -1;
}

const assert = require('assert');
assert.strictEqual(findSpecialInteger([1, 2, 2, 6, 6, 6, 6, 7, 10]), 6);
