/*
  Strobogrammatic Number

  Given a string num which represents an integer, return true if num is a strobogrammatic number.
  A strobogrammatic number is a number that looks the same when rotated 180 degrees (looked at upside down).

  Example:
  Input: '69'
  Output: true
*/

function strobogrammaticNumber(s) {
  const map = {
    0: 0,
    1: 1,
    6: 9,
    9: 6,
    8: 8,
  };

  const result = [];

  for (const c of s) {
    if (!map.hasOwnProperty(c)) {
      return false;
    }

    result.push(map[c]);
  }

  return s === result.reverse().join('');
}

const assert = require('assert');
assert.ok(strobogrammaticNumber('69'));
