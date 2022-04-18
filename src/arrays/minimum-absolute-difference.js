/*
  Minimum Absolute Difference

  Given an array of distinct integers arr, find all pairs of elements with the minimum absolute difference of any two elements.

  Example:
  Input: [3,8,-10,23,19,-4,-14,27]
  Output: [[-14,-10],[19,23],[23,27]]
*/

function minimumAbsoluteDifference(arr) {
  const sorted = arr.sort((a, b) => a - b);
  const output = [];
  let minDiff = Infinity;

  for (let i = 0; i < arr.length - 1; i++) {
    const diff = sorted[i + 1] - sorted[i];

    if (diff > minDiff) {
      continue;
    }

    if (diff < minDiff) {
      minDiff = diff;
      output.length = 0;
    }

    output.push([sorted[i], sorted[i + 1]]);
  }

  return output;
}

const assert = require('assert');
assert.deepEqual(minimumAbsoluteDifference([3, 8, -10, 23, 19, -4, -14, 27]), [
  [-14, -10],
  [19, 23],
  [23, 27],
]);
