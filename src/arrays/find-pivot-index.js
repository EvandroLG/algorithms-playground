/*
  Find Pivot Index

  Given an array of integers nums, calculate the pivot index of this array.
  The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.
  If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left.
  This also applies to the right edge of the array.
  Return the leftmost pivot index. If no such index exists, return -1.

  Example:
  Input: [1,7,3,6,5,6]
  Output: 3
*/

function findPivotIndex(arr) {
  let leftSum = 0;
  const sum = arr.reduce((acc, item) => acc + item);

  for (let i = 0; i < arr.length; i++) {
    if (leftSum === sum - leftSum - arr[i]) {
      return i;
    }

    leftSum += arr[i];
  }

  return -1;
}

const assert = require('assert');
assert.equal(findPivotIndex([1, 7, 3, 6, 5, 6]), 3);
