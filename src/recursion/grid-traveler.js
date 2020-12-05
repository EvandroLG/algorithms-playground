/*
  GridTraveler
  Say that you're a traveler on a 2d grid. You begin in the top-left corner and your goal is to travel to the bottom-right corner. You may only move down o right.

  Example 1:
  Input: 3, 3
  Output: 6
*/

function gridTraveler(rows, cols) {
  if (rows === 0 || cols === 0) {
    return 0;
  }

  if (rows === 1 && cols === 1) {
    return 1;
  }

  return gridTraveler(rows - 1, cols) + gridTraveler(rows, cols - 1);
}

const assert = require('assert');
assert.deepEqual(gridTraveler(8, 0), 0);
assert.deepEqual(gridTraveler(1, 1), 1);
assert.deepEqual(gridTraveler(2, 3), 3);
assert.deepEqual(gridTraveler(3, 3), 6);
