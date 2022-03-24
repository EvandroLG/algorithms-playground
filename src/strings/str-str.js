/*
  strStr()

  Implement strStr().
  Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

  Example:
  Input: "hello"
  Output: "ll"
*/

function strStr(str, sub) {
  if (str === '' || sub === '') {
    return 0;
  }

  if (str.length < sub.length) {
    return -1;
  }

  for (let i = 0; i < str.length; i++) {
    if (str.slice(i, i + sub.length) === sub) {
      return i;
    }
  }

  return -1;
}

const assert = require('assert');
assert.equal(strStr('hello', 'll'), 2);
