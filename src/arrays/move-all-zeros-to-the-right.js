/*
  Move All Zeros To The Right

  Given an array, move all of the zeros to the right.

  Input:
  [1, 0, 0, 2, 5, 0]

  Output:
  [1, 2, 5, 0, 0, 0]
*/

function moveAllZerosToTheRight(arr) {
  const size = arr.length;
  let count = 0;

  for (let i = 0; i < size; i++) {
    if (arr[i] !== 0) {
      arr[count] = arr[i];
      count++;
    }
  }

  while (count < size) {
    arr[count] = 0;
    count++;
  }

  return arr;
}

const assert = require('assert');
const arr = [1, 0, 0, 2, 5, 0];
assert.deepEqual(moveAllZerosToTheRight(arr), [1, 2, 5, 0, 0, 0]);
