/*
  Subsets

  Given an integer array nums of unique elements, return all possible subsets (the power set).
  The solution set must not contain duplicate subsets. Return the solution in any order.

  Example:
  Input: [1, 2, 3]
  Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
*/

function subsets(arr) {
  const output = [[]];

  for (const item of arr) {
    const subsets = [];

    for (const current of output) {
      subsets.push(current.concat(item));
    }

    for (const subset of subsets) {
      output.push(subset);
    }
  }

  return output;
}

const assert = require('assert');
assert.deepEqual(subsets([1, 2, 3]), [
  [],
  [1],
  [2],
  [1, 2],
  [3],
  [1, 3],
  [2, 3],
  [1, 2, 3],
]);
