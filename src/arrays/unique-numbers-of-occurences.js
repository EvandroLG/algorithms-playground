/*
  Unique Numbers Of Occurences

  Given an array of integers arr, return true if the number of occurrences of each value in the array is unique, or false otherwise.

  Example:
  Input: [1,2,2,1,1,3]
  Output: true
*/

function uniqueNumbersOfOccurences(arr) {
  const counter = arr.reduce((acc, item) => {
    if (!acc.hasOwnProperty(item)) {
      acc[item] = 0;
    }

    acc[item]++;

    return acc;
  }, {});

  const values = Object.values(counter);
  const set = new Set(values);

  return values.length === set.size;
}

const assert = require('assert');
assert.ok(uniqueNumbersOfOccurences([1, 2, 2, 1, 1, 3]));
