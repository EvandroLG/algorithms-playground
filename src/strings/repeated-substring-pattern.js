/*
  Repeated Substring Pattern

  Given a string s, check if it can be constructed by taking a substring of it and appending multiple copies of the substring together.

  Example:
  Input: "abab"
  Output: true
*/

function repeatedSubstringPattern(s) {
  for (let i = 0; i < s.length - 1; i++) {
    const rest = s.slice(i + 1);
    const sub = s.slice(0, i + 1);

    if (repeatedSubstringHelper(rest, sub)) {
      return true;
    }
  }

  return false;
}

function repeatedSubstringHelper(s, sub) {
  for (let i = 0; i < s.length; i += sub.length) {
    if (s.slice(i, i + sub.length) !== sub) {
      return false;
    }
  }

  return true;
}

const assert = require('assert');
assert.ok(repeatedSubstringPattern('abab'));
