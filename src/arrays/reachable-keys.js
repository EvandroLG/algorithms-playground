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
    const delta = [-2, -1, 1, 2];

    for (const rowMove of delta) {
      for (const colMove of delta) {
        if (Math.abs(rowMove) == Math.abs(colMove)) {
          continue;
        }

        if (
          rowIdx + rowMove >= 0 &&
          rowIdx + rowMove <= 3 &&
          colIdx + colMove >= 0 &&
          colIdx + colMove <= 2 &&
          dialer[rowIdx + rowMove][colIdx + colMove] !== undefined
        ) {
          output.push(dialer[rowIdx + rowMove][colIdx + colMove]);
        }
      }
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
