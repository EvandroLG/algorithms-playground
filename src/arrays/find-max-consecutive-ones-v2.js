/*
  Find Max Consecutive Ones V2

  Given a binary array nums, return the maximum number of consecutive 1's in the array if you can flip at most one 0.

  Example:
  Input: [1,0,1,1,0]
  Output: 4
*/

function findMaxConsecutiveOnesV2(arr) {
  let p1 = 0;
  let p2 = 0;
  let index = -1;
  let canFlip = true;
  let output = 0;

  while (p2 < arr.length) {
    const item = arr[p2];
    p2++;

    if (!item) {
      if (canFlip) {
        canFlip = false;
      } else {
        p1 = index;
      }

      index = p2;
    }

    output = Math.max(output, p2 - p1);
  }

  return output;
}

const assert = require('assert');
assert.equal(findMaxConsecutiveOnesV2([1, 0, 1, 1, 0]), 4);
