/*
  Is Subsequence

  Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
  A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

  Example:
  Input: "abc", "ahbgdc"
  Output: true
*/

function isSubsequence(s, t) {
  let p1 = 0;
  let p2 = 0;
  let counter = 0;

  while (p2 < t.length) {
    if (s[p1] === t[p2]) {
      p1++;
      counter++;

      if (p1 === s.length) {
        break;
      }
    }

    p2++;
  }

  return counter === s.length;
}

const assert = require('assert');

assert.ok(isSubsequence('abc', 'ahbgdc'));
assert.ok(!isSubsequence('axc', 'ahbgdc'));
