/*
  Difference Of Sums

  You are given positive integers n and m.
  Define two integers, num1 and num2, as follows:
  - num1: The sum of all integers in the range [1, n] that are not divisible by m
  - num2: The sum of all integers in the range [1, n] that are divisible by m.
  Return the integer num1 - num2.

  Example:
  Input: 10, 3
  Output: 19
*/

function differenceOfSums(n, m) {
  const divisible = [];
  const notDivisible = [];

  for (let i = 1; i <= n; i++) {
    if (i % m === 0) {
      divisible.push(i);
    } else {
      notDivisible.push(i);
    }
  }

  return sum(notDivisible) - sum(divisible);
}

function sum(arr) {
  return arr.reduce((acc, value) => acc + value, 0);
}

const assert = require('assert');
assert.equal(differenceOfSums(10, 3), 19);
