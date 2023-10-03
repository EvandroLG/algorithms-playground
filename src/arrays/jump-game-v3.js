/*
  Jump Game V3

  Given an array of non-negative integers arr, you are initially positioned at start index of the array. When you are at index i, you can jump to i + arr[i] or i - arr[i], check if you can reach any index with value 0.
  Notice that you can not jump outside of the array at any time.

  Example:
  Input: [4,2,3,0,3,1,2], 5
  Output: true
*/

function jumpGameV3(arr, start) {
  const memo = new Set();

  function helper(index) {
    if (memo.has(index)) {
      return false;
    }

    if (arr[index] === 0) {
      return true;
    }

    memo.add(index);

    return helper(index + arr[index]) || helper(index - arr[index]);
  }

  return helper(start);
}

const assert = require('assert');
assert.ok(jumpGameV3([4, 2, 3, 0, 3, 1, 2], 5));
