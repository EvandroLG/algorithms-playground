/*
  Merge Intervals

  Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

  Example:
  Input: [[1,3],[2,6],[8,10],[15,18]]
  Output: [[1, 6], [8, 10], [15, 18]]
*/

function mergeIntervals(arr) {
  const sorted = arr.slice().sort((a, b) => a[0] - b[0]);
  const output = [];

  for (const item of sorted) {
    const lastIdx = output.length - 1;

    if (!output.length || output[lastIdx][1] < item[0]) {
      output.push(item);
    } else {
      output[lastIdx][1] = Math.max(output[lastIdx][1], item[1]);
    }
  }

  return output;
}

const assert = require('assert');
assert.deepEqual(
  mergeIntervals([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ]),
  [
    [1, 6],
    [8, 10],
    [15, 18],
  ]
);
