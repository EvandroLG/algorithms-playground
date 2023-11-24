/*
  Longest Nice Substring

  A string s is nice if, for every letter of the alphabet that s contains, it appears both in uppercase and lowercase. For example, "abABB" is nice because 'A' and 'a' appear, and 'B' and 'b' appear. However, "abA" is not because 'b' appears, but 'B' does not.
  Given a string s, return the longest substring of s that is nice. If there are multiple, return the substring of the earliest occurrence. If there are none, return an empty string.

  Example:
  Input: "YazaAay"
  Output: "aAa"
*/

function longestNiceSubstring(s) {
  let output = '';

  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      const sub = s.substring(i, j);

      if (isValid(sub) && sub.length > output.length) {
        output = sub;
      }
    }
  }

  return output;
}

function isValid(s) {
  const seen = new Set(s.split(''));

  for (const c of s) {
    const upper = c.toUpperCase();

    if (upper === c) {
      if (!seen.has(c.toLowerCase())) {
        return false;
      }
    } else {
      if (!seen.has(c.toUpperCase())) {
        return false;
      }
    }
  }

  return true;
}

const assert = require('assert');
assert.equal(longestNiceSubstring('YazaAay'), 'aAa');
