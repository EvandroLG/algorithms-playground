/*
  Number Count

  Given two positive integers a and b, return the count of numbers having unique digits in the range [a, b] (inclusive).

  Example:
  Input: 1, 20
  Output: 19
*/

function numberCount(a, b) {
  let output = 0;

  for (let i = a; i <= b; i++) {
    if (i <= 10 || hasUniqueDigits(i)) {
      output++;
    }
  }

  return output;
}

function hasUniqueDigits(n) {
  const memo = new Set();
  const s = '' + n;

  for (const c of s) {
    if (memo.has(c)) {
      return false;
    }

    memo.add(c);
  }

  return true;
}

const assert = require('assert');
assert.deepStrictEqual(numberCount(1, 20), 19);
