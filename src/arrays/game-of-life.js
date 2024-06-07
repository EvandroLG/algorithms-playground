/*
  Game Of Life

  The board is made up of an m x n grid of cells, where each cell has an initial state: live (represented by a 1) or dead (represented by a 0).
  Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):
  1) Any live cell with fewer than two live neighbors dies as if caused by under-population.
  2) Any live cell with two or three live neighbors lives on to the next generation.
  3) Any live cell with more than three live neighbors dies, as if by over-population.
  4) Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
  The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously.
  Given the current state of the m x n grid board, return the next state.

  Example:
  Input: [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]
  Output: [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]
*/

function gameOfLife(board) {
  const copy = getCopy(board);
  const LIVE = 1;
  const DEAD = 0;

  function getLiveNeighbors(i, j) {
    let counter = 0;
    const rowBoundary = copy.length - 1;
    const colBoundary = copy[0].length - 1;

    if (i < rowBoundary && copy[i + 1][j] === LIVE) {
      counter++;
    }

    if (j < colBoundary && copy[i][j + 1] === LIVE) {
      counter++;
    }

    if (i > 0 && copy[i - 1][j] === LIVE) {
      counter++;
    }

    if (j > 0 && copy[i][j - 1] === LIVE) {
      counter++;
    }

    if (i > 0 && j > 0 && copy[i - 1][j - 1] === LIVE) {
      counter++;
    }

    if (i > 0 && j < colBoundary && copy[i - 1][j + 1] === LIVE) {
      counter++;
    }

    if (i < rowBoundary && j < colBoundary && copy[i + 1][j + 1] === LIVE) {
      counter++;
    }

    if (i < rowBoundary && j > 0 && copy[i + 1][j - 1] === LIVE) {
      counter++;
    }

    return counter;
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      const liveNeighbors = getLiveNeighbors(i, j);

      if (copy[i][j] === LIVE) {
        if (liveNeighbors < 2 || liveNeighbors > 3) {
          board[i][j] = DEAD;
        }
      } else {
        if (liveNeighbors === 3) {
          board[i][j] = LIVE;
        }
      }
    }
  }
}

function getCopy(arr) {
  const output = [];

  for (const item of arr) {
    output.push(item.slice());
  }

  return output;
}

const assert = require('assert');

const board = [
  [0, 1, 0],
  [0, 0, 1],
  [1, 1, 1],
  [0, 0, 0],
];
gameOfLife(board);

assert.deepStrictEqual(board, [
  [0, 0, 0],
  [1, 0, 1],
  [0, 1, 1],
  [0, 1, 0],
]);
