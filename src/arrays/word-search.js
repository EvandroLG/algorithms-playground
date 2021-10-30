/*
  Word Search

  Given an m x n grid of characters board and a string word, return true if word exists in the grid.
  The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

  Example:
  Input: [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCCED"
  Output: true
*/

function wordSearch(board, word) {
  const backtrack = (row, col, suffix = word, memo = new Set()) => {
    if (!suffix.length) {
      return true;
    }

    const rowInbounce = row >= 0 && row < board.length;
    const colInbounce = col >= 0 && col < board[0].length;
    const key = `${row},${col}`;

    if (
      !rowInbounce ||
      !colInbounce ||
      memo.has(key) ||
      suffix[0] !== board[row][col]
    ) {
      return false;
    }

    memo.add(key);
    const arr = Array.from(memo);

    const left = backtrack(row, col - 1, suffix.slice(1), new Set(arr));
    const right = backtrack(row, col + 1, suffix.slice(1), new Set(arr));
    const up = backtrack(row - 1, col, suffix.slice(1), new Set(arr));
    const down = backtrack(row + 1, col, suffix.slice(1), new Set(arr));

    return left || right || up || down;
  };

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      if (backtrack(row, col)) {
        return true;
      }
    }
  }

  return false;
}

const assert = require('assert');
assert.ok(
  wordSearch(
    [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E'],
    ],
    'ABCCED'
  )
);
