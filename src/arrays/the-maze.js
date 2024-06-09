/*
  The Maze

  There is a ball in a maze with empty spaces (represented as 0) and walls (represented as 1).
  The ball can go through the empty spaces by rolling up, down, left or right, but it won't stop rolling until hitting a wall.
  When the ball stops, it could choose the next direction.
  Given the m x n maze, the ball's start position and the destination, where start = [startrow, startcol] and destination = [destinationrow, destinationcol], return true if the ball can stop at the destination, otherwise return false.
  You may assume that the borders of the maze are all walls.

  Example:
  Input: [[0,0,1,0,0],[0,0,0,0,0],[0,0,0,1,0],[1,1,0,1,1],[0,0,0,0,0]], [0,4], [4,4]
  Output: true
*/

function theMaze(maze, start, destination) {
  const WALL = 1;
  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  const memo = new Set();

  function isValid(row, col) {
    if (row < 0 || col < 0) {
      return false;
    }

    if (row >= maze.length || col >= maze[0].length) {
      return false;
    }

    if (maze[row][col] === WALL) {
      return false;
    }

    return true;
  }

  function helper(row, col) {
    if (!isValid(row, col)) {
      return false;
    }

    if (row === destination[0] && col === destination[1]) {
      return true;
    }

    const key = `${row}-${col}`;

    if (memo.has(key)) {
      return false;
    }

    memo.add(key);

    for (const [directionRow, directionCol] of directions) {
      let newRow = row;
      let newCol = col;

      while (isValid(newRow + directionRow, newCol + directionCol)) {
        newRow += directionRow;
        newCol += directionCol;
      }

      if (helper(newRow, newCol)) {
        return true;
      }
    }

    return false;
  }

  return helper(start[0], start[1]);
}

const assert = require('assert');
assert.ok(
  theMaze(
    [
      [0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 1, 0],
      [1, 1, 0, 1, 1],
      [0, 0, 0, 0, 0],
    ],
    [0, 4],
    [4, 4]
  )
);
