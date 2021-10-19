/*
  Top K Frequent Elements

  Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

  Example:
  Input: [1,1,1,2,2,3], 2
  Output: [1, 2]
*/

function topKFrequentElements(arr, k) {
  const counter = {};

  for (const item of arr) {
    if (counter.hasOwnProperty(item)) {
      counter[item]++;
    } else {
      counter[item] = 1;
    }
  }

  return Object.keys(counter)
    .sort((a, b) => counter[a] - counter[b])
    .slice(k * -1);
}

const assert = require('assert');
assert.deepEqual(
  topKFrequentElements([1, 1, 1, 2, 2, 3], 2).sort((a, b) => a - b),
  [1, 2]
);
