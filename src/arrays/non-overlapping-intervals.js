/*
  Non Overlapping Intervals

  Given an array of intervals intervals where intervals[i] = [starti, endi], return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.

  Example:
  Input: [[1,2],[2,3],[3,4],[1,3]]
  Output: 1
*/

function nonOverlappingIntervals(intervals) {
  const sorted = intervals.slice().sort((a, b) => a[1] - b[1]);
  let lastItem = sorted[0];
  let counter = 1;

  for (let i = 1; i < sorted.length; i++) {
    const item = sorted[i];

    if (item[0] >= lastItem[1]) {
      counter++;
      lastItem = item;
    }
  }

  return sorted.length - counter;
}

const assert = require('assert');
assert.equal(
  nonOverlappingIntervals([
    [1, 2],
    [2, 3],
    [3, 4],
    [1, 3],
  ]),
  1
);
