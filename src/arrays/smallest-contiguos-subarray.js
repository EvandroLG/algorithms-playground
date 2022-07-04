/*
  Smallest Contiguos Subarray

  Given an array of positive numbers and a positive number k, find the length of the smallest
  contiguous subarray whose sum is greater than or equal to k.
  Return 0 if no such subarray exists.

  Example:
  Input: [1, 3, 2, 2, 4, 5], 6
  Output: 2
*/

function smallestContiguosSubarray(arr, k) {
  let windowStart = 0;
  let windowSum = 0;
  let tmpResult = 0;
  let result = Infinity;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd];
    tmpResult++;

    while (windowSum >= k) {
      result = Math.min(tmpResult, result);
      windowSum -= arr[windowStart];
      windowStart++;
      tmpResult--;
    }
  }

  return result === Infinity ? 0 : result;
}

const assert = require('assert');
assert.equal(smallestContiguosSubarray([1, 3, 2, 2, 4, 5], 6), 2);
assert.equal(smallestContiguosSubarray([2, 1, 5, 2, 8], 7), 1);
