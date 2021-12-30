/*
  Longest Substring With K Characters

  Given a string, find the length of the longest substring that contains no more than k distinct characters.

  Example:
  Input: acccpbbebi, 3
  Output: 6
*/

function longestSubstringWithKCharacters(s, k) {
  const memo = {};
  let p1 = 0;
  let p2 = 0;
  let max = 0;

  while (p2 < s.length) {
    const c = s[p2];

    if (!memo.hasOwnProperty(c)) {
      memo[c] = 0;
    }

    memo[c]++;

    while (Object.keys(memo).length > k) {
      const start = s[p1];
      memo[start]--;

      if (!memo[start]) {
        delete memo[start];
      }

      p1++;
    }

    max = Math.max(max, p2 - p1 + 1);

    p2++;
  }

  return max;
}

const assert = require('assert');
assert.equal(longestSubstringWithKCharacters('acccpbbebi', 3), 6);
assert.equal(longestSubstringWithKCharacters('aaaabbccd', 1), 4);
assert.equal(longestSubstringWithKCharacters('abcdefg', 10), 7);
assert.equal(longestSubstringWithKCharacters('aba', 1), 1);
