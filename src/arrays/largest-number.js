/*
  Largest Number

  You are given an integer array nums where the largest integer is unique.
  Determine whether the largest element in the array is at least twice as much as every other number in the array.
  If it is, return the index of the largest element, or return -1 otherwise.

  Example:
  Input: [3,6,1,0]
  Output: 1
*/

function largestNumber(arr) {
  const [valueLargest, index] = getLargestValue(arr);
  const valueSecondLargest = getSecondLargestValue(arr, index);

  if (valueLargest >= valueSecondLargest * 2) {
    return index;
  }

  return -1;
}

function getLargestValue(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];

    if (!result.length || value > result[0]) {
      result[0] = value;
      result[1] = i;
    }
  }

  return result;
}

function getSecondLargestValue(arr, index) {
  return arr.reduce((acc, item, idx) => {
    if (idx === index) {
      return acc;
    }

    return Math.max(acc, item);
  }, -Infinity);
}

const assert = require('assert');
assert.strictEqual(largestNumber([3, 6, 1, 0]), 1);
