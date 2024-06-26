/*
  Count Days

  You are given a positive integer days representing the total number of days an employee is available for work (starting from day 1).
  You are also given a 2D array meetings of size n where, meetings[i] = [start_i, end_i] represents the starting and ending days of meeting i (inclusive).
  Return the count of days when the employee is available for work but no meetings are scheduled.

  Example:
  Input: 10, [[5,7],[1,3],[9,10]]
  Output: 2
*/

function countDays(days, meetings) {
  const merged = mergeIntervals(meetings);
  let result = 0;

  for (let i = 0; i < merged.length - 1; i++) {
    const curr = merged[i];
    const next = merged[i + 1];
    const diff = next[0] - curr[1] - 1;
    result += diff;
  }

  const beforeFirst = merged[0][0] - 1;
  result += beforeFirst;

  const afterLast = days - merged[merged.length - 1][1];
  result += afterLast;

  return result;
}

function mergeIntervals(meetings) {
  const merged = [];
  meetings.sort((a, b) => a[0] - b[0]);

  for (const [start, end] of meetings) {
    const lastIdx = merged.length - 1;

    if (!merged.length || merged[lastIdx][1] <= start) {
      merged.push([start, end]);
    } else {
      merged[lastIdx][1] = Math.max(end, merged[lastIdx][1]);
    }
  }

  return merged;
}

const assert = require('assert');
assert.strictEqual(
  countDays(10, [
    [5, 7],
    [1, 3],
    [9, 10],
  ]),
  2
);
