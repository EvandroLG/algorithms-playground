/*
  Word Search

  Given an m x n grid of characters board and a string word, return true if word exists in the grid.
  The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring.
  The same letter cell may not be used more than once.

  Example:
  Input: [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCCED"
  Output: true
*/

function wordSearch(board, word) {
  function hasMatch(i, j, s, memo) {
    const key = `${i}-${j}`;

    if (memo.has(key)) {
      return false;
    }

    memo.add(key);

    if (s === word) {
      return true;
    }

    const nextCharacter = word[s.length];

    if (i > 0 && board[i - 1][j] === nextCharacter) {
      if (hasMatch(i - 1, j, s + nextCharacter, memo)) {
        return true;
      }
    }

    if (i < board.length - 1 && board[i + 1][j] === nextCharacter) {
      if (hasMatch(i + 1, j, s + nextCharacter, memo)) {
        return true;
      }
    }

    if (j > 0 && board[i][j - 1] === nextCharacter) {
      if (hasMatch(i, j - 1, s + nextCharacter, memo)) {
        return true;
      }
    }

    if (j < board[0].length - 1 && board[i][j + 1] === nextCharacter) {
      if (hasMatch(i, j + 1, s + nextCharacter, memo)) {
        return true;
      }
    }

    memo.delete(key);

    return false;
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (word[0] === board[i][j]) {
        if (hasMatch(i, j, word[0], new Set())) {
          return true;
        }
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
