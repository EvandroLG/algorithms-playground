/*
  Max Area Of Island


  You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical).
  You may assume all four edges of the grid are surrounded by water.
  The area of an island is the number of cells with a value 1 in the island.
  Return the maximum area of an island in grid. If there is no island, return 0.

  Example:
  Input:
  [
    [0,0,1,0,0,0,0,1,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,1,1,0,0,0],
    [0,1,1,0,1,0,0,0,0,0,0,0,0],
    [0,1,0,0,1,1,0,0,1,0,1,0,0],
    [0,1,0,0,1,1,0,0,1,1,1,0,0],
    [0,0,0,0,0,0,0,0,0,0,1,0,0],
    [0,0,0,0,0,0,0,1,1,1,0,0,0],
    [0,0,0,0,0,0,0,1,1,0,0,0,0]
  ]

  Output: 6
*/

function maxAreaOfIsland(grid) {
  const visited = new Set();
  let max = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      const result = traverse(grid, row, col, visited);
      max = Math.max(result, max);
    }
  }

  return max;
}

function traverse(grid, row, col, visited) {
  const rowInbound = row >= 0 && row < grid.length;
  const colInbound = col >= 0 && col < grid[0].length;

  if (!rowInbound || !colInbound || grid[row][col] === 0) {
    return 0;
  }

  const position = `${row},${col}`;

  if (visited.has(position)) {
    return 0;
  }

  visited.add(position);
  let counter = 1;

  counter += traverse(grid, row + 1, col, visited);
  counter += traverse(grid, row - 1, col, visited);
  counter += traverse(grid, row, col + 1, visited);
  counter += traverse(grid, row, col - 1, visited);

  return counter;
}

const assert = require('assert');

const grid = [
  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
];

assert.equal(maxAreaOfIsland(grid), 6);
