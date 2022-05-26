/*
  Find All Duplicates

  Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears once or twice, return an array of all the integers that appears twice.

  Example:
  Input: [4,3,2,7,8,2,3,1]
  Output: [2, 3]
*/

function findAllDuplicates(nums) {
  const seen = new Set();
  const output = [];

  for (const item of nums) {
    if (seen.has(item)) {
      output.push(item);
    } else {
      seen.add(item);
    }
  }

  return output;
}

const assert = require('assert');
assert.deepEqual(findAllDuplicates([4, 3, 2, 7, 8, 2, 3, 1]), [2, 3]);
