/*
  First Uniq Character

  Given a string s, find the first non-repeating character in it and return its index.
  If it does not exist, return -1.

  Example:
  Input: "loveleetcode"
  Output: 2
*/

function firstUniqCharacter(s) {
  const counter = {};

  for (const c of s) {
    if (counter.hasOwnProperty(c)) {
      counter[c]++;
    } else {
      counter[c] = 1;
    }
  }

  for (let i = 0; i < s.length; i++) {
    const c = s[i];

    if (counter[c] === 1) {
      return i;
    }
  }

  return -1;
}

const assert = require('assert');
assert.equal(firstUniqCharacter('loveleetcode'), 2);
