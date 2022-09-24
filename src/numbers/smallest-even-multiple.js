/*
  Smallest Even Multiple

  Given a positive integer n, return the smallest positive integer that is a multiple of both 2 and n.

  Example:
  Input: 5
  Output: 10
*/

function smallestEvenMultiple(n) {
  let value = 2;

  while (value) {
    if (value % n === 0) {
      return value;
    }

    value += 2;
  }
}

const assert = require('assert');
assert.equal(smallestEvenMultiple(5), 10);
