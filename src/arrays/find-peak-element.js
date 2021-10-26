/*
  Find Peak Element

  A peak element is an element that is strictly greater than its neighbors.
  Given an integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.
  You may imagine that nums[-1] = nums[n] = -∞.
  You must write an algorithm that runs in O(log n) time.

  Example:
  Input: [1,2,3,1]
  Output: 2
*/

function findPeakElement(arr) {
  const sorted = arr.slice().sort((a, b) => a - b);
  const lastItem = sorted[sorted.length - 1];
  const indexes = arr.reduce((acc, item, idx) => {
    acc[item] = idx;
    return acc;
  }, {});

  return indexes[lastItem];
}

const assert = require('assert');
assert.equal(findPeakElement([1, 2, 3, 1]), 2);
