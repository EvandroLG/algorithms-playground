/*
  Number Of Substrings

  You are given a 0-indexed string s consisting of only lowercase English letters.
  Return the number of substrings in s that begin and end with the same character.
  A substring is a contiguous non-empty sequence of characters within a string.

  Example:
  Input: "abcba"
  Output: 7
*/

function numberOfSubstrings(s) {
  const map = getCounter(s);
  let result = 0;

  for (const value of Object.values(map)) {
    result += (value * (value + 1)) / 2;
  }

  return result;
}

function getCounter(s) {
  return s.split('').reduce((acc, c) => {
    if (!acc.hasOwnProperty(c)) {
      acc[c] = 0;
    }

    acc[c]++;

    return acc;
  }, {});
}

const assert = require('assert');
assert.strictEqual(numberOfSubstrings('abcba'), 7);
