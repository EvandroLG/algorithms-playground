/*
  Sum Of All Odd Length Subarrays

  Given an array of positive integers arr, calculate the sum of all possible odd-length subarrays.
  A subarray is a contiguous subsequence of the array.
  Return the sum of all odd-length subarrays of arr.

  Example:
  Input: [1, 4, 2, 5, 3]
  Output: 58
*/

function sumOddLengthSubarrays(arr) {
  const output = [];

  (function traverse(idx) {
    if (idx > arr.length) {
      return;
    }

    let size = idx;
    let i = 0;
    const subarray = [];

    while (size <= arr.length) {
      const items = arr.slice(i, size);
      const result = items.reduce((acc, item) => acc + item);
      subarray.push(result);
      i++;
      size++;
    }

    output.push(...subarray);
    traverse(idx + 2);
  })(1);

  return output.reduce((acc, item) => acc + item);
}

const assert = require('assert');
assert.equal(sumOddLengthSubarrays([1, 4, 2, 5, 3]), 58);
