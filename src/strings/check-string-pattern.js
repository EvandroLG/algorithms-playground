/*
  Check String Pattern

  Given an input string and a pattern, check if characters in the input string follows the same order as determined by characters present in the pattern.
  Assume there won’t be any duplicate characters in the pattern.

  Example:
  Input: "engineers rock", "er"
  Output: true
*/

function checkStringPattern(s, pattern) {
  const map = pattern.split('').reduce((acc, c, i) => {
    acc[c] = i;
    return acc;
  }, {});

  const visited = new Set();

  for (const c of s) {
    if (!map.hasOwnProperty(c)) {
      continue;
    }

    for (const prev of visited) {
      if (map[prev] > map[c]) {
        return false;
      }
    }

    visited.add(c);
  }

  return true;
}

const assert = require('assert');
assert.ok(checkStringPattern('engineers rock', 'er'));
assert.ok(!checkStringPattern('engineers rock', 'egr'));
assert.ok(!checkStringPattern('engineers rock', 'gsr'));
