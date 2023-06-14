/*
  Count Digits

  Given an integer num, return the number of digits in num that divide num.
  An integer val divides nums if nums % val == 0.

  Example:
  Input: 1248
  Output: 4
*/

function countDigits(n) {
  if (n < 10) {
    return 1;
  }

  const s = '' + n;
  let result = 0;

  for (const c of s) {
    if (n % +c === 0) {
      result++;
    }
  }

  return result;
}

const assert = require('assert');
assert.equal(countDigits(1248), 4);
