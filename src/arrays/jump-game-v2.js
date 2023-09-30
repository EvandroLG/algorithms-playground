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
  const lastIndex = arr.length - 1;
  let minimumJumps = Infinity;

  function helper(index, currentJumps) {
    let jump = arr[index];

    while (jump) {
      const nextIndex = index + jump;

      if (nextIndex === lastIndex) {
        minimumJumps = Math.min(currentJumps + 1, minimumJumps);
        break;
      }

      if (nextIndex < lastIndex) {
        helper(nextIndex, currentJumps + 1);
      }

      jump--;
    }
  }

  helper(0, 0);

  return minimumJumps === Infinity ? 0 : minimumJumps;
}

const assert = require('assert');
assert.equal(jumpGameV2([2, 3, 1, 1, 4]), 2);
