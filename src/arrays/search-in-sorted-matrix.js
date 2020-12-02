/*
  Search In Sorted Matrix

  You're given a two-dimensional array (a matrix) of distinct integers and a target integer. Each row in the matrix is sorted, and each column is also sorted; the matrix doesn't necessarily have the same height and width.
  Write a function that returns an array of the row and column indices of the target integer if it's contained in the matrix, otherwise [-1, -1].

  Sample Input
  matrix = [
    [1, 4, 7, 12, 15, 1000],
    [2, 5, 19, 31, 32, 1001],
    [3, 8, 24, 33, 35, 1002],
    [40, 41, 42, 44, 45, 1003],
    [99, 100, 103, 106, 128, 1004],
  ]
  target = 44

  Sample Output
  [3, 3]
*/

function binarySearch(arr, target) {
  let first = 0;
  let last = arr.length - 1;

  while (first <= last) {
    const middle = Math.floor((first + last) / 2);
    const item = arr[middle];

    if (item < target) {
      first = middle + 1;
    } else if (item > target) {
      last = middle - 1;
    } else {
      return middle;
    }
  }

  return -1;
}

function searchInSortedMatrix(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    const col = arr[i];
    const colIndex = binarySearch(col, target);

    if (colIndex >= 0) {
      return [i, colIndex];
    }
  }

  return -1;
}

const assert = require('assert');
assert.deepEqual(
  searchInSortedMatrix(
    [
      [1, 4, 7, 12, 15, 1000],
      [2, 5, 19, 31, 32, 1001],
      [3, 8, 24, 33, 35, 1002],
      [40, 41, 42, 44, 45, 1003],
      [99, 100, 103, 106, 128, 1004],
    ],
    44
  ),
  [3, 3]
);
