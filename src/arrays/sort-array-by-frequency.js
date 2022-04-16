/*
  Sort Array By Frequency

  Given an array of integers nums, sort the array in increasing order based on the frequency of the values.
  If multiple values have the same frequency, sort them in decreasing order.
  Return the sorted array.

  Example:
  Input: [1,1,2,2,2,3]
  Output: [3,1,1,2,2,2]
*/

function sortArrayByFrequency(arr) {
  const counter = arr.reduce((acc, item) => {
    if (!acc.hasOwnProperty(item)) {
      acc[item] = 0;
    }

    acc[item]++;

    return acc;
  }, {});

  const sorted = arr.slice().sort((a, b) => {
    if (counter[a] === counter[b]) {
      return b - a;
    }

    return counter[a] - counter[b];
  });

  return sorted;
}

const assert = require('assert');
assert.deepEqual(sortArrayByFrequency([1, 1, 2, 2, 2, 3]), [3, 1, 1, 2, 2, 2]);
