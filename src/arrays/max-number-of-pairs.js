/*
  Max Number Of Pairs

  You are given an integer array nums and an integer k.
  In one operation, you can pick two numbers from the array whose sum equals k and remove them from the array.
  Return the maximum number of operations you can perform on the array.

  Example:
  Input: [1,2,3,4], 5
  Output: 2
*/

function maxNumberOfPairs(arr, k) {
  const memo = {};
  let result = 0;

  for (const item of arr) {
    const diff = k - item;

    if (memo.hasOwnProperty(diff) && memo[diff] >= 1) {
      result++;
      memo[diff]--;
    } else {
      if (!memo.hasOwnProperty(item)) {
        memo[item] = 0;
      }

      memo[item]++;
    }
  }

  return result;
}

const assert = require('assert');
assert.strictEqual(maxNumberOfPairs([1, 2, 3, 4], 5), 2);
