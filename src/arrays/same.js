/*
  Same

  Write a function called `same`, which accepts two arrays.
  The function should return true if every value in the array has it's corresponding value squared in the second array.
  The frequency of values must be the same.

  Example:
  same([1, 2, 3], [4, 1, 9]); // true
  same([1, 2, 3], [4, 9]); // false
*/

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  const set = new Set(arr2);

  for (const item of arr1) {
    const square = Math.pow(item, 2);

    if (!set.has(square)) {
      return false;
    }
  }

  return true;
}

const assert = require('assert');

assert.ok(same([1, 2, 3], [4, 1, 9]));
assert.ok(!same([1, 2, 3], [4, 9]));
