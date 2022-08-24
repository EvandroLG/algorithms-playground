/*
  Find Users Active Minutes

  You are given the logs for users' actions on LeetCode, and an integer k.
  The logs are represented by a 2D integer array logs where each logs[i] = [IDi, timei] indicates that the user with IDi performed an action at the minute timei.
  Multiple users can perform actions simultaneously, and a single user can perform multiple actions in the same minute.
  The user active minutes (UAM) for a given user is defined as the number of unique minutes in which the user performed an action on LeetCode.
  A minute can only be counted once, even if multiple actions occur during it.

  Example:
  Input: [[1,1],[2,2],[2,3]], 4
  Output: [1,1,0,0]
*/

function findUsersActiveMinutes(logs, k) {
  const output = Array(k).fill(0);
  const users = logs.reduce((acc, [userIdx, time]) => {
    if (!acc.hasOwnProperty(userIdx)) {
      acc[userIdx] = new Set();
    }

    acc[userIdx].add(time);

    return acc;
  }, {});

  const keys = Object.keys(users);

  for (const key of keys) {
    const uniqueMinutes = users[key].size;
    output[uniqueMinutes - 1]++;
  }

  return output;
}

const assert = require('assert');
assert.deepEqual(
  findUsersActiveMinutes(
    [
      [1, 1],
      [2, 2],
      [2, 3],
    ],
    4
  ),
  [1, 1, 0, 0]
);
