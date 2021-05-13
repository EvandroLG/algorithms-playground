/*
  Merge Sorted Array

  Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
  The number of elements initialized in nums1 and nums2 are m and n respectively. You may assume that nums1 has a size equal to m + n such that it has enough space to hold additional elements from nums2.

  Example 1:
  Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
  Output: [1,2,2,3,5,6]

  Example 2:
  Input: nums1 = [1], m = 1, nums2 = [], n = 0
  Output: [1]
*/

function normalize(value) {
  return value !== undefined ? value : Infinity;
}

function mergeSortedArray(arr1, m, arr2, n) {
  const copied = arr1.slice();
  copied.length = m;
  let p1 = 0;
  let p2 = 0;
  let p = 0;

  while (p < m + n) {
    if (normalize(copied[p1]) >= normalize(arr2[p2])) {
      arr1[p] = arr2[p2++];
    } else {
      arr1[p] = copied[p1++];
    }

    p++;
  }

  return arr1;
}

const assert = require('assert');

const a = [1, 2, 3, 0, 0, 0];
const b = [2, 5, 6];

assert.deepEqual(mergeSortedArray(a, 3, b, 3), [1, 2, 2, 3, 5, 6]);
