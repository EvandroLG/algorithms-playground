/*
  Subset Xor Sum

  The XOR total of an array is defined as the bitwise XOR of all its elements, or 0 if the array is empty.
  For example, the XOR total of the array [2,5,6] is 2 XOR 5 XOR 6 = 1.
  Given an array nums, return the sum of all XOR totals for every subset of nums.
  Note: Subsets with the same elements should be counted multiple times.
  An array a is a subset of an array b if a can be obtained from b by deleting some (possibly zero) elements of b.

  Example:
  Input: [5,1,6]
  Output: 28
*/

function subsetXorSum(arr) {
  const subsets = arr.reduce(
    (subsets, value) => subsets.concat(subsets.map((set) => [value, ...set])),
    [[]]
  );

  const xorSubset = subsets.reduce(
    (acc, subset) => acc.concat(xor(subset)),
    []
  );

  return xorSubset.reduce((acc, item) => acc + item);
}

function xor(arr) {
  if (!arr.length) {
    return 0;
  }

  return arr.reduce((acc, item) => acc ^ item);
}

const assert = require('assert');
assert.equal(subsetXorSum([5, 1, 6]), 28);
