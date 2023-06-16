/*
  Balanced Strings

  Balanced strings are those that have an equal quantity of 'L' and 'R' characters.
  Given a balanced string s, split it into some number of substrings such that:
  - Each substring is balanced.
  Return the maximum number of balanced strings you can obtain.

  Example:
  Input: "RLRRLLRLRL"
  Output: 4
*/

function balancedStrings(s) {
  const map = {
    L: 0,
    R: 0,
  };

  let result = 0;

  for (const c of s) {
    map[c]++;

    if (map.L === map.R) {
      result++;
      map.L = 0;
      map.R = 0;
    }
  }

  return result;
}

const assert = require('assert');
assert.equal(balancedStrings('RLRRLLRLRL'), 4);
