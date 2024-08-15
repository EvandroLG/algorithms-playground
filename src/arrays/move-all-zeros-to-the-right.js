/*
  Move All Zeros To The Right

  Given an array, move all of the zeros to the right.

  Input:
  [1, 0, 0, 2, 5, 0]

  Output:
  [1, 2, 5, 0, 0, 0]
*/

function moveAllZerosToTheRight(arr) {
  let p1 = 0;

  for (let p2 = 0; p2 < arr.length; p2++) {
    if (arr[p2] !== 0) {
      arr[p1] = arr[p2];
      p1++;
    }
  }

  while (p1 < arr.length) {
    arr[p1] = 0;
    p1++;
  }
}

const assert = require('assert');
const arr = [1, 0, 0, 2, 5, 0];
moveAllZerosToTheRight(arr);
assert.deepEqual(arr, [1, 2, 5, 0, 0, 0]);
