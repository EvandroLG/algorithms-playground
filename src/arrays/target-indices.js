/*
  Target Indices

  You are given a 0-indexed integer array nums and a target element target.
  A target index is an index i such that nums[i] == target.
  Return a list of the target indices of nums after sorting nums in non-decreasing order.
  If there are no target indices, return an empty list. The returned list must be sorted in increasing order.

  Example:
  Input: [1,2,5,2,3], 2
  Output: [1, 2]
*/

function targetIndices(arr, target) {
  const sorted = arr.slice().sort((a, b) => a - b);
  let idx = sorted.indexOf(target);

  if (idx === -1) {
    return [];
  }

  const output = [idx];

  while (sorted[++idx] === target) {
    output.push(idx);
  }

  return output;
}

const assert = require('assert');
assert.deepEqual(targetIndices([1, 2, 5, 2, 3], 2), [1, 2]);
