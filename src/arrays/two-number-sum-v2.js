/*
  Two Number Sum V2

  Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number.
  Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.
  Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.
  The tests are generated such that there is exactly one solution. You may not use the same element twice.

  Example:
  Input: [2,7,11,15], 9
  Output: [1, 2]
*/

function twoNumberSumV2(arr, target) {
  let p1 = 0;
  let p2 = arr.length - 1;

  while (p1 < p2) {
    const sum = arr[p1] + arr[p2];

    if (sum === target) {
      return [p1 + 1, p2 + 1];
    }

    if (sum < target) {
      p1++;
    } else {
      p2--;
    }
  }

  return [-1, -1];
}

const assert = require('assert');
assert.deepEqual(twoNumberSumV2([2, 7, 11, 15], 9), [1, 2]);
