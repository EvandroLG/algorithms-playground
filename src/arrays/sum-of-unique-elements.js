/*
  Sum Of Unique Elements

  You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array.

  Example:
  Input: [1,2,3,2]
  Output: 4
*/

function sumOfUniqueElements(arr) {
  const counter = arr.reduce((acc, item) => {
    if (!acc.has(item)) {
      acc.set(item, 0);
    }

    acc.set(item, acc.get(item) + 1);

    return acc;
  }, new Map());

  let result = 0;

  for (const [key, value] of counter) {
    if (value === 1) {
      result += key;
    }
  }

  return result;
}

const assert = require('assert');
assert.equal(sumOfUniqueElements([1, 2, 3, 2]), 4);
