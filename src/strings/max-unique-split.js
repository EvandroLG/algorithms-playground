/*
  Max Unique Split

  Given a string s, return the maximum number of unique substrings that the given string can be split into.
  You can split string s into any list of non-empty substrings, where the concatenation of the substrings forms the original string.
  However, you must split the substrings such that all of them are unique.
  A substring is a contiguous sequence of characters within a string.

  Example:
  Input: "ababccc"
  Output: 5
*/

function maxUniqueSplit(s) {
  let max = -1;

  (function backtrack(path = [], start = 0) {
    if (start === s.length) {
      max = Math.max(max, path.length);
    }

    for (let i = start + 1; i <= s.length; i++) {
      const sub = s.slice(start, i);

      if (path.includes(sub)) {
        continue;
      }

      path.push(sub);
      backtrack(path, i);
      path.pop();
    }
  })();

  return max;
}

const assert = require('assert');
assert.equal(maxUniqueSplit('ababccc'), 5);
