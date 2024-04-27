/*
  Harshad

  An integer divisible by the sum of its digits is said to be a Harshad number.
  You are given an integer x. Return the sum of the digits of x if x is a Harshad number, otherwise, return -1.

  Example:
  Input: 18
  Output: 9
*/

function harshad(x) {
  const sum = getSum(x);
  return isDivisible(x, sum) ? sum : -1;
}

function isDivisible(n, sum) {
  return n % sum === 0;
}

function getSum(x) {
  const s = x + '';
  return s.split('').reduce((acc, c) => {
    const n = +c;
    return acc + n;
  }, 0);
}

const assert = require('assert');
assert.deepStrictEqual(harshad(18), 9);
