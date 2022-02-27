/*
  Valid Perfect Square

  Given a positive integer num, write a function which returns True if num is a perfect square else False.
  Follow up: Do not use any built-in library function such as sqrt.

  Example:
  Input: 16
  Output: true
*/

function validPerfectSquare(n) {
  if (n <= 1) {
    return true;
  }

  return helper(2, n);
}

function helper(n, target) {
  const result = n * n;

  if (result === target) {
    return true;
  }

  if (result > target) {
    return false;
  }

  return helper(n + 1, target);
}

const assert = require('assert');
assert.ok(validPerfectSquare(16));
