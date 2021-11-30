/*
  Average Subarrays

  Given an array, find the average of all contiguous subarrays of size `k`.

  Example:
  Input: [1, 2, 3, 4, 5], 3
  Output: [6, 9, 12]
*/

function averageSubarrays(arr, target) {
  const output = [];
  let start = 0;
  let end = 0;
  let sum = 0;

  while (end < arr.length) {
    sum += arr[end];
    end++;

    if (end >= target) {
      output.push(sum);
      sum -= arr[start];
      start++;
    }
  }

  return output;
}

const assert = require('assert');
assert.deepEqual(averageSubarrays([1, 2, 3, 4, 5], 3), [6, 9, 12]);
