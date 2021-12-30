/*
  Longest Substring With K Characters

  Given a string, find the length of the longest substring that contains no more than k distinct characters.

  Example:
  Input: acccpbbebi, 3
  Output: 6
*/

function longestSubstringWithKCharacters(s, k) {
  if (!s.length || !k) {
    return 0;
  }

  const memo = {
    [s[0]]: 1,
  };

  let p1 = 0;
  let p2 = 0;
  let distinctCharacters = 1;
  let tmpMax = 0;
  let max = 0;

  while (p2 < s.length) {
    if (distinctCharacters <= k) {
      tmpMax++;
      max = Math.max(tmpMax, max);
      p2++;
    } else {
      memo[s[p1]]--;
      tmpMax--;

      if (memo[s[p1]] === 0) {
        distinctCharacters--;
      }

      p1++;

      continue;
    }

    const c = s[p2];

    if (memo.hasOwnProperty(c) || memo[c] > 0) {
      memo[c]++;
    } else {
      memo[c] = 1;
      distinctCharacters++;
    }
  }

  return max;
}

const assert = require('assert');
assert.equal(longestSubstringWithKCharacters('acccpbbebi', 3), 6);
assert.equal(longestSubstringWithKCharacters('aaaabbccd', 1), 4);
assert.equal(longestSubstringWithKCharacters('abcdefg', 10), 7);
