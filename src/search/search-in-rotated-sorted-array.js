/*
  Search In Rotated Sorted Array

  There is an integer array nums sorted in ascending order (with distinct values).
  Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed).
  For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].
  Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.
  You must write an algorithm with O(log n) runtime complexity.

  Example:
  Input: [4,5,6,7,0,1,2], 0
  Output: 4
*/

function searchInRotatedSortedArray(arr, target) {
  const sorted = arr.slice().sort((a, b) => a - b);
  const memo = arr.reduce((acc, item, idx) => {
    acc[item] = idx;
    return acc;
  }, {});

  return (function binarySearch(start, end) {
    if (start > end) {
      return -1;
    }

    const middle = Math.round((start + end) / 2);
    const item = sorted[middle];

    if (item === target) {
      return memo[item];
    }

    if (item < target) {
      return binarySearch(middle + 1, end);
    }

    return binarySearch(start, middle - 1);
  })(0, arr.length - 1);
}

const assert = require('assert');
assert.equal(searchInRotatedSortedArray([4, 5, 6, 7, 0, 1, 2], 0), 4);
