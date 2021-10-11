/*
  Island Count

  Write a function that takes in a grid containing Ws and Ls.
  W represents water and L represents land. The function should return the number of islands on the grid.
  An island is a vertically or horizontally connected region of land.

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

  Output: 3
*/

function islandCount(grid) {
  const visited = new Set();
  let counter = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (traverse(grid, row, col, visited)) {
        counter++;
      }
    }
  }

  return counter;
}

function traverse(grid, row, col, visited) {
  const rowInbounds = row >= 0 && grid.length > row;
  const colInbounds = col >= 0 && grid[0].length > col;

  if (!rowInbounds || !colInbounds || grid[row][col] === 'W') {
    return false;
  }

  const points = `${row},${col}`;

  if (visited.has(points)) {
    return false;
  }

  visited.add(points);

  traverse(grid, row + 1, col, visited);
  traverse(grid, row - 1, col, visited);
  traverse(grid, row, col + 1, visited);
  traverse(grid, row, col - 1, visited);

  return true;
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

assert.equal(islandCount(grid), 3);
