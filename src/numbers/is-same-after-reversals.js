/*
  Is Same After Reversals

  Given an integer num, reverse num to get reversed1, then reverse reversed1 to get reversed2.
  Return true if reversed2 equals num.
  Otherwise return false.

  Example:
  Input: 526
  Output: true
*/

function isSameAfterReversals(n) {
  if (n === 0) {
    return true;
  }

  if (n % 10 > 0) {
    return true;
  }

  return false;
}

const assert = require('assert');
assert.ok(isSameAfterReversals(526));
