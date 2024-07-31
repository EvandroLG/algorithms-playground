/*
  Move All Zeros To The Right

  Given an array, move all of the zeros to the right.

  Input:
  [1, 0, 0, 2, 5, 0]

  Output:
  [1, 2, 5, 0, 0, 0]
*/

function moveAllZerosToTheRight(arr) {
  let last = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      const tmp = arr[last];
      arr[last] = arr[i];
      arr[i] = tmp;
      last++;
    }
  }
}

const assert = require('assert');
const arr = [1, 0, 0, 2, 5, 0];
moveAllZerosToTheRight(arr);
assert.deepEqual(arr, [1, 2, 5, 0, 0, 0]);
