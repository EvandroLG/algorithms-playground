/*
  Min Max Sum

  Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers.
  Then print the respective minimum and maximum values as a single line of two space-separated long integers.

  Example:
  Input: [1, 3, 5, 7, 9]
  Output: [16, 24]
*/

function minMaxSum(arr) {
  const sum = arr.reduce((acc, value) => acc + value);
  let min = Infinity;
  let max = -Infinity;

  for (const value of arr) {
    const result = sum - value;
    min = Math.min(min, result);
    max = Math.max(max, result);
  }

  return [min, max];
}

const assert = require('assert');
assert.deepStrictEqual(minMaxSum([1, 3, 5, 7, 9]), [16, 24]);
