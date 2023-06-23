/*
  Find Difference

  Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:
  - answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
  - answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
  Note that the integers in the lists may be returned in any order.

  Example:
  Input: [1,2,3], [2,4,6]
  Output: [[1,3],[4,6]]
*/

function findDifference(a, b) {
  const diffA = diff(a, b);
  const diffB = diff(b, a);

  return [diffA, diffB];
}

function diff(a, b) {
  const output = [];
  const setA = new Set(a);
  const setB = new Set(b);

  for (const item of setA) {
    if (!setB.has(item)) {
      output.push(item);
    }
  }

  return output;
}

const assert = require('assert');
assert.deepEqual(findDifference([1, 2, 3], [2, 4, 6]), [
  [1, 3],
  [4, 6],
]);
