/*
  N Unique Integers Sum Up To Zero

  Given an integer n, return any array containing n unique integers such that they add up to 0.

  Example:
  Input: 5
  Output: [0,-1,1,-2,2]
*/

function nUniqueIntegersSumUpToZero(n) {
  const output = [];

  if (n % 2 !== 0 || n === 1) {
    output.push(0);
  }

  (function helper(size, arr, value) {
    if (arr.length === size) {
      return;
    }

    arr.push(...[-value, value]);

    return helper(size, arr, ++value);
  })(n, output, 1);

  return output;
}

const assert = require('assert');
assert.deepEqual(nUniqueIntegersSumUpToZero(5), [0, -1, 1, -2, 2]);
