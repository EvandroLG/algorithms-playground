/*
  Smallest Common Element

  Given an m x n matrix mat where every row is sorted in strictly increasing order, return the smallest common element in all rows.

  Example:
  Input: [[1,2,3,4,5],[2,4,5,8,10],[3,5,7,9,11],[1,3,5,7,9]]
  Output: 5
*/

function smallestCommonElement(arr) {
  for (const item of arr[0]) {
    for (let i = 1; i < arr.length; i++) {
      if (!search(arr[i], item)) {
        found = 1;
        break;
      }

      if (i === arr.length - 1) {
        return item;
      }
    }
  }

  return -1;
}

function search(arr, target) {
  return (function binarySearch(left, right) {
    if (left > right) {
      return false;
    }

    const middle = Math.floor((left + right) / 2);
    const item = arr[middle];

    if (item === target) {
      return true;
    }

    if (item < target) {
      return binarySearch(middle + 1, right);
    }

    return binarySearch(left, middle - 1);
  })(0, arr.length - 1);
}

const assert = require('assert');
assert.equal(
  smallestCommonElement([
    [1, 2, 3, 4, 5],
    [2, 4, 5, 8, 10],
    [3, 5, 7, 9, 11],
    [1, 3, 5, 7, 9],
  ]),
  5
);
