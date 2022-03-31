/*
  Find Ultimate One

  Given a integer, write a function to determine if after repeatedly replacing it with an integer equal to the sum of the square
  of all of its digits, leads us to the number 1.

  Example:
  Input: 23
  Output: true
*/

function findUltimateOne(n) {
  let value = n;
  const memo = new Set();

  while (true) {
    value = findSquareSum(value);

    if (memo.has(value)) {
      return false;
    } else {
      memo.add(value);
    }

    if (value === 1) {
      return true;
    }
  }
}

function findSquareSum(n) {
  let sum = 0;

  while (n) {
    const digit = n % 10;
    sum += Math.pow(digit, 2);
    n = Math.floor(n / 10);
  }

  return sum;
}

const assert = require('assert');
assert.ok(findUltimateOne(23));
assert.ok(!findUltimateOne(12));
