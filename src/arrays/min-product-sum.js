/*
  Min Product Sum

  The product sum of two equal-length arrays a and b is equal to the sum of a[i] * b[i] for all 0 <= i < a.length (0-indexed).
  Given two arrays nums1 and nums2 of length n, return the minimum product sum if you are allowed to rearrange the order of the elements in nums1. 

  Example:
  Input: [5,3,4,2], [4,2,2,5]
  Output: 40
*/

function minProductSum(nums1, nums2) {
  const sorted1 = nums1.slice().sort((a, b) => b - a);
  const sorted2 = nums2.slice().sort((a, b) => a - b);
  let result = 0;

  for (let i = 0; i < sorted1.length; i++) {
    result += sorted1[i] * sorted2[i];
  }

  return result;
}

const assert = require('assert');
assert.equal(minProductSum([5, 3, 4, 2], [4, 2, 2, 5]), 40);
