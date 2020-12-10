/*
  SquaresOfASortedArray
  Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
*/

function squaresOfASortedArray(arr) {
  return arr.map((n) => Math.pow(n, 2)).sort((a, b) => a - b);
}

const assert = require('assert');
assert.deepEqual(squaresOfASortedArray([-4, -1, 0, 3, 10]), [0, 1, 9, 16, 100]);
