/*
  Insert Intervals

  You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti.You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by start. 
  You are also given an interval newInterval = [start, end] that represents the start and end of another interval.
  Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

  Example:
  Input: [[1,3],[6,9]], [2,5]
  Output: [[1,5],[6,9]]
*/

function insertIntervals(intervals, newInterval) {
  intervals.push(newInterval);
  intervals.sort((a, b) => a[0] - b[0]);
  let curr = intervals[0];
  const output = [];

  for (let i = 1; i < intervals.length; i++) {
    if (curr[1] >= intervals[i][0]) {
      curr[1] = Math.max(curr[1], intervals[i][1]);
    } else {
      output.push(curr);
      curr = intervals[i];
    }
  }

  output.push(curr);

  return output;
}

const assert = require('assert');
assert.deepStrictEqual(
  insertIntervals(
    [
      [1, 3],
      [6, 9],
    ],
    [2, 5]
  ),
  [
    [1, 5],
    [6, 9],
  ]
);
