/*
  Max Length Between Equal Characters

  Given a string s, return the length of the longest substring between two equal characters, excluding the two characters. If there is no such substring return -1.
  A substring is a contiguous sequence of characters within a string.

  Example:
  Input: 'abca'
  Output: 2
*/

function maxLengthBetweenEqualCharacters(s) {
  const map = buildMap(s);
  const entries = Object.entries(map);
  let length = -1;

  for (const [_, value] of entries) {
    if (value.length === 1) {
      continue;
    }

    const first = value.at(0);
    const last = value.at(-1);
    const distance = last - first - 1;
    length = Math.max(distance, length);
  }

  return length;
}

function buildMap(s) {
  return s.split('').reduce((acc, c, idx) => {
    if (!acc.hasOwnProperty(c)) {
      acc[c] = [];
    }

    acc[c].push(idx);

    return acc;
  }, {});
}

const assert = require('assert');
assert.equal(maxLengthBetweenEqualCharacters('abca'), 2);
