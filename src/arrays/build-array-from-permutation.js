/*
  Build Array From Permutation

  Given a zero-based permutation nums (0-indexed), build an array ans of the same length where ans[i] = nums[nums[i]] for each 0 <= i < nums.length and return it.
  A zero-based permutation nums is an array of distinct integers from 0 to nums.length - 1 (inclusive).

  Example:
  Input: [0,2,1,5,3,4]
  Output: [0,1,2,4,5,3]
*/

function buildArrayFromPermutation(arr) {
  const output = [];

  for (let i = 0; i < arr.length; i++) {
    output.push(arr[arr[i]]);
  }

  return output;
}

const assert = require('assert');
assert.deepEqual(buildArrayFromPermutation([0, 2, 1, 5, 3, 4]), [
  0,
  1,
  2,
  4,
  5,
  3,
]);
