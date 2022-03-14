/*
  Can Make Arithmetic Progression

  A sequence of numbers is called an arithmetic progression if the difference between any two consecutive elements is the same.
  Given an array of numbers arr, return true if the array can be rearranged to form an arithmetic progression. Otherwise, return false.

  Exaple:
  Input: [3,5,1]
  Output: true
*/

function canMakeArithmeticProgression(arr) {
  const sorted = arr.slice().sort((a, b) => a - b);
  let p1 = 0;
  let p2 = 1;
  let diff = null;

  while (p2 < sorted.length) {
    if (diff === null) {
      diff = sorted[p1] - sorted[p2];
    } else if (sorted[p1] - sorted[p2] !== diff) {
      return false;
    }

    p1++;
    p2++;
  }

  return true;
}

const assert = require('assert');
assert.ok(canMakeArithmeticProgression([3, 5, 1]));
