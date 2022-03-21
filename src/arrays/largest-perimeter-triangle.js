/*
  Largest Perimeter Triangle

  Given an integer array nums, return the largest perimeter of a triangle with a non-zero area, formed from three of these lengths.
  If it's impossible, return 0;

  Example:
  Input: [2,1,2]
  Output: 5
*/

function largestPerimeterTriangle(arr) {
  const sorted = arr.slice().sort((a, b) => a - b);

  for (let i = arr.length - 3; i >= 0; i--) {
    if (sorted[i] + sorted[i + 1] >= sorted[i + 2]) {
      return sorted[i] + sorted[i + 1] + sorted[i + 2];
    }
  }

  return 0;
}

const assert = require('assert');
assert.equal(largestPerimeterTriangle([2, 1, 2]), 5);
