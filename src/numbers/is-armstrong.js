/*
  Is Armstrong

  Given an integer n, return true if and only if it is an Armstrong number.
  The k-digit number n is an Armstrong number if and only if the kth power of each digit sums to n.

  Example:
  Input: 153
  Output: true
*/

function isArmstrong(n) {
  const s = '' + n;
  const digit = s.length;
  const fragments = s.split('');
  const result = fragments.reduce((acc, item) => {
    return acc + Math.pow(+item, digit);
  }, 0);

  return result === n;
}

const assert = require('assert');
assert.ok(isArmstrong(153));
