/*
  Plus One

  Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer.
  The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.
  You may assume the integer does not contain any leading zero, except the number 0 itself.

  Example 1:
  Input: [9, 9]
  Output: [1, 0, 0]
*/

function plusOne(arr) {
  const lastIdx = arr.length - 1;

  if (arr[lastIdx] < 9) {
    arr[lastIdx] = arr[lastIdx] + 1;
    return arr;
  }

  arr[lastIdx] = 0;
  const top = arr.slice(lastIdx);
  const rest = arr.slice(0, lastIdx);

  return plusOne(rest.length ? rest : [0]).concat(top);
}

const assert = require('assert');
assert.deepEqual(plusOne([9, 9]), [1, 0, 0]);
