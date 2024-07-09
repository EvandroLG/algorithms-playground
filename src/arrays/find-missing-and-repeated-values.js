/*
  Find Missing And Repeated Values

  You are given a 0-indexed 2D integer matrix grid of size n * n with values in the range [1, n2].
  Each integer appears exactly once except a which appears twice and b which is missing.
  The task is to find the repeating and missing numbers a and b.
  Return a 0-indexed integer array ans of size 2 where ans[0] equals to a and ans[1] equals to b.

  Example:
  Input: [[9,1,7],[8,9,2],[3,4,6]]
  Output: [9,5]
*/

function findMissingAndRepeatedValues(grid) {
  const flatten = grid.flat(1);
  const set = new Set();
  const output = [];

  for (const item of flatten) {
    if (set.has(item)) {
      output[0] = item;
    }

    set.add(item);
  }

  output[1] = diff(set, flatten.length);

  return output;
}

function diff(set, limit) {
  for (const item of set) {
    const next = item + 1;

    if (next > limit) {
      continue;
    }

    if (!set.has(next)) {
      return next;
    }
  }

  return 1;
}

const assert = require('assert');
assert.deepEqual(
  findMissingAndRepeatedValues([
    [9, 1, 7],
    [8, 9, 2],
    [3, 4, 6],
  ]),
  [9, 5]
);
