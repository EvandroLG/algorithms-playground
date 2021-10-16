/*
  Missing Number

  Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

  Input: [3, 0, 1]
  Output: 2
*/

function missingNumber(arr) {
  const memo = new Set(arr);
  const size = arr.length;

  for (let i = 0; i < size; i++) {
    if (!memo.has(i)) {
      return i;
    }
  }

  return size;
}

const assert = require('assert');
assert.equal(missingNumber([3, 0, 1]), 2);
