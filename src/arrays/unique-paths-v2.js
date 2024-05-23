/*
  Unique Paths V2

  You are given an m x n integer array grid. There is a robot initially located at the top-left corner (i.e., grid[0][0]).
  The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.
  An obstacle and space are marked as 1 or 0 respectively in grid.
  A path that the robot takes cannot include any square that is an obstacle.
  Return the number of possible unique paths that the robot can take to reach the bottom-right corner.

  Example:
  Input: [[0,0,0],[0,1,0],[0,0,0]]
  Output: 2
*/

function uniquePathsV2(grid) {
  const rowBoundary = grid.length - 1;
  const colBoundary = grid[0].length - 1;
  const memo = {};

  function helper(row, col) {
    if (row > rowBoundary || col > colBoundary) {
      return 0;
    }

    if (grid[row][col] === 1) {
      return 0;
    }

    if (row === rowBoundary && col === colBoundary) {
      return 1;
    }

    const key = `${row}-${col}`;

    if (memo.hasOwnProperty(key)) {
      return memo[key];
    }

    const right = helper(row, col + 1);
    const bottom = helper(row + 1, col);

    memo[key] = right + bottom;

    return memo[key];
  }

  return helper(0, 0);
}

const assert = require('assert');
assert.strictEqual(
  uniquePathsV2([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ]),
  2
);
