/*
  Index Equals Value

  Write a function that takes in a sorted array of distinct integers and returns the first index in the array that is equal to the value at that index. In other words, your function should return the minimum index where index == array[index].
  If there is no such index, your function should return -1.

  Sample Input
  array = [-5, -3, 0, 3, 4, 5, 9]

  Sample Output
  3 // 3 == array[3]
*/

function indexEqualsValue(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const index = Math.round((right + left) / 2);
    const value = arr[index];

    if (index === value && (index === 0 || arr[index - 1] < index - 1)) {
      return index;
    }

    if (value < index) {
      left = index + 1;
    } else {
      right = index - 1;
    }
  }

  return -1;
}

const assert = require('assert');
assert.equal(indexEqualsValue([-5, -3, 0, 3, 4, 5, 9]), 3);
