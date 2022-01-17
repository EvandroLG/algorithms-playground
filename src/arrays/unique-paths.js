/*
  Unique Paths

  There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]).
  The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]).
  The robot can only move either down or right at any point in time.

  Example:
  Input: 3, 7
  Output: 28
*/

function uniquePaths(m, n) {
  const grid = createGrid(m, n);

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      grid[i][j] = grid[i - 1][j] + grid[i][j - 1];
    }
  }

  return grid[m - 1][n - 1];
}

function createGrid(m, n) {
  const grid = Array(m).fill(Array(n).fill(0));

  for (let i = 0; i < m; i++) {
    if (i === 0) {
      grid[0] = grid[0].map((_) => 1);
    } else {
      grid[i][0] = 1;
    }
  }

  return grid;
}

const assert = require('assert');
assert.equal(uniquePaths(3, 7), 28);
