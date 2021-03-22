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

  const hash = {};
  for (const item of arr2) {
    hash[item] = ++hash[item] || 1;
  }

  for (const value of arr1) {
    const square = Math.pow(value, 2);

    if (!(square in hash)) {
      return false;
    }

    if (hash[square] === 1) {
      delete hash[square];
    } else {
      --hash[square];
    }
  }

  return !Object.keys(hash).length;
}

const assert = require('assert');

assert.ok(same([1, 2, 3], [4, 1, 9]));
assert.ok(!same([1, 2, 3], [4, 9]));
assert.ok(!same([1, 2, 1], [4, 4, 1]));
