/*
  Pivot Array

  You are given a 0-indexed integer array nums and an integer pivot.
  Rearrange nums such that the following conditions are satisfied:
  - Every element less than pivot appears before every element greater than pivot.
  - Every element equal to pivot appears in between the elements less than and greater than pivot.
  - The relative order of the elements less than pivot and the elements greater than pivot is maintained.

  Example:
  Input: [9,12,5,10,14,3,10], 10
  Output: [9,5,3,10,10,12,14]
*/

function pivotArray(arr, pivot) {
  const smaller = [];
  const middle = [];
  const bigger = [];

  for (const n of arr) {
    if (n < pivot) {
      smaller.push(n);
    } else if (n > pivot) {
      bigger.push(n);
    } else {
      middle.push(n);
    }
  }

  return [...smaller, ...middle, ...bigger];
}

const assert = require('assert');
assert.deepEqual(pivotArray([9, 12, 5, 10, 14, 3, 10], 10), [
  9,
  5,
  3,
  10,
  10,
  12,
  14,
]);
