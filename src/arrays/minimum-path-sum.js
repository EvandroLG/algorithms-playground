/*
  Minimum Path Sum

  Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.
  Note: You can only move either down or right at any point in time.

  Example:
  Input: [[1,3,1],[1,5,1],[4,2,1]]
  Output: 7
*/

function minimumPathSum(grid) {
  return minimumPathHelper(grid, 0, 0);
}

function minimumPathHelper(grid, i, j, sum = 0) {
  if (i === grid.length - 1 && j === grid[0].length - 1) {
    return sum + grid[i][j];
  }

  sum += grid[i][j];

  if (i === grid.length - 1 || j === grid[0].length - 1) {
    if (i === grid.length - 1) {
      return minimumPathHelper(grid, i, j + 1, sum);
    }

    if (j === grid[0].length - 1) {
      return minimumPathHelper(grid, i + 1, j, sum);
    }
  }

  return Math.min(
    minimumPathHelper(grid, i + 1, j, sum),
    minimumPathHelper(grid, i, j + 1, sum)
  );
}

const assert = require('assert');
assert.equal(
  minimumPathSum([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1],
  ]),
  7
);
