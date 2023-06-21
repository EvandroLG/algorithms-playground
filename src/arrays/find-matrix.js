/*
  Find Matrix

  You are given an integer array nums. You need to create a 2D array from nums satisfying the following conditions:
  - The 2D array should contain only the elements of the array nums.
  - Each row in the 2D array contains distinct integers.
  - The number of rows in the 2D array should be minimal.
  Return the resulting array. If there are multiple answers, return any of them.
  Note that the 2D array can have a different number of elements on each row.

  Example:
  Input: [1,3,4,1,2,3,1]
  Output: [[1,3,4,2],[1,3],[1]]
*/

function findMatrix(arr) {
  const output = [];

  for (const item of arr) {
    const idx = findIdx(output, item);

    if (idx === -1) {
      output.push(new Set([item]));
    } else {
      output[idx].add(item);
    }
  }

  return output.map((set) => Array.from(set));
}

function findIdx(arr, item) {
  let size = Infinity;
  let idx = -1;

  for (let i = 0; i < arr.length; i++) {
    const set = arr[i];

    if (!set.has(item) && set.size < size) {
      idx = i;
      size = set.size;
    }
  }

  return idx;
}

const assert = require('assert');
assert.deepEqual(findMatrix([1, 3, 4, 1, 2, 3, 1]), [
  [1, 3, 4],
  [1, 2, 3],
  [1],
]);
