/*
  Common Factors

  Given two positive integers a and b, return the number of common factors of a and b.
  An integer x is a common factor of a and b if x divides both a and b.

  Example:
  Input: 12, 6
  Output: 4
*/

function commonFactors(a, b) {
  if (a > b) {
    return commonFactors(b, a);
  }

  let counter = 0;

  for (let i = a; i > 0; i--) {
    if (a % i === 0 && b % i === 0) {
      counter++;
    }
  }

  return counter;
}

const assert = require('assert');
assert.equal(commonFactors(12, 6), 4);
