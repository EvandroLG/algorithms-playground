/*
  Digit Count

  You are given a 0-indexed string num of length n consisting of digits.
  Return true if for every index i in the range 0 <= i < n, the digit i occurs num[i] times in num, otherwise return false.

  Example:
  Input: '1210'
  Output: true
*/

function digitCount(s) {
  const counter = getCounter(s);

  for (let i = 0; i < s.length; i++) {
    const value = +s[i];

    if ((counter[i] || 0) !== value) {
      return false;
    }
  }

  return true;
}

function getCounter(s) {
  return s.split('').reduce((acc, c) => {
    if (!acc.hasOwnProperty(c)) {
      acc[c] = 0;
    }

    acc[c]++;

    return acc;
  }, {});
}

const assert = require('assert');
assert.ok(digitCount('1210'));
