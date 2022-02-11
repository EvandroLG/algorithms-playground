/*
  Combinations

  Given two integers n and k, return all possible combinations of k numbers out of the range [1, n].
  You may return the answer in any order.

  Example:
  Input: 4, 2
  Output = [[2,4], [3,4], [2,3], [1,2], [1,3], [1,4]]
*/

function combinations(n, k) {
  const arr = generateArray(n);
  const output = [];

  (function backtrack(result = [], idx = 0) {
    if (result.length === k) {
      output.push(result);
    } else {
      for (let i = idx; i < arr.length; i++) {
        result.push(arr[i]);
        backtrack(result.slice(), i + 1);
        result.pop();
      }
    }
  })();

  return output;
}

function generateArray(n) {
  const output = [];

  for (let i = 1; i <= n; i++) {
    output.push(i);
  }

  return output;
}

const assert = require('assert');
assert.deepEqual(combinations(4, 2), [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 3],
  [2, 4],
  [3, 4],
]);
