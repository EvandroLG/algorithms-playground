/*
  Jump Game V2

  You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0].
  Each element nums[i] represents the maximum length of a forward jump from index i.
  Return the minimum number of jumps to reach nums[n - 1]. The test cases are generated such that you can reach nums[n - 1].

  Example:
  Input: [2,3,1,1,4]
  Output: 2
*/

function jumpGameV2(arr) {
  let steps = 0;
  let left = 0;
  let right = 0;

  while (right < arr.length - 1) {
    let farthest = 0;

    for (let i = left; i <= right; i++) {
      farthest = Math.max(farthest, i + arr[i]);
    }

    left = right + 1;
    right = farthest;
    steps++;
  }

  return steps;
}

const assert = require('assert');
assert.equal(jumpGameV2([2, 3, 1, 1, 4]), 2);
