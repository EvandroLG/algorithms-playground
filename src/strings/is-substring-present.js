/*
  Is Substring Present

  Given a string s, find any substring of length 2 which is also present in the reverse of s.
  Return true if such a substring exists, and false otherwise.

  Example:
  Input: "abcba"
  Output: true
*/

function isSubstringPresent(s) {
  const set = buildSetOfPairs(s);
  const setReverse = buildSetOfPairs(reverseString(s));

  for (const item of set) {
    if (setReverse.has(item)) {
      return true;
    }
  }

  return false;
}

function reverseString(s) {
  return s.split('').reverse().join('');
}

function buildSetOfPairs(s) {
  let p1 = 0;
  let p2 = 1;
  const set = new Set();

  while (p2 < s.length) {
    set.add(s[p1] + s[p2]);
    p1++;
    p2++;
  }

  return set;
}

const assert = require('assert');
assert.ok(isSubstringPresent('abcba'));
