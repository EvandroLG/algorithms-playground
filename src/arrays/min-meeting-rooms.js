/*
  Min Meeting Rooms

  Given an array of meeting time intervals intervals where intervals[i] = [starti, endi], return the minimum number of conference rooms required.

  Example:
  Input: [[0,30],[5,10],[15,20]]
  Output: 2
*/

function minMeetingRooms(intervals) {
  const start = intervals.map((interval) => interval[0]).sort((a, b) => a - b);
  const end = intervals.map((interval) => interval[1]).sort((a, b) => a - b);
  let p1 = 0;
  let p2 = 0;
  let max = 0;
  let count = 0;

  while (p1 < intervals.length) {
    if (start[p1] < end[p2]) {
      p1++;
      count++;
    } else {
      p2++;
      count--;
    }

    max = Math.max(max, count);
  }

  return max;
}

const assert = require('assert');
assert.deepStrictEqual(
  minMeetingRooms([
    [0, 30],
    [5, 10],
    [15, 20],
  ]),
  2
);
