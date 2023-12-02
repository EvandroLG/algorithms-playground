/*
  Number Of Special Substrings

  You are given a string s consisting only of lowercase English letters. We call a substring special if it contains no character which has occurred at least twice (in other words, it does not contain a repeating character). Your task is to count the number of special substrings. For example, in the string "pop", the substring "po" is a special substring, however, "pop" is not special (since 'p' has occurred twice).
  Return the number of special substrings.
  A substring is a contiguous sequence of characters within a string. For example, "abc" is a substring of "abcd", but "acd" is not.

  Example:
  Input: "abcd"
  Output: 10
*/

function numberOfSpecialSubstrings(s) {
  const map = {};
  let counter = 0;
  let p1 = 0;
  let p2 = 0;

  while (p2 < s.length) {
    const c = s[p2];

    if (map.hasOwnProperty(c) && map[c] >= p1) {
      p1 = map[c] + 1;
    }

    map[c] = p2;
    counter += p2 - p1 + 1;
    p2++;
  }

  return counter;
}

const assert = require('assert');
assert.equal(numberOfSpecialSubstrings('abcd'), 10);
