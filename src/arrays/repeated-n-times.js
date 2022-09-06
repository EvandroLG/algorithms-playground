/*
  Repeated N Times

  You are given an integer array nums with the following properties:
  - nums.length == 2 * n.
  - nums contains n + 1 unique elements.
  - Exactly one element of nums is repeated n times.
  Return the element that is repeated n times.

  Example:
  Input: [2,1,2,5,3,2]
  Output: 2
*/

function repeatedNTimes(nums) {
  const memo = new Set();

  for (const item of nums) {
    if (memo.has(item)) {
      return item;
    }

    memo.add(item);
  }
}

const assert = require('assert');
assert.equal(repeatedNTimes([2, 1, 2, 5, 3, 2]), 2);
