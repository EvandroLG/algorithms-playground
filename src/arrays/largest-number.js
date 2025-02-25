/*
  Largest Number

  Given a list of non-negative integers nums, arrange them such that they form the largest number and return it.
  Since the result may be very large, so you need to return a string instead of an integer.

  Example:
  Input: [3,30,34,5,9]
  Output: "9534330"
*/

function largestNumber(arr) {
  const s = arr.map(String);
  const sorted = s.sort((a, b) => (b + a).localeCompare(a + b));

  const result = sorted.join('');

  if (result[0] === '0') {
    return '0';
  }

  return result;
}

const assert = require('assert');
assert.equal(largestNumber([3, 30, 34, 5, 9]), '9534330');
