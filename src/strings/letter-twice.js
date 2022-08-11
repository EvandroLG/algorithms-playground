/*
  Letter Twice

  Given a string s consisting of lowercase English letters, return the first letter to appear twice.
  It contains at least one letter that appears twice.

  Example:
  Input: 'abccbaacz'
  Output: 'c'
*/

function letterTwice(s) {
  const memo = {};

  for (const c of s) {
    if (!memo.hasOwnProperty(c)) {
      memo[c] = 0;
    }

    memo[c]++;

    if (memo[c] === 2) {
      return c;
    }
  }
}

const assert = require('assert');
assert.equal(letterTwice('abccbaacz'), 'c');
