/*
  Count Operations

  You are given two non-negative integers num1 and num2.
  In one operation, if num1 >= num2, you must subtract num2 from num1, otherwise subtract num1 from num2.
  Return the number of operations required to make either num1 = 0 or num2 = 0.

  Example:
  Input: 2, 3
  Output: 3
*/

function countOperations(num1, num2, operations = 0) {
  if (num1 === 0 || num2 === 0) {
    return operations;
  }

  if (num1 < num2) {
    num2 -= num1;
  } else {
    num1 -= num2;
  }

  return countOperations(num1, num2, operations + 1);
}

const assert = require('assert');
assert.equal(countOperations(2, 3), 3);
