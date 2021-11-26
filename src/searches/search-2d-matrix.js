/*
  Search 2d Matrix

  Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:
  - Integers in each row are sorted from left to right.
  - The first integer of each row is greater than the last integer of the previous row.

  Example:
  Input: [[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3
  Output: true
*/

function search(arr, target, left, right) {
  if (left > right) {
    return false;
  }

  const middle = Math.ceil(left + right / 2);

  if (arr[middle] === target) {
    return true;
  }

  if (arr[middle] < target) {
    return search(arr, target, middle + 1, right);
  }

  return search(arr, target, left, middle - 1);
}

function search2dMatrix(arr, target) {
  const flatted = arr.reduce((acc, item) => acc.concat(item), []);
  return search(flatted, target, 0, flatted.length - 1);
}

const assert = require('assert');
assert.ok(
  search2dMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    3
  )
);
