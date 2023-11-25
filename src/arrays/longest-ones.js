/*
  Longest Ones

  Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

  Example:
  Input: [1,1,1,0,0,0,1,1,1,1,0], 2
  Output: 6
*/

function longestOnes(arr, k) {
  let counter = 0;
  let max = 0;
  let left = 0;

  for (let right = 0; right < arr.length; right++) {
    if (arr[right] === 0) {
      counter++;
    }

    while (counter > k) {
      if (arr[left] === 0) {
        counter--;
      }

      left++;
    }

    max = Math.max(max, right - left + 1);
  }
}

const assert = require('assert');
assert.ok(longestOnes());
