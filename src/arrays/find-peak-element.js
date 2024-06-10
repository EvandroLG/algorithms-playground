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
  if (nums.length === 1) {
    return 0;
  }

  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    const back = nums[middle - 1] ?? -Infinity;
    const forward = nums[middle + 1] ?? -Infinity;

    if (nums[middle] > forward && nums[middle] > back) {
      return middle;
    }

    if (forward > nums[middle]) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return -1;
}

const assert = require('assert');
assert.equal(findPeakElement([1, 2, 3, 1]), 2);
