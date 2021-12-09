/*
  Subarrays Sum

  Given an array of integers nums and an integer k, return the total number of continuous subarrays whose sum equals to k.

  Example:
  Input: [1, 1, 1], 2
  Output: 2
*/

function subarraysSum(arr, target) {
  const memo = new Map([[0, 1]]);
  let count = 0;
  let sum = 0;

  for (const item of arr) {
    sum = sum + item;
    const diff = sum - target;

    if (memo.has(diff)) {
      count = count + memo.get(diff);
    }

    if (memo.has(sum)) {
      memo.set(sum, memo.get(sum) + 1);
    } else {
      memo.set(sum, 1);
    }
  }

  return count;
}

const assert = require('assert');
assert.equal(subarraysSum([1, 2, 3], 3), 2);
