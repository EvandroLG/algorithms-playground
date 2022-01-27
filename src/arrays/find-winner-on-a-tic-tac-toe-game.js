/*
  Find Winner On A Tic Tac Toe Game

  Tic-tac-toe is played by two players A and B on a 3 x 3 grid. The rules of Tic-Tac-Toe are:
  - Players take turns placing characters into empty squares ' '.
  - The first player A always places 'X' characters, while the second player B always places 'O' characters.
  - 'X' and 'O' characters are always placed into empty squares, never on filled ones.
  - The game ends when there are three of the same (non-empty) character filling any row, column, or diagonal.
  - The game also ends if all squares are non-empty.
  - No more moves can be played if the game is over.

  Example:
  Input: [[0,0],[2,0],[1,1],[2,1],[2,2]]
  Output: 'A'
*/

function findWinnerOnATicTacToeGame(moves) {
  const grid = createGrid();
  let symbol = 'x';

  for (const [row, col] of moves) {
    grid[row][col] = symbol;
    symbol = symbol === 'x' ? 'o' : 'x';
  }

  return getWinner(grid, moves);
}

function createGrid() {
  const grid = [];
  const row = Array(3).fill('');

  for (let i = 0; i < 3; i++) {
    grid.push(row.slice());
  }

  return grid;
}

function getWinner(grid, moves) {
  if (findWinner(grid, 'x')) {
    return 'A';
  }

  if (findWinner(grid, 'o')) {
    return 'B';
  }

  if (moves.length < 9) {
    return 'Pending';
  }

  return 'Draw';
}

function findWinner(grid, checker) {
  return (
    grid[0].every((col) => col === checker) ||
    grid[1].every((col) => col === checker) ||
    grid[2].every((col) => col === checker) ||
    grid.every((row) => row[0] === checker) ||
    grid.every((row) => row[1] === checker) ||
    grid.every((row) => row[2] === checker) ||
    findWinnerLeft(grid, checker) ||
    findWinnerRight(grid, checker)
  );
}

function findWinnerLeft(grid, checker) {
  let p1 = 0;
  let p2 = 0;

  while (p2 < 3) {
    if (grid[p1][p2] !== checker) {
      return false;
    }

    p1++;
    p2++;
  }

  return true;
}

function findWinnerRight(grid, checker) {
  let p1 = 0;
  let p2 = 2;

  while (p1 < 3) {
    if (grid[p1][p2] !== checker) {
      return false;
    }

    p1++;
    p2--;
  }

  return true;
}

const assert = require('assert');
assert.equal(
  findWinnerOnATicTacToeGame([
    [0, 0],
    [2, 0],
    [1, 1],
    [2, 1],
    [2, 2],
  ]),
  'A'
);
