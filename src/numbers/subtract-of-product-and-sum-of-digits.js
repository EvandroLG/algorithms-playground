/*
  Subtract Of Product And Sum Of Digits

  Given an integer number n, return the difference between the product of its digits and the sum of its digits.

  Example:
  Input: 4421
  Output: 21
*/

function subtractOfProductAndSumOfDigits(n) {
  const s = String(n);
  const arr = s.split('').map(Number);
  const product = arr.reduce((acc, item) => acc * item);
  const sum = arr.reduce((acc, item) => acc + item);

  return product - sum;
}

const assert = require('assert');
assert.equal(subtractOfProductAndSumOfDigits(4421), 21);
