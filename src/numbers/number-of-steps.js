/*
  Number Of Steps

  Given an integer num, return the number of steps to reduce it to zero.
  In one step, if the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.In one step, if the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.

  Example:
  Input: 14
  Output: 6
*/

function numberOfSteps(n, steps = 0) {
  if (!n) {
    return steps;
  }

  if (isEven(n)) {
    return numberOfSteps(n / 2, ++steps);
  }

  return numberOfSteps(n - 1, ++steps);
}

function isEven(n) {
  return n % 2 === 0;
}

const assert = require('assert');
assert.equal(numberOfSteps(14), 6);
