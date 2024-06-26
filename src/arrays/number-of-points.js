/*
  Number Of Points

  You are given a 0-indexed 2D integer array nums representing the coordinates of the cars parking on a number line.
  For any index i, nums[i] = [starti, endi] where starti is the starting point of the ith car and endi is the ending point of the ith car.
  Return the number of integer points on the line that are covered with any part of a car.

  Example:
  Input: [[3,6],[1,5],[4,7]]
  Output: 7
*/

function numberOfPoints(arr) {
  const set = new Set();

  for (const [start, end] of arr) {
    for (let i = start; i <= end; i++) {
      set.add(i);
    }
  }

  return set.size;
}

const assert = require('assert');
assert.ok(
  numberOfPoints([
    [3, 6],
    [1, 5],
    [4, 7],
  ]),
  7
);
