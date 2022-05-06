/*
  Peak Index In A Mountain

  Let's call an array arr a mountain if the following properties hold:
  - arr.length >= 3
  - There exists some i with 0 < i < arr.length - 1 such that:
    - arr[0] < arr[1] < ... arr[i-1] < arr[i]
    - arr[i] > arr[i+1] > ... > arr[arr.length - 1]

  Example:
  Input: [0,10,5,2]
  Output: 1
*/

function peakIndexInAMountain(arr) {
  let peakIdx = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[peakIdx] < arr[i]) {
      peakIdx = i;
    }
  }

  return peakIdx;
}

const assert = require('assert');
assert.equal(peakIndexInAMountain([0, 10, 5, 2]), 1);
