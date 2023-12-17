/*
  Max Subarray Length

  You are given an integer array nums.
  Return the length of the longest semi-decreasing subarray of nums, and 0 if there are no such subarrays.
  - A subarray is a contiguous non-empty sequence of elements within an array.
  - A non-empty array is semi-decreasing if its first element is strictly greater than its last element.

  Example:
  Input: [5,3,6,7,9]
  Output: 2
*/

function maxSubarrayLength(arr) {
  if (arr.length <= 1) {
    return 0;
  }

  let p1 = 0;
  let p2 = arr.length - 1;

  if (arr[p1] > arr[p2]) {
    return arr.length;
  }

  const left = maxSubarrayLength(arr.slice(1));
  const right = maxSubarrayLength(arr.slice(0, arr.length - 1));

  return Math.max(left, right);
}

const assert = require('assert');
assert.equal(maxSubarrayLength([5, 3, 6, 7, 9]), 2);
