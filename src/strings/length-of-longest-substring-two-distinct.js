/*
  Length Of Longest Substring Two Distinct

  Given a string s, return the length of the longest substring that contains at most two distinct characters.

  Example:
  Input: s = "eceba"
  Output: 3
*/

function lengthOfLongestSubstringTwoDistinct(s) {
  let map = new Map();
  let p1 = 0;
  let p2 = 0;
  let output = 0;

  while (p2 < s.length) {
    const c = s[p2];
    map.set(c, p2);
    p2++;

    if (map.size > 2) {
      const i = Math.min(...map.values());
      map.delete(s[i]);
      p1 = i + 1;
    }

    output = Math.max(output, p2 - p1);
  }

  return output;
}

const assert = require('assert');
assert.equal(lengthOfLongestSubstringTwoDistinct('eceba'), 3);
