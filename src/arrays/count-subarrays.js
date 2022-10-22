/*
  Count Subarrays

  You are given an array nums consisting of positive integers.
  Return the number of subarrays of nums that are in strictly increasing order.
  A subarray is a contiguous part of an array.

  Example:
  Input: [1,3,5,4,4,6]
  Output: 10
*/

function countSubarrays(arr) {
  let counter = 0;
  let prev = 0;

  for (let i = 0; i < arr.length; i++) {
    let currentCount = 1;

    if (i > 0 && arr[i] > arr[i - 1]) {
      currentCount += prev;
    }

    counter += currentCount;
    prev = currentCount;
  }

  return counter;
}

const assert = require('assert');
assert.equal(countSubarrays([1, 3, 5, 4, 4, 6]), 10);
