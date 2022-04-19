/*
  Meeting Rooms

  Given an array of meeting time intervals where intervals[i] = [starti, endi], determine if a person could attend all meetings.

  Example:
  Input: [[0,30],[5,10],[15,20]]
  Output: false;
*/

function meetingRooms(intervals) {
  const sorted = intervals.slice().sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < sorted.length - 1; i++) {
    if (sorted[i][1] > sorted[i + 1][0]) {
      return false;
    }
  }

  return true;
}

const assert = require('assert');
assert.ok(
  !meetingRooms([
    [0, 30],
    [5, 10],
    [15, 20],
  ])
);
