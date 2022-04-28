/*
  Relative Ranks

  You are given an integer array score of size n, where score[i] is the score of the ith athlete in a competition.
  All the scores are guaranteed to be unique.
  The placement of each athlete determines their rank:
  - The 1st place athlete's rank is "Gold Medal".
  - The 2nd place athlete's rank is "Silver Medal".
  - The 3rd place athlete's rank is "Bronze Medal".
  - For the 4th place to the nth place athlete, their rank is their placement number (i.e., the xth place athlete's rank is "x").

  Example:
  Input: [5,4,3,2,1]
  Output: ["Gold Medal","Silver Medal","Bronze Medal","4","5"]
*/

function findRelativeRanks(score) {
  const map = getMap(score);
  return score.map((item) => map[item]);
}

function getMap(score) {
  const sorted = score.slice().sort((a, b) => b - a);
  let counter = 1;
  return sorted.reduce((acc, item, idx) => {
    if (idx === 0) {
      acc[item] = 'Gold Medal';
    } else if (idx === 1) {
      acc[item] = 'Silver Medal';
    } else if (idx === 2) {
      acc[item] = 'Bronze Medal';
    } else {
      acc[item] = '' + counter;
    }

    counter++;

    return acc;
  }, {});
}

const assert = require('assert');
assert.deepEqual(findRelativeRanks([5, 4, 3, 2, 1]), [
  'Gold Medal',
  'Silver Medal',
  'Bronze Medal',
  '4',
  '5',
]);
