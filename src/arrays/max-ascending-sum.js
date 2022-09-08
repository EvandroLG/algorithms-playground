/*
  Max Ascending Sum

  Given an array of positive integers nums, return the maximum possible sum of an ascending subarray in nums.
  A subarray is defined as a contiguous sequence of numbers in an array.

  Example:
  Input: [10,20,30,5,10,50]
  Output: 65
*/

function maxAscendingSum(arr) {
  let p1 = 0;
  let p2 = 1;
  let tmp = arr[p1];
  let sum = 0;

  while (p2 < arr.length) {
    if (arr[p1] < arr[p2]) {
      tmp += arr[p2];
      p1++;
      p2++;
    } else {
      sum = Math.max(sum, tmp);
      p1 = p2;
      tmp = arr[p1];
      p2++;
    }
  }

  sum = Math.max(sum, tmp);

  return sum;
}

const assert = require('assert');
assert.equal(maxAscendingSum([10, 20, 30, 5, 10, 50]), 65);
