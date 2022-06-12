/*
  Find Winners

  You are given an integer array matches where matches[i] = [winneri, loseri] indicates that the player winneri defeated player loseri in a match.
  Return a list answer of size 2 where:
  - answer[0] is a list of all players that have not lost any matches.
  - answer[1] is a list of all players that have lost at least 3 matches.

  Example:
  Input: [[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]]
  Output: [[1,2,10],[4,5,7,8]]
*/

function findWinners(matches) {
  const output = [[], []];
  const losers = getLosers(matches);
  const keys = Object.keys(losers);

  for (const key of keys) {
    const defeats = losers[key];

    if (defeats === 0) {
      output[0].push(key);
    } else if (defeats === 1) {
      output[1].push(key);
    }
  }

  return output;
}

function getLosers(matches) {
  return matches.reduce((acc, item) => {
    if (!acc.hasOwnProperty(item[0])) {
      acc[item[0]] = 0;
    }

    if (!acc.hasOwnProperty(item[1])) {
      acc[item[1]] = 0;
    }

    acc[item[1]]++;

    return acc;
  }, {});
}

const assert = require('assert');
assert.deepEqual(
  findWinners([
    [1, 3],
    [2, 3],
    [3, 6],
    [5, 6],
    [5, 7],
    [4, 5],
    [4, 8],
    [4, 9],
    [10, 4],
    [10, 9],
  ]),
  [
    [1, 2, 10],
    [4, 5, 7, 8],
  ]
);
