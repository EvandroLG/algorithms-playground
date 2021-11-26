/*
  Search Insert Position

  Given a sorted array of distinct integers and a target value, return the index if the target is found.
  If not, return the index where it would be if it were inserted in order.
  You must write an algorithm with O(log n) runtime complexity.

  Example:
  Input: [1,3,5,6], 2
  Output: 1
*/

function searchInsertPosition(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
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

  return left;
}

const assert = require('assert');
assert.equal(searchInsertPosition([1, 3, 5, 6], 2), 1);
