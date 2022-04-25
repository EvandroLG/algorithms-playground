/*
  Find Max Consecutive Ones

  Given a binary array arr, return the maximum number of consecutive 1's in the array.

  Example:
  Input: [1,1,0,1,1,1]
  Output: 3
*/

function findMaxConsecutiveOnes(arr) {
  let current = 0;
  let max = 0;
  let p1 = 0;

  while (p1 < arr.length) {
    if (arr[p1] === 1) {
      current++;
    } else {
      current = 0;
    }

    max = Math.max(current, max);

    p1++;
  }

  return max;
}

const assert = require('assert');
assert.equal(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]), 3);
