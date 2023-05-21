/*
  Reachable Keys

  Return which digits a Knight's move can hop to from a given starting digit/key.

  Example:
  Input: 4
  Output: [3, 9, 0]
*/

const dialer = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [, 0],
];

function reachableKeys(n) {
  for (const [rowKey, row] of Object.entries(dialer)) {
    const rowIdx = +rowKey;
    const colIdx = row.indexOf(n);
    const found = colIdx !== -1;

    if (!found) {
      continue;
    }

    const output = [];

    if (dialer[rowIdx + 1]?.[colIdx + 2] !== undefined) {
      output.push(dialer[rowIdx + 1][colIdx + 2]);
    }

    if (dialer[rowIdx - 1]?.[colIdx + 2] !== undefined) {
      output.push(dialer[rowIdx - 1][colIdx + 2]);
    }

    if (dialer[rowIdx + 1]?.[colIdx - 2] !== undefined) {
      output.push(dialer[rowIdx + 1][colIdx - 2]);
    }

    if (dialer[rowIdx + 2]?.[colIdx + 1] !== undefined) {
      output.push(dialer[rowIdx + 2][colIdx + 1]);
    }

    if (dialer[rowIdx - 2]?.[colIdx + 1] !== undefined) {
      output.push(dialer[rowIdx - 2][colIdx + 1]);
    }

    if (dialer[rowIdx + 2]?.[colIdx - 1] !== undefined) {
      output.push(dialer[rowIdx + 2][colIdx - 1]);
    }

    return output;
  }

  return [];
}

const assert = require('assert');
assert.deepEqual(
  reachableKeys(4).sort((a, b) => a - b),
  [0, 3, 9]
);
