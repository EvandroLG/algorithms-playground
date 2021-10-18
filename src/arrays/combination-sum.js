/*
  Combination Sum

  Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.
  The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.
  It is guaranteed that the number of unique combinations that sum up to target is less than 150 combinations for the given input.

  Example:
  Input: [2,3,6,7],  7
  Output: [[2, 2, 3], [7]]
*/

function combinationSum(arr, target) {
  const output = [];

  (function backtrack(remind = target, result = [], idx = 0) {
    if (remind === 0) {
      output.push(result);
    } else if (remind > 0) {
      for (let i = idx; i < arr.length; i++) {
        result.push(arr[i]);
        backtrack(remind - arr[i], result, i);
        result.pop();
      }
    }
  })();

  return output;
}

const assert = require('assert');
assert.ok(combinationSum([2, 3, 6, 7], 7), [[2, 2, 3], [7]]);
