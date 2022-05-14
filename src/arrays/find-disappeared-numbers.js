/*
  Find Disappeared Numbers

  Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

  Example:
  Input: [4,3,2,7,8,2,3,1]
  Output: [5, 6]
*/

function findDisappearedNumbers(arr) {
  const set = new Set(arr);

  const output = [];

  for (let i = 1; i <= arr.length; i++) {
    if (!set.has(i)) {
      output.push(i);
    }
  }

  return output;
}

const assert = require('assert');
assert.deepEqual(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]), [5, 6]);
