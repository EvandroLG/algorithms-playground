/*
  SquaresOfASortedArray

  Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

  Example:
  Input: [-4, -1, 0, 3, 10]
  Output: [0, 1, 9, 16, 100]
*/

function squaresOfASortedArray(arr) {
  const output = [];
  const size = arr.length;
  let p1 = 0;
  let p2 = size - 1;

  for (let i = size - 1; i >= 0; i--) {
    let result = arr[p2];

    if (Math.abs(arr[p1]) > Math.abs(arr[p2])) {
      result = arr[p1];
      p1++;
    } else {
      p2--;
    }

    output[i] = Math.pow(result, 2);
  }

  return output;
}

const assert = require('assert');
assert.deepEqual(squaresOfASortedArray([-4, -1, 0, 3, 10]), [0, 1, 9, 16, 100]);
