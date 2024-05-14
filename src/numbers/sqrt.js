/*
  Sqrt

  Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.
  You must not use any built-in exponent function or operator.

  Example:
  Input: 8
  Output: 2
*/

function sqrt(n) {
  for (let i = 0; i <= n; i++) {
    if (i * i === n) {
      return i;
    }

    if (i * i > n) {
      return i - 1;
    }
  }
}

const assert = require('assert');
assert.strictEqual(sqrt(8), 2);
