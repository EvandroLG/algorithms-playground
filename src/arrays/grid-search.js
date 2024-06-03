/*
  Grid Search

  Given an array of strings of digits, try to find the occurrence of a given pattern of digits.
  In the grid and pattern arrays, each string represents a row in the grid.

  Example:
  Input: ["1234567890", "0987654321", "1111111111", "1111111111", "2222222222"], ["876543", "111111", "111111"]
  Output: true
*/

function gridSearch(grid, patterns) {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === patterns[0][0]) {
        const sliced = grid[i].slice(j, j + patterns[0].length);

        if (sliced === patterns[0]) {
          const startIdx = j;
          const endIdx = j + patterns[0].length;
          if (searchForNextMatches(grid, patterns, i, startIdx, endIdx)) {
            return true;
          }
        }
      }
    }
  }

  return false;
}

function searchForNextMatches(grid, patterns, gridIdx, startIdx, endIdx) {
  let idx = 1;

  while (idx < patterns.length) {
    const sliced = grid[gridIdx + idx].slice(startIdx, endIdx);

    if (sliced !== patterns[idx]) {
      return false;
    }

    idx++;
  }

  return true;
}

const assert = require('assert');
assert.ok(
  gridSearch(
    ['1234567890', '0987654321', '1111111111', '1111111111', '2222222222'],
    ['876543', '111111', '111111']
  )
);
