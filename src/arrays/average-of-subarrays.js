/*
  Average Of Subarrays

  Given an array, find the average of all contiguous subarrays of size k.

  Example:
  Input: [1, 2, 3, 4, 5], 3
  Output: [2, 3, 4]
*/

function averageOfSubarrays(arr, k) {
  const output = [];
  let windowStart = 0;
  let windowSum = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd];

    if (windowEnd >= k - 1) {
      output.push(windowSum / k);
      windowSum -= arr[windowStart];
      windowStart++;
    }
  }

  return output;
}

const assert = require('assert');
assert.deepEqual(averageOfSubarrays([1, 2, 3, 4, 5], 3), [2, 3, 4]);
