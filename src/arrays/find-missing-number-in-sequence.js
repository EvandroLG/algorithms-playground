/*
  Find Missing Number In Sequence

  Given an array numbers of size n storing n different integers which fall within the range [0, n], implement a function to identify the missing element in the array. All numbers except one are present in the array. Find the missing number.

  Example:
  Input: [1,3,0]
  Output: 2
*/

function findMissingNumberInSequence(arr) {
  const memo = buildSet(arr.length);

  for (const item of arr) {
    memo.delete(item);
  }

  return memo.values().next().value;
}

function buildSet(n) {
  const memo = new Set();

  for (let i = 0; i <= n; i++) {
    memo.add(i);
  }

  return memo;
}

const assert = require('assert');
assert.equal(findMissingNumberInSequence([1, 3, 0]), 2);
