/*
  Delete Columns

  You are given an array of n strings strs, all of the same length.
  The strings can be arranged such that there is one on each line, making a grid.
  You want to delete the columns that are not sorted lexicographically. In the above example (0-indexed), columns 0 ('a', 'b', 'c') and 2 ('c', 'e', 'e') are sorted, while column 1 ('b', 'c', 'a') is not, so you would delete column 1.
  Return the number of columns that you will delete.

  Example:
  Input: ["cba","daf","ghi"]
  Output: 1
*/

function deleteColumns(arr) {
  if (!arr.length) {
    return 0;
  }

  const size = arr[0].length;
  const deleted = new Set();

  for (let i = 0; i < arr.length - 1; i++) {
    let j = 0;

    while (j < size) {
      if (deleted.has(j)) {
        j++;
        continue;
      }

      if (!isOrdered(arr[i][j], arr[i + 1][j])) {
        deleted.add(j);
      }

      j++;
    }
  }

  return deleted.size;
}

function isOrdered(a, b) {
  const result = a.localeCompare(b);

  if (result === -1 || result === 0) {
    return true;
  }

  return false;
}

const assert = require('assert');
assert.equal(deleteColumns(['cba', 'daf', 'ghi']), 1);
