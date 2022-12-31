/*
  Maximum Value

  The value of an alphanumeric string can be defined as:
  - The numeric representation of the string in base 10, if it comprises of digits only.
  - The length of the string, otherwise.
  Given an array strs of alphanumeric strings, return the maximum value of any string in strs.

  Example:
  Input: ["alic3","bob","3","4","00000"]
  Output: 5
*/

function maximumValue(arr) {
  return arr.reduce((max, item) => {
    return Math.max(max, isString(item) ? item.length : +item);
  }, -Infinity);
}

function isString(s) {
  for (const c of s) {
    const code = c.charCodeAt(0);
    const isChar = code >= 97 && code <= 122;

    if (isChar) {
      return true;
    }
  }

  return false;
}

const assert = require('assert');
assert.equal(maximumValue(['alic3', 'bob', '3', '4', '00000']), 5);
