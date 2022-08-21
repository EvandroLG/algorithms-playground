/*
  Maximum Product

  Given an integer array nums, find three numbers whose product is maximum and return the maximum product.

  Example:
  Input: [-100,-98,-1,2,3,4]
  Output: 39200
*/

function maximumProduct(arr) {
  const sorted = arr.slice().sort((a, b) => a - b);

  return Math.max(
    sorted.at(-1) * sorted.at(-2) * sorted.at(-3),
    sorted.at(0) * sorted.at(1) * sorted.at(-1)
  );
}

const assert = require('assert');
assert.equal(maximumProduct([-100, -98, -1, 2, 3, 4]), 39200);
