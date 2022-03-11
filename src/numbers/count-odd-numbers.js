/*
  Count Odd Numbers

  Given two non-negative integers low and high.
  Return the count of odd numbers between low and high (inclusive).

  Example:
  Input: 3, 7
  Output: 3
*/

function countOddNumbers(low, high) {
  let counter = 0;

  for (let i = low; i <= high; i++) {
    if (isOdd(i)) {
      counter++;
    }
  }

  return counter;
}

function isOdd(value) {
  return value % 2 > 0;
}

const assert = require('assert');
assert.equal(countOddNumbers(3, 7), 3);
