/*
  Single Element In A Sorted Array

  You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once.
  Return the single element that appears only once.

  Example:
  Input: [1,1,2,3,3,4,4,8,8]
  Output: 2
*/

function singleElementInASortedArray(arr) {
  for (let i = 0; i < arr.length; i += 2) {
    if (arr[i] !== arr[i + 1]) {
      return arr[i];
    }
  }

  return arr.at(-1);
}

const assert = require('assert');
assert.equal(singleElementInASortedArray([1, 1, 2, 3, 3, 4, 4, 8, 8]), 2);
