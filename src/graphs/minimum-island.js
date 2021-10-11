/*
  Minimum Island

  Write a function, minimumIsland, that takes in a grid containing Ws and Ls.
  W represents water and L represents land. The function should return the size of the smallest island.
  An island is a vertically or horizontally connected region of land.
  You may assume that the grid contains at least one island.

  Example:
  Input:
  [
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'W'],
    ['W', 'W', 'L', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['L', 'L', 'W', 'W', 'W'],
  ]

  Output: 2
*/

function minimumIsland(grid) {
  const visited = new Set();
  let min = Infinity;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      const result = traverse(grid, row, col, visited);

      if (result) {
        min = Math.min(result, min);
      }
    }
  }

  return min;
}

function traverse(grid, row, col, visited) {
  const rowInbound = row >= 0 && row < grid.length;
  const colInbound = col >= 0 && col < grid[0].length;

  if (!rowInbound || !colInbound || grid[row][col] === 'W') {
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
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'L', 'W'],
  ['W', 'W', 'L', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['L', 'L', 'W', 'W', 'W'],
];

assert.equal(minimumIsland(grid), 2);
