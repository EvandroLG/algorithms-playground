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

function mergeSortedArray(arr1, m, arr2, n) {
  let p1 = m - 1;
  let p2 = n - 1;
  let p3 = arr1.length - 1;

  while (p3 >= 0) {
    if (p1 >= 0 && p2 >= 0) {
      arr1[p3] = arr1[p1] > arr2[p2] ? arr1[p1--] : arr2[p2--];
    } else if (p1 >= 0) {
      arr1[p3] = arr1[p1--];
    } else {
      arr1[p3] = arr2[p2--];
    }

    p3--;
  }
}

const assert = require('assert');

const a = [1, 2, 3, 0, 0, 0];
const b = [2, 5, 6];

mergeSortedArray(a, 3, b, 3);
assert.deepEqual(a, [1, 2, 2, 3, 5, 6]);
