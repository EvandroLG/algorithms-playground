/*
  Add To Array Form Of Integer

  The array-form of an integer num is an array representing its digits in left to right order.
  For example, for num = 1321, the array form is [1,3,2,1].
  Given num, the array-form of an integer, and an integer k, return the array-form of the integer num + k.

  Example:
  Input: [1,2,0,0], 34
  Output: [1,2,3,4]
*/

function addToArrayFormOfInteger(arr, k) {
  const value = BigInt(arr.join(''));
  const sum = value + BigInt(k);
  const str = '' + sum;
  const fragments = str.split('');

  return fragments.map(Number);
}

const assert = require('assert');
assert.deepEqual(addToArrayFormOfInteger([1, 2, 0, 0], 34), [1, 2, 3, 4]);
