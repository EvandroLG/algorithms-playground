/*
  GridTraveler
  Say that you're a traveler on a 2d grid. You begin in the top-left corner and your goal is to travel to the bottom-right corner. You may only move down o right.
  In how many ways can you travel to the goal on a grid with dimensions m * n?

  Example 1:
  Input: 3, 3
  Output: 6
*/

function getKey(rows, cols) {
  return `${rows},${cols}`;
}

function gridTraveler(rows, cols, _memo = {}) {
  const key = getKey(rows, cols);

  if (key in _memo) {
    return _memo[key];
  }

  if (rows === 0 || cols === 0) {
    return 0;
  }

  if (rows === 1 && cols === 1) {
    return 1;
  }

  _memo[key] =
    gridTraveler(rows - 1, cols, _memo) + gridTraveler(rows, cols - 1, _memo);

  return _memo[key];
}

const assert = require('assert');
assert.deepEqual(gridTraveler(8, 0), 0);
assert.deepEqual(gridTraveler(1, 1), 1);
assert.deepEqual(gridTraveler(2, 3), 3);
assert.deepEqual(gridTraveler(3, 3), 6);
assert.deepEqual(gridTraveler(18, 18), 2333606220);
