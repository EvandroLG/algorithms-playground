/*
  Min Falling Path Sum

  Given an n x n array of integers matrix, return the minimum sum of any falling path through matrix.
  A falling path starts at any element in the first row and chooses the element in the next row that is either directly below or diagonally left/right.
  Specifically, the next element from position (row, col) will be (row + 1, col - 1), (row + 1, col), or (row + 1, col + 1).

  Example:
  Input: [[2,1,3],[6,5,4],[7,8,9]]
  Output: 13
*/

function minFallingPathSum(matrix) {
  let min = Infinity;
  const memo = {};

  for (let i = 0; i < matrix[0].length; i++) {
    min = Math.min(min, helper(matrix, 0, i, memo));
  }

  return min;
}

function helper(matrix, row, col, memo) {
  const key = `${row}-${col}`;

  if (memo.hasOwnProperty(key)) {
    return memo[key];
  }

  if (row === matrix.length - 1) {
    return matrix[row][col];
  }

  let sum =
    matrix[row][col] +
    Math.min(
      col > 0 ? helper(matrix, row + 1, col - 1, memo) : Infinity,
      helper(matrix, row + 1, col, memo),
      col < matrix[0].length - 1
        ? helper(matrix, row + 1, col + 1, memo)
        : Infinity
    );

  memo[key] = sum;

  return sum;
}

const assert = require('assert');
assert.strictEqual(
  minFallingPathSum([
    [2, 1, 3],
    [6, 5, 4],
    [7, 8, 9],
  ]),
  13
);
