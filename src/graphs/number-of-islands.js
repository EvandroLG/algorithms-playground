/*
  Number Of Islands

  Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.
  An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.
  You may assume all four edges of the grid are all surrounded by water.

  Example:
  Input: [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
  ]
  
  Output: true
*/

function numberOfIslands(grid) {
  const WATER = '0';
  const LAND = '1';
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  const visited = new Set();
  let counter = 0;

  function isValid(row, col) {
    if (row < 0 || col < 0) {
      return false;
    }

    if (row >= grid.length || col >= grid[0].length) {
      return false;
    }

    if (grid[row][col] === WATER) {
      return false;
    }

    return true;
  }

  function traverse(row, col) {
    if (!isValid(row, col)) {
      return;
    }

    const key = `${row}-${col}`;

    if (visited.has(key)) {
      return;
    }

    visited.add(key);

    for (const [rowDirection, colDirection] of directions) {
      traverse(row + rowDirection, col + colDirection);
    }
  }

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      const key = `${row}-${col}`;

      if (grid[row][col] === LAND && !visited.has(key)) {
        traverse(row, col);
        counter++;
      }
    }
  }

  return counter;
}

const assert = require('assert');
assert.ok(
  numberOfIslands([
    ['1', '1', '1', '1', '0'],
    ['1', '1', '0', '1', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '0', '0', '0'],
  ])
);
