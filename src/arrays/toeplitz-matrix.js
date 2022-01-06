/*
  Toeplitz Matrix

  Given an m x n matrix, return true if the matrix is Toeplitz. Otherwise, return false.
  A matrix is Toeplitz if every diagonal from top-left to bottom-right has the same elements.

  Example:
  Input: [[1,2,3,4],[5,1,2,3],[9,5,1,2]]
  Output: true
*/

function toeplitzMatrix(arr) {
  const memo = new Map();

  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr[0].length; j++) {
      const key = i - j;
      const value = arr[i][j];

      if (!memo.has(key)) {
        memo.set(key, value);
      } else if (memo.get(key) !== value) {
        return false;
      }
    }
  }

  return true;
}

const assert = require('assert');
assert.ok(
  toeplitzMatrix([
    [1, 2, 3, 4],
    [5, 1, 2, 3],
    [9, 5, 1, 2],
  ])
);
