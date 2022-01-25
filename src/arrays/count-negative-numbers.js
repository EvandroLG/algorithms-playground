/*
  Count Negative Numbers

  Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, return the number of negative numbers in grid.

  Example:
  Input: [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
  Output: 8
*/

function countNegativeNumbers(grid) {
  let counter = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] < 0) {
        counter++;
      }
    }
  }

  return counter;
}

const assert = require('assert');
assert.equal(
  countNegativeNumbers([
    [4, 3, 2, -1],
    [3, 2, 1, -1],
    [1, 1, -1, -2],
    [-1, -1, -2, -3],
  ]),
  8
);
