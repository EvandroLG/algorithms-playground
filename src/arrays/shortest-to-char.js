/*
  Shortest To Char

  Given a string s and a character c that occurs in s, return an array of integers answer where answer.length == s.length and answer[i] is the distance from index i to the closest occurrence of character c in s.
  The distance between two indices i and j is abs(i - j), where abs is the absolute value function.

  Example:
  Input: "loveleetcode", "e"
  Output: [3,2,1,0,1,0,0,1,2,2,1,0]
*/

function shortestToChar(s, c) {
  const indexes = getIndexes(s, c);
  const output = [];

  for (let i = 0; i < s.length; i++) {
    const item = s[i];

    if (item === c) {
      output.push(0);
    } else {
      output.push(getMinDiff(i, indexes));
    }
  }

  return output;
}

function getMinDiff(i, indexes) {
  return indexes.reduce((acc, idx) => {
    return Math.min(acc, Math.abs(idx - i));
  }, Math.abs(indexes[0] - i));
}

function getIndexes(s, c) {
  return s.split('').reduce((acc, item, idx) => {
    if (item === c) {
      acc.push(idx);
    }

    return acc;
  }, []);
}

const assert = require('assert');
assert.deepEqual(shortestToChar('loveleetcode', 'e'), [
  3,
  2,
  1,
  0,
  1,
  0,
  0,
  1,
  2,
  2,
  1,
  0,
]);
