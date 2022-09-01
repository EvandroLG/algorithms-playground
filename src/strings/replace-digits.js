/*
  Replace Digits

  You are given a 0-indexed string s that has lowercase English letters in its even indices and digits in its odd indices.
  There is a function shift(c, x), where c is a character and x is a digit, that returns the xth character after c.
  For example, shift('a', 5) = 'f' and shift('x', 0) = 'x'.
  Return s after replacing all digits. It is guaranteed that shift(s[i-1], s[i]) will never exceed 'z'.

  Example:
  Input: "a1b2c3d4e"
  Output: "abbdcfdhe"
*/

function replaceDigits(s) {
  const output = [];

  for (let i = 0; i < s.length; i++) {
    const c = s[i];

    if (/[a-z]/.test(c)) {
      output.push(c);
    } else {
      output.push(shift(s[i - 1], +c));
    }
  }

  return output.join('');
}

function shift(c, x) {
  const code = c.charCodeAt(0);
  return String.fromCharCode(code + x);
}

const assert = require('assert');
assert.equal(replaceDigits('a1b2c3d4e'), 'abbdcfdhe');
