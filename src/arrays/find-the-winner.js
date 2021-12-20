/*
  Find The Winner

  There are n friends that are playing a game. The friends are sitting in a circle and are numbered from 1 to n in clockwise order.
  More formally, moving clockwise from the ith friend brings you to the (i+1)th friend for 1 <= i < n, and moving clockwise from the nth friend brings you to the 1st friend.

  Example:
  Input: 5, 2
  Output: 3
*/

function findTheWinner(n, k) {
  const arr = new Array(n).fill(0).map((_, idx) => idx + 1);
  let currentIdx = 0;

  while (arr.length > 1) {
    currentIdx += k - 1;
    currentIdx = currentIdx % arr.length;
    arr.splice(currentIdx, 1);
  }

  return arr[0];
}

const assert = require('assert');
assert.equal(findTheWinner(5, 2), 3);
