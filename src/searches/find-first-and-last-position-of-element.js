/*
  Find First And Last Position Of Element

  Given an array of integers `nums` sorted in non-decreasing order, find the starting and ending position of a given `target` value.
  If `target` is not found in the array, return `[-1, -1]`.
  You must write an algorithm with `O(log n)` runtime complexity.

  Example:
  Input: [5,7,7,8,8,10], 8
  Output: [3, 4]
*/

function searchRange(arr, target, left, right, isLeft) {
  const middle = Math.round((left + right) / 2);
  const item = arr[middle];

  if (left > right) {
    return -1;
  }

  if (item === target) {
    if (isLeft) {
      if (middle === left || arr[middle - 1] < target) {
        return middle;
      }

      return searchRange(arr, target, left, middle - 1, isLeft);
    } else {
      if (middle === right || arr[middle + 1] > target) {
        return middle;
      }

      return searchRange(arr, target, middle + 1, right, isLeft);
    }
  }

  if (item < target) {
    return searchRange(arr, target, middle + 1, right, isLeft);
  }

  return searchRange(arr, target, left, middle - 1, isLeft);
}

function findFirstAndLastPositionOfElement(arr, target) {
  const left = searchRange(arr, target, 0, arr.length - 1, true);

  if (left === -1) {
    return [-1, -1];
  }

  const right = searchRange(arr, target, 0, arr.length - 1, false);

  return [left, right];
}

const assert = require('assert');
assert.deepEqual(findFirstAndLastPositionOfElement([5, 7, 7, 8, 8, 10], 8), [
  3,
  4,
]);
