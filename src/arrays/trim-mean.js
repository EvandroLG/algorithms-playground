/*
  Trim Mean

  Given an integer array arr, return the mean of the remaining integers after removing the smallest 5% and the largest 5% of the elements.
  Answers within 10-5 of the actual answer will be considered accepted.

  Example:
  Input: [6,2,7,5,1,2,0,3,10,2,5,0,5,5,0,8,7,6,8,0]
  Output: 4.00000
*/

function trimMean(arr) {
  const sorted = arr.slice().sort((a, b) => a - b);
  const removals = Math.round((5 / 100) * sorted.length);
  let sum = 0;
  let counter = 0;

  for (let i = removals; i < sorted.length - removals; i++) {
    sum += sorted[i];
    counter++;
  }

  return sum / counter;
}

const assert = require('assert');
assert.equal(
  trimMean([6, 2, 7, 5, 1, 2, 0, 3, 10, 2, 5, 0, 5, 5, 0, 8, 7, 6, 8, 0]),
  4.0
);
