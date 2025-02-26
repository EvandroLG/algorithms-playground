/*
  Find Minimum Rotated Sorted Array

  Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:
  - [4,5,6,7,0,1,2] if it was rotated 4 times.
  - [0,1,2,4,5,6,7] if it was rotated 7 times.
  Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].
  Given the sorted rotated array nums of unique elements, return the minimum element of this array.
  You must write an algorithm that runs in O(log n) time.

  Example:
  Input: [3,4,5,1,2]
  Output: 1
*/

function findMinimumRotatedSortedArray(arr) {
  let left = 0;
  let right = arr.length - 1;
  let result = Infinity;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    if (arr[middle] < result) {
      result = arr[middle];
    }

    if (arr[middle] > arr[right]) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return result;
}

const assert = require('assert');
assert.equal(findMinimumRotatedSortedArray([3, 4, 5, 1, 2]), 1);
