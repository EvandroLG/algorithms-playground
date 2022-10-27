/*
  Percentage Letter

  Given a string s and a character letter, return the percentage of characters in s that equal letter rounded down to the nearest whole percent.

  Example:
  Input: "foobar", "o"
  Output: 33
*/

function percentageLetter(s, letter) {
  const total = s.length;
  let times = 0;

  for (const c of s) {
    if (c === letter) {
      times++;
    }
  }

  const result = (times / total) * 100;

  return Math.floor(result);
}

const assert = require('assert');
assert.equal(percentageLetter('foobar', 'o'), 33);
