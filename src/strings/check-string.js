/*
  Check String

  Given a string s consisting of only the characters 'a' and 'b', return true if every 'a' appears before every 'b' in the string.
  Otherwise, return false.

  Example:
  Input: "aaabbb"
  Output: true
*/

function checkString(s) {
  let foundA = false;
  let foundB = false;

  for (const c of s) {
    if (c === 'a') {
      foundA = true;

      if (foundB) {
        return false;
      }
    } else {
      foundB = true;
    }
  }

  return true;
}

const assert = require('assert');
assert.ok(checkString('aaabbb'));
