/*
  Permutations

  Given an array nums of distinct integers, return all the possible permutations.
  You can return the answer in any order.

  Example:
  Input: [1,2,3]
  Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
*/
function swap(arr, i, j) {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

function permutations(arr) {
  const copy = arr.slice();
  const output = [];

  (function backtrack(start = 0) {
    if (start === copy.length) {
      output.push(copy.slice());
    }

    for (let i = start; i < copy.length; i++) {
      swap(copy, start, i);
      backtrack(start + 1);
      swap(copy, start, i);
    }
  })();

  return output;
}

const assert = require('assert');
assert.deepEqual(permutations([1, 2, 3]), [
  [1, 2, 3],
  [1, 3, 2],
  [2, 1, 3],
  [2, 3, 1],
  [3, 2, 1],
  [3, 1, 2],
]);
