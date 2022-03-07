/*
  Is Power Of Tree

  Given an integer n, return true if it is a power of three. Otherwise, return false.
  An integer n is a power of three, if there exists an integer x such that n == 3x.

  Example:
  Input: 27
  Output: true
*/

function isPowerOfTree(n) {
  if (n === 1) {
    return true;
  }

  if (n % 3 !== 0) {
    return false;
  }

  let current = 3;

  while (current < n) {
    current *= 3;
  }

  return current === n;
}

const assert = require('assert');
assert.ok(isPowerOfTree(27));
