/*
  Move Element To End

  You're given an array of integers and an integer. Write a function that moves all instances of that integer in the array to the end of the array and returns the array.
  The function should perform this in place (i.e., it should mutate the input array) and doesn't need to maintain the order of the other integers.

  Sample Input
  array = [2, 1, 2, 2, 2, 3, 4, 2]
  toMove = 2

  Sample Output
  [1, 3, 4, 2, 2, 2, 2, 2] // the numbers 1, 3, and 4 could be ordered differently
*/

function swap(arr, i, j) {
  const value = arr[i];
  arr[i] = arr[j];
  arr[j] = value;
}

function moveElementToEnd(arr, toMove) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    if (arr[end] === toMove) {
      end = end - 1;
      continue;
    }

    if (arr[start] === toMove) {
      swap(arr, start, end);
    }

    start = start + 1;
  }

  return arr;
}

const assert = require('assert');
assert.deepEqual(moveElementToEnd([2, 1, 2, 2, 2, 3, 4, 2], 2), [
  4,
  1,
  3,
  2,
  2,
  2,
  2,
  2,
]);
