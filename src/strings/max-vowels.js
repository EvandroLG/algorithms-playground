/*
  Max Vowels

  Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.
  Example:
  Input: "abciiidef", 3
  Output: 3
*/

function maxVowels(s, k) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  let tmp = 0;

  for (let i = 0; i < k; i++) {
    if (vowels.has(s[i])) {
      tmp++;
    }
  }

  let max = tmp;
  let p1 = 0;
  let p2 = k;

  while (p2 < s.length) {
    if (vowels.has(s[p1])) {
      tmp--;
    }

    if (vowels.has(s[p2])) {
      tmp++;
    }

    max = Math.max(tmp, max);

    p1++;
    p2++;
  }

  return max;
}

const assert = require('assert');
assert.strictEqual(maxVowels('abciiidef', 3), 3);
