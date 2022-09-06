/*
  Sum Base

  Given an integer n (in base 10) and a base k, return the sum of the digits of n after converting n from base 10 to base k.
  After converting, each digit should be interpreted as a base 10 number, and the sum should be returned in base 10.

  Example:
  Input: 34, 6
  Output: 9
*/

function sumBase(n, k) {
  const s = n.toString(k);
  const fragments = s.split('');

  return fragments.map(Number).reduce((acc, value) => acc + value);
}

const assert = require('assert');
assert.equal(sumBase(34, 6), 9);
