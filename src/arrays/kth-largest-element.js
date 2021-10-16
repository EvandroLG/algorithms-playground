/*
  Kth Largest Element

  Given an integer array nums and an integer k, return the kth largest element in the array.
  Note that it is the kth largest element in the sorted order, not the kth distinct element.

  Example:
  Input: nums = [3,2,1,5,6,4], k = 2
  Output: 5
*/

function kthLargestElement(arr, k) {
  const sorted = arr.slice().sort((a, b) => a - b);
  let peek = sorted.pop();
  let n = k - 1;

  while (n) {
    peek = sorted.pop();
    n--;
  }

  return peek;
}

const assert = require('assert');
assert.equal(kthLargestElement([3, 2, 1, 5, 6, 4], 2), 5);
