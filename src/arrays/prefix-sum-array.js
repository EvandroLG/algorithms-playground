/*
  Prefix Sum Array

  Given an array arr[] of size n, its prefix sum array is another array prefixSum[] of the same size, such that the value of prefixSum[i] is arr[0] + arr[1] + arr[2] … arr[i].

  Example:
  Input: [10, 20, 10, 5, 15]
  Output: [10, 30, 40, 45, 60]
*/

function prefixSumArray(arr) {
  const output = [];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    output[i] = sum;
  }

  return output;
}

const assert = require('assert');
assert.deepEqual(prefixSumArray([10, 20, 10, 5, 15]), [10, 30, 40, 45, 60]);
