/*
  Max Product

  Given the array of integers nums, you will choose two different indices i and j of that array.
  Return the maximum value of (nums[i]-1)*(nums[j]-1).

  Example:
  Input: [3,4,5,2]
  Output: 12
*/

function maxProduct(arr) {
  const sorted = arr.slice().sort((a, b) => a - b);
  const result = (sorted.at(-2) - 1) * (sorted.at(-1) - 1);

  return result;
}

const assert = require('assert');
assert.equal(maxProduct([3, 4, 5, 2]), 12);
