/*
  Delete Greatest Value

  You are given an m x n matrix grid consisting of positive integers.
  Perform the following operation until grid becomes empty:
  - Delete the element with the greatest value from each row. If multiple such elements exist, delete any of them.
  - Add the maximum of deleted elements to the answer.
  Note that the number of columns decreases by one after each operation.
  Return the answer after performing the operations described above.

  Example:
  Input: [[1,2,4],[3,3,1]]
  Output: 8
*/

function deleteGreatestValue(grid) {
  const results = [];

  while (grid[0].length) {
    let max = -Infinity;

    for (let i = 0; i < grid.length; i++) {
      const idx = maxValue(grid[i]);
      const value = grid[i].splice(idx, 1)[0];
      max = Math.max(max, value);
    }

    results.push(max);
  }

  return results.reduce((acc, item) => acc + item);
}

function maxValue(arr) {
  return arr.reduce(
    (acc, item, idx) => {
      if (item > acc.item) {
        return { idx, item };
      }

      return acc;
    },
    { idx: null, item: -Infinity }
  ).idx;
}

const assert = require('assert');
assert.equal(
  deleteGreatestValue([
    [1, 2, 4],
    [3, 3, 1],
  ]),
  8
);
