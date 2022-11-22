/*
  Num K Len Substr No Repeats

  Given a string s and an integer k, return the number of substrings in s of length k with no repeated characters.

  Example:
  Input: "havefunonleetcode", 5
  Output: 6
*/

function numKLenSubstrNoRepeats(s, k) {
  if (k > s.length) {
    return 0;
  }

  if (k === 1) {
    return s.length;
  }

  const start = subsNoRepeats(s, k);

  if (start === -1) {
    return 0;
  }

  return 1 + numKLenSubstrNoRepeats(s.slice(start + 1), k);
}

function subsNoRepeats(s, k) {
  let p1 = 0;
  let p2 = 1;
  const memo = new Map([[s[p1], p1]]);

  while (p2 < s.length) {
    if (!memo.has(s[p2])) {
      memo.set(s[p2], p2);

      if (memo.size === k) {
        return p1;
      }

      p2++;
    } else {
      p1 = memo.get(s[p2]) + 1;
      memo.clear();
      memo.set(s[p1], p1);
      p2 = p1 + 1;
    }
  }

  return -1;
}

const assert = require('assert');
assert.equal(numKLenSubstrNoRepeats('havefunonleetcode', 5), 6);
