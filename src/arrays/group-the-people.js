/*
  Group The People

  There are n people that are split into some unknown number of groups. Each person is labeled with a unique ID from 0 to n - 1.
  You are given an integer array groupSizes, where groupSizes[i] is the size of the group that person i is in.
  Return a list of groups such that each person i is in a group of size groupSizes[i].

  Example:
  Input: [3,3,3,3,3,1,3]
  Output: [[6,4,3],[2,1,0],[5]]
*/

function groupThePeople(arr) {
  const map = arr.reduce((acc, item, idx) => {
    if (!acc.has(item)) {
      acc.set(item, []);
    }

    acc.get(item).push(idx);

    return acc;
  }, new Map());

  const output = [];

  for (const [key, items] of map) {
    while (items.length) {
      const arr = [];

      while (arr.length < key) {
        const item = items.pop();
        arr.push(item);
      }

      output.push(arr);
    }
  }

  return output;
}

const assert = require('assert');
assert.deepEqual(groupThePeople([3, 3, 3, 3, 3, 1, 3]), [
  [6, 4, 3],
  [2, 1, 0],
  [5],
]);
