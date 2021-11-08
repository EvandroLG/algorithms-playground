/*
  Binary Search

  Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums.
  If target exists, then return its index. Otherwise, return -1.
  You must write an algorithm with O(log n) runtime complexity.

  Example:
  Input: [-1,0,3,5,9,12], 9
  Output: 4
*/

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const middle = Math.round((left + right) / 2);
    const item = arr[middle];

    if (item === target) {
      return middle;
    }

    if (item < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return -1;
}

const assert = require('assert');
assert.equal(binarySearch([-1, 0, 3, 5, 9, 12], 9), 4);
