/*
  Relative Sort Arrays

  Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1.
  Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2.
  Elements that do not appear in arr2 should be placed at the end of arr1 in ascending order.

  Example:
  Input: [2,3,1,3,2,4,6,7,9,2,19], [2,1,4,3,9,6]
  Output: [2,2,2,1,4,3,3,9,6,7,19]
*/

function relativeSortArrays(arr1, arr2) {
  const set = new Set(arr2);
  const same = arr1.filter((item) => set.has(item));
  const diff = arr1.filter((item) => !set.has(item));

  return [...sort(same, set), ...diff.sort((a, b) => a - b)];
}

function sort(arr, set) {
  const counter = getCounter(arr);
  const output = [];

  for (const item of set) {
    let size = counter[item];

    while (size--) {
      output.push(item);
    }
  }

  return output;
}

function getCounter(arr) {
  return arr.reduce((acc, item) => {
    if (!acc.hasOwnProperty(item)) {
      acc[item] = 0;
    }

    acc[item]++;

    return acc;
  }, {});
}

const assert = require('assert');
assert.deepEqual(
  relativeSortArrays([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6]),
  [2, 2, 2, 1, 4, 3, 3, 9, 6, 7, 19]
);
