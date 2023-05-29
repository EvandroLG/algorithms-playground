/*
  Sum Multiples

  Given a positive integer n, find the sum of all integers in the range [1, n] inclusive that are divisible by 3, 5, or 7.
  Return an integer denoting the sum of all numbers in the given range satisfying the constraint.

  Example:
  Input: 10
  Output: 40
*/

function sumMultiples(n) {
  const arr = buildArray(n);

  return arr.reduce((acc, item) => {
    if (item % 3 === 0 || item % 5 === 0 || item % 7 === 0) {
      return acc + item;
    }

    return acc;
  }, 0);
}

function buildArray(n) {
  const arr = [];

  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }

  return arr;
}

const assert = require('assert');
assert.equal(sumMultiples(10), 40);
