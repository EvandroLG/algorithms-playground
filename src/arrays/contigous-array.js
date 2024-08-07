/*
  Contigous Array

  Given a binary array nums, return the maximum length of a contiguous subarray with an equal number of 0 and 1.

  Example:
  Input: [0,1,0]
  Output: 2
*/

function contigousArray(arr) {
  let zeroCounter = 0;
  let oneCounter = 0;
  let max = 0;
  const diff = {};

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zeroCounter++;
    } else {
      oneCounter++;
    }

    const key = oneCounter - zeroCounter;

    if (!diff.hasOwnProperty(key)) {
      diff[key] = i;
    }

    if (zeroCounter === oneCounter) {
      max = zeroCounter + oneCounter;
    } else {
      const idx = diff[key];
      max = Math.max(max, i - idx);
    }
  }

  return max;
}

const assert = require('assert');
assert.strictEqual(contigousArray([0, 1, 0]), 2);
