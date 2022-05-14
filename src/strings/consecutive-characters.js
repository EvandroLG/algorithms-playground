/*
  Consecutive Characters

  The power of the string is the maximum length of a non-empty substring that contains only one unique character.
  Given a string s, return the power of s.

  Example:
  Input: 'abbcccddddeeeeedcba'
  Output: 5
*/

function consecutiveCharacters(s) {
  let p1 = 0;
  let p2 = 1;
  let tmp = 1;
  let max = 1;

  while (p2 < s.length) {
    if (s[p1] === s[p2]) {
      tmp++;
    } else {
      tmp = 1;
    }

    max = Math.max(tmp, max);
    p1++;
    p2++;
  }

  return max;
}

const assert = require('assert');
assert.equal(consecutiveCharacters('abbcccddddeeeeedcba'), 5);
