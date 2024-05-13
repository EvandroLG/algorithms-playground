/*
  Longest Subarray After Deleting One

  Given a binary array nums, you should delete one element from it.
  Return the size of the longest non-empty subarray containing only 1's in the resulting array. Return 0 if there is no such subarray.

  Example:
  Input: [0,1,1,1,0,1,1,0,1]
  Output: 5
*/

function longestSubarrayAfterDeletingOne(arr) {
  let zeroCounter = 0;
  let start = 0;
  let longest = 0;

  for (let end = 0; end < arr.length; end++) {
    if (arr[end] === 0) {
      zeroCounter++;
    }

    while (zeroCounter > 1) {
      if (arr[start] === 0) {
        zeroCounter--;
      }

      start++;
    }

    longest = Math.max(longest, end - start);
  }

  return longest;
}

const assert = require('assert');
assert.strictEqual(
  longestSubarrayAfterDeletingOne([0, 1, 1, 1, 0, 1, 1, 0, 1]),
  5
);
