/*
  Number Of Pairs

  Given an array of digit strings nums and a digit string target, return the number of pairs of indices (i, j) (where i != j) such that the concatenation of nums[i] + nums[j] equals target.

  Example:
  Input: ["777","7","77","77"], "7777"
  output: 4
*/

function numberOfPairs(arr, target) {
  let counter = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const result1 = arr[i] + arr[j];
      const result2 = arr[j] + arr[i];

      if (result1 === target) {
        counter++;
      }

      if (result2 === target) {
        counter++;
      }
    }
  }

  return counter;
}

const assert = require('assert');
assert.equal(numberOfPairs(['777', '7', '77', '77'], '7777'), 4);
