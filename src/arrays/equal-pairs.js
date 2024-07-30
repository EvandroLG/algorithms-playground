/*
  Equal Pairs

  Given a 0-indexed n x n integer matrix grid, return the number of pairs (ri, cj) such that row ri and column cj are equal.
  A row and column pair is considered equal if they contain the same elements in the same order (i.e., an equal array).

  Example:
  Input: [[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]]
  Output: 3
*/

function equalPairs(grid) {
  const row = buildRow(grid);
  const col = buildCol(grid);

  return row.reduce((acc, item) => {
    let index = col.indexOf(item);

    while (index >= 0) {
      acc++;
      index = col.indexOf(item, index + 1);
    }

    return acc;
  }, 0);
}

function buildRow(grid) {
  const arr = [];

  for (let i = 0; i < grid.length; i++) {
    const items = [];

    for (let j = 0; j < grid[0].length; j++) {
      items.push(grid[i][j]);
    }

    arr.push(items.join(','));
  }

  return arr;
}

function buildCol(grid) {
  const arr = [];

  for (let j = 0; j < grid[0].length; j++) {
    const items = [];

    for (let i = 0; i < grid.length; i++) {
      items.push(grid[i][j]);
    }

    arr.push(items.join(','));
  }

  return arr;
}

const assert = require('assert');
assert.strictEqual(
  equalPairs([
    [3, 1, 2, 2],
    [1, 4, 4, 5],
    [2, 4, 2, 2],
    [2, 4, 2, 2],
  ]),
  3
);
