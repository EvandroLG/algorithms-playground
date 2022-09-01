/*
  Intersections

  Given three integer arrays arr1, arr2 and arr3 sorted in strictly increasing order, return a sorted array of only the integers that appeared in all three arrays.

  Example:
  Input: [1,2,3,4,5], [1,2,5,7,9], [1,3,4,5,8]
  Output: [1,5]
*/

function intersections(arr1, arr2, arr3) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  const set3 = new Set(arr3);
  const counter = getCounter(set1, set2, set3);

  return Object.keys(counter)
    .filter((key) => counter[key] === 3)
    .map(Number);
}

function getCounter(...args) {
  let output = {};

  for (const arg of args) {
    output = Array.from(arg).reduce((acc, item) => {
      if (!acc.hasOwnProperty(item)) {
        acc[item] = 0;
      }

      acc[item]++;

      return acc;
    }, output);
  }

  return output;
}

const assert = require('assert');
assert.deepEqual(
  intersections([1, 2, 3, 4, 5], [1, 2, 5, 7, 9], [1, 3, 4, 5, 8]),
  [1, 5]
);
