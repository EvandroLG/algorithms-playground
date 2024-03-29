/*
  Find The Difference

  You are given two strings s and t.
  String t is generated by random shuffling string s and then add one more letter at a random position.
  Return the letter that was added to t.

  Example:
  Input: "abcd", "abcde"
  Output: "e"
*/

function findTheDifference(s, t) {
  const memo = s.split('').reduce((acc, c) => {
    if (!acc.hasOwnProperty(c)) {
      acc[c] = 0;
    }

    acc[c]++;

    return acc;
  }, {});

  for (const c of t) {
    if (memo.hasOwnProperty(c) && memo[c]) {
      memo[c]--;
    } else {
      return c;
    }
  }
}

const assert = require('assert');
assert.equal(findTheDifference('abcd', 'abcde'), 'e');
