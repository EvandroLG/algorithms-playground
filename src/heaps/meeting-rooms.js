/*
  Meeting Rooms

  Given an array of meeting time intervals intervals where intervals[i] = [starti, endi], return the minimum number of conference rooms required.

  Example:
  Input: [[0,30],[5,10],[15,20]]
  Output: 2
*/

const PriorityQueue = require('./priority-queue');

function meetingRooms(arr) {
  if (!arr.length) {
    return 0;
  }

  const sorted = arr.slice().sort((a, b) => a[0] - b[0]);
  const allocator = new PriorityQueue((a, b) => a - b);

  allocator.add(sorted[0][1]);

  for (let i = 1; i < sorted.length; i++) {
    const item = sorted[i];

    if (item[0] >= allocator.peek()) {
      allocator.poll();
    }

    allocator.add(item[1]);
  }

  return allocator.size();
}

const assert = require('assert');
assert.equal(
  meetingRooms([
    [0, 30],
    [5, 10],
    [15, 20],
  ]),
  2
);
