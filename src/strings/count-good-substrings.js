/*
  Count Good Substrings

  A string is good if there are no repeated characters.
  Given a string s, return the number of good substrings of length three in s.
  Note that if there are multiple occurrences of the same substring, every occurrence should be counted.
  A substring is a contiguous sequence of characters in a string.

  Example:
  Input: "aababcabc"
  Output: 4
*/

function countGoodSubstrings(s) {
  let p1 = 0;
  let p2 = 3;
  let result = 0;

  while (p2 <= s.length) {
    const sub = s.slice(p1, p2);

    if (isValid(sub)) {
      result++;
    }

    p1++;
    p2++;
  }

  return result;
}

function isValid(s) {
  return new Set(s).size === 3;
}

const assert = require('assert');
assert.strictEqual(countGoodSubstrings('aababcabc'), 4);
