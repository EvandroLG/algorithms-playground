/*
  Combinations Sum V3

  Find all valid combinations of k numbers that sum up to n such that the following conditions are true:
  - Only numbers 1 through 9 are used.
  - Each number is used at most once.
  Return a list of all possible valid combinations. The list must not contain the same combination twice, and the combinations may be returned in any order.

  Example:
  Input: 3, 9
  Output: [[1,2,6],[1,3,5],[2,3,4]]
*/

function combinationsSumV3(k, n) {
  const output = [];

  (function backtrack(start = 1, result = []) {
    if (result.length === k) {
      if (sum(result) === n) {
        output.push(result);
      }
    } else {
      for (let i = start; i < 10; i++) {
        result.push(i);
        backtrack(i + 1, result.slice());
        result.pop();
      }
    }
  })();

  return output;
}

function sum(arr) {
  return arr.reduce((acc, item) => acc + item);
}

const assert = require('assert');
const expected = [
  [1, 2, 6],
  [1, 3, 5],
  [2, 3, 4],
];
assert.deepEqual(combinationsSumV3(3, 9), expected);
