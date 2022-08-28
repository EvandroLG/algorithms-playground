/*
  Find Least Number Of Unique Ints

  Given an array of integers arr and an integer k.
  Find the least number of unique integers after removing exactly k elements.

  Example:
  Input: [4,3,1,1,3,3,2], k = 3
  Output: 2
*/

function findLeastNumberOfUniqueInts(arr, k) {
  const counter = getCounter(arr);
  const entries = Object.entries(counter);
  const sorted = entries.sort((a, b) => a[1] - b[1]);

  for (const [key] of sorted) {
    if (k >= counter[key]) {
      while (counter[key]) {
        counter[key]--;
        k--;
      }
    }
  }

  return Object.keys(counter).filter((key) => counter[key] > 0).length;
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
assert.equal(findLeastNumberOfUniqueInts([4, 3, 1, 1, 3, 3, 2], 3), 2);
