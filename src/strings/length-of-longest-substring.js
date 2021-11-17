/*
  Length Of Longest Substring

  Given a string s, find the length of the longest substring without repeating characters.

  Example:
  Input: "abcabcbb"
  Output: 3
*/

function lengthOfLongestSubstring(s) {
  const memo = new Set();
  let p1 = 0;
  let p2 = 0;
  let longest = 0;

  while (p2 < s.length) {
    if (memo.has(s[p2])) {
      memo.delete(s[p1]);
      p1++;
    } else {
      const sliced = s.slice(p1, p2 + 1);
      longest = Math.max(longest, sliced.length);

      memo.add(s[p2]);
      p2++;
    }
  }

  return longest;
}

const assert = require('assert');
assert.equal(lengthOfLongestSubstring('abcabcbb'), 3);
