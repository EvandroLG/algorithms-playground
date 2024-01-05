/*
  Find Intersection Values

  You are given two 0-indexed integer arrays nums1 and nums2 of sizes n and m, respectively.
  Consider calculating the following values:
  - The number of indices i such that 0 <= i < n and nums1[i] occurs at least once in nums2.
  - The number of indices i such that 0 <= i < m and nums2[i] occurs at least once in nums1.
  Return an integer array answer of size 2 containing the two values in the above order.

  Example:
  Input: [4,3,2,3,1], [2,2,5,2,3,6]
  Output: [3, 4]
*/

function findIntersectionValues(a, b) {
  const union = buildUnion(a, b);
  return [counter(a, union), counter(b, union)];
}

function counter(arr, union) {
  return arr.reduce((acc, item) => {
    if (union.has(item)) {
      acc++;
    }

    return acc;
  }, 0);
}

function buildUnion(a, b) {
  const setB = new Set(b);
  return new Set(a.filter((item) => setB.has(item)));
}

const assert = require('assert');
assert.deepEqual(findIntersectionValues([4, 3, 2, 3, 1], [2, 2, 5, 2, 3, 6]), [
  3,
  4,
]);
