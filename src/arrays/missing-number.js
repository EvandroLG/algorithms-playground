/*
  Missing Number

  Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

  Example:
  Input: [3,0,1]
  Output: 2
*/

function missingNumber(arr) {
  let i = 0;

  while (i < arr.length) {
    if (arr[i] !== i && arr[i] < arr.length) {
      swap(arr, i, arr[i]);
    } else {
      i++;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== i) {
      return i;
    }
  }

  return arr.length;
}

function swap(arr, i, j) {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

const assert = require('assert');
assert.equal(missingNumber([3, 0, 1]), 2);
