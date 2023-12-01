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
  let counter = 0;

  for (let i = 0; i < s.length; i++) {
    const memo = new Set();

    for (let j = i; j < s.length; j++) {
      const c = s[j];

      if (memo.has(c)) {
        break;
      }

      memo.add(c);
      counter++;
    }
  }

  return counter;
}

const assert = require('assert');
assert.equal(numberOfSpecialSubstrings('abcd'), 10);
