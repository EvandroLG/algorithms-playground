/*
  Shortest Path To Get Food

  You are starving and you want to eat food as quickly as possible.
  You want to find the shortest path to arrive at any food cell.
  You are given an m x n character matrix, grid, of these different types of cells:
  - '*' is your location. There is exactly one '*' cell.
  - '#' is a food cell. There may be multiple food cells.
  - 'O' is free space, and you can travel through these cells.
  - 'X' is an obstacle, and you cannot travel through these cells.
  You can travel to any adjacent cell north, east, south, or west of your current location if there is not an obstacle.
  Return the length of the shortest path for you to reach any food cell. If there is no path for you to reach food, return -1.

  Example:
  Input: [["X","X","X","X","X","X"],["X","*","O","O","O","X"],["X","O","O","#","O","X"],["X","X","X","X","X","X"]]
  Output: 3
*/

function shortestPathToGetFood(grid) {
  const start = getStartLocation(grid);
  const visited = new Set();
  const queue = [];
  queue.push([...start, 1]);
  visited.add(`${start[0]}-${start[1]}`);

  const dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  let result = Infinity;

  while (queue.length) {
    const [row, col, steps] = queue.shift();

    for (const [dirRow, dirCol] of dirs) {
      const newRow = row + dirRow;
      const newCol = col + dirCol;
      const key = `${newRow}-${newCol}`;

      if (visited.has(key)) {
        continue;
      }

      if (newRow < 0 || newRow >= grid.length) {
        continue;
      }

      if (newCol < 0 || newCol >= grid[0].length) {
        continue;
      }

      if (grid[newRow][newCol] === 'X') {
        continue;
      }

      if (grid[newRow][newCol] === '#') {
        result = Math.min(result, steps);
        continue;
      }

      queue.push([newRow, newCol, steps + 1]);
      visited.add(key);
    }
  }

  return result === Infinity ? -1 : result;
}

function getStartLocation(grid) {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === '*') {
        return [i, j];
      }
    }
  }
}

const assert = require('assert');
const grid = [
  ['X', 'X', 'X', 'X', 'X', 'X'],
  ['X', '*', 'O', 'O', 'O', 'X'],
  ['X', 'O', 'O', '#', 'O', 'X'],
  ['X', 'X', 'X', 'X', 'X', 'X'],
];

assert.deepStrictEqual(shortestPathToGetFood(grid), 3);
