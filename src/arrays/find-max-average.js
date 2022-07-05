/*
  Find Max Average

  You are given an integer array nums consisting of n elements, and an integer k.
  Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value.
  Any answer with a calculation error less than 10-5 will be accepted.

  Example:
  Input: [1, 12, -5, -6, 50, 3]
  Output: 12.75
*/

function findMaxAverage(nums, k) {
  let windowStart = 0;
  let windowSum = 0;
  let tmpResult = 0;
  let result = -Infinity;

  for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
    windowSum++;
    tmpResult += nums[windowEnd];

    if (windowSum === k) {
      result = Math.max(result, tmpResult);
      tmpResult -= nums[windowStart];
      windowStart++;
      windowSum--;
    }
  }

  return result / k;
}

const assert = require('assert');
assert.equal(findMaxAverage([1, 12, -5, -6, 50, 3], 4), 12.75);
