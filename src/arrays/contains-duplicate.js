/*
  Contains Duplicate

  Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

  Example:
  Input: [1,2,3,1]
  Output: true
*/

function containsDuplicate(arr) {
  const memo = new Set();

  for (const item of arr) {
    if (memo.has(item)) {
      return true;
    }

    memo.add(item);
  }

  return false;
}

const assert = require('assert');
assert.ok(containsDuplicate([1, 2, 3, 1]));
