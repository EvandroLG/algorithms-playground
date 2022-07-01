/*
  Shuffle

  Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].
  Return the array in the form [x1,y1,x2,y2,...,xn,yn].

  Example:
  Input: [2,5,1,3,4,7], 3
  Output: [2,3,5,4,1,7]
*/

function shuffle(arr, n) {
  const output = [];
  let p1 = 0;
  let p2 = n;

  while (p2 < arr.length) {
    output.push(arr[p1], arr[p2]);
    p1++;
    p2++;
  }

  return output;
}

const assert = require('assert');
assert.deepEqual(shuffle([2, 5, 1, 3, 4, 7], 3), [2, 3, 5, 4, 1, 7]);
