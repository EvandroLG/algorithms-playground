/*
  Generate The String

  Given an integer n, return a string with n characters such that each character in such string occurs an odd number of times.
  The returned string must contain only lowercase English letters. If there are multiples valid strings, return any of them.  

  Example:
  Input: 4
  Output: "pppz"
*/

function generateTheString(n) {
  if (isEven(n)) {
    return 'a'.repeat(n - 1) + 'b';
  }

  return 'a'.repeat(n);
}

function isEven(n) {
  return n % 2 === 0;
}

const assert = require('assert');
assert.equal(generateTheString(4), 'aaab');
