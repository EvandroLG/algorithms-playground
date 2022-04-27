/*
  Count Servers That Communicate

  You are given a map of a server center, represented as a m * n integer matrix grid, where 1 means that on that cell there is a server and 0 means that it is no server.
  Two servers are said to communicate if they are on the same row or on the same column.

  Example:
  Input: [[1,1,0,0],[0,0,1,0],[0,0,1,0],[0,0,0,1]]
  Output: 4
*/

function countServers(grid) {
  let output = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] && hasConnection(grid, row, col)) {
        output++;
      }
    }
  }

  return output;
}

function hasConnection(grid, row, col) {
  return (
    traverseTop(grid, row - 1, col) ||
    traverseBottom(grid, row + 1, col) ||
    traverseRight(grid, row, col + 1) ||
    traverseLeft(grid, row, col - 1)
  );
}

function traverseTop(grid, row, col) {
  if (!isInbound(grid, row, col)) {
    return false;
  }

  if (grid[row][col]) {
    return true;
  }

  return traverseTop(grid, row - 1, col);
}

function traverseBottom(grid, row, col) {
  if (!isInbound(grid, row, col)) {
    return false;
  }

  if (grid[row][col]) {
    return true;
  }

  return traverseBottom(grid, row + 1, col);
}

function traverseLeft(grid, row, col) {
  if (!isInbound(grid, row, col)) {
    return false;
  }

  if (grid[row][col]) {
    return true;
  }

  return traverseLeft(grid, row, col - 1);
}

function traverseRight(grid, row, col) {
  if (!isInbound(grid, row, col)) {
    return false;
  }

  if (grid[row][col]) {
    return true;
  }

  return traverseRight(grid, row, col + 1);
}

function isInbound(grid, row, col) {
  const rowInbound = row >= 0 && row < grid.length;
  const colInbound = col >= 0 && col < grid[0].length;

  if (!rowInbound || !colInbound) {
    return false;
  }

  return true;
}

const assert = require('assert');
assert.equal(
  countServers([
    [1, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1],
  ]),
  4
);
