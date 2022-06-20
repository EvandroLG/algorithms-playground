/*
  All Possible Subsets

  Given an integer array nums that may contain duplicates, return all possible subsets (the power set).
  The solution set must not contain duplicate subsets. Return the solution in any order.

  Example:
  Input: [1,2,2]
  Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]
*/

function allPossibleSubsets(nums) {
  const output = [];
  const memo = new Set();

  (function backtrack(arr = [], start = 0) {
    const str = JSON.stringify(arr.sort((a, b) => a - b));

    if (memo.has(str)) {
      return;
    }

    memo.add(str);
    output.push(arr);

    for (let i = start; i < nums.length; i++) {
      arr.push(nums[i]);
      backtrack(arr.slice(), i + 1);
      arr.pop();
    }
  })();

  return output;
}

const assert = require('assert');
assert.deepEqual(allPossibleSubsets([1, 2, 2]), [
  [],
  [1],
  [1, 2],
  [1, 2, 2],
  [2],
  [2, 2],
]);
