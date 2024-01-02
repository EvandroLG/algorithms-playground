/*
  Minimum Number Game

  You are given a 0-indexed integer array nums of even length and there is also an empty array arr. Alice and Bob decided to play a game where in every round Alice and Bob will do one move. The rules of the game are as follows:
  - Every round, first Alice will remove the minimum element from nums, and then Bob does the same.
  - Now, first Bob will append the removed element in the array arr, and then Alice does the same.
  - The game continues until nums becomes empty.
  Return the resulting array arr.

  Example:
  Input: nums = [5,4,2,3]
  Outpu: [3,2,5,4]
*/

function minimumNumberGame(nums) {
  if (!nums.length) {
    return [];
  }

  if (nums.length === 1) {
    return nums.slice();
  }

  const sorted = nums.slice().sort((a, b) => a - b);
  const output = [];

  let p1 = 0;
  let p2 = 1;

  while (p2 < sorted.length) {
    output.push(sorted[p2]);
    output.push(sorted[p1]);

    p1 += 2;
    p2 += 2;
  }

  return output;
}

const assert = require('assert');
assert.deepEqual(minimumNumberGame([5, 4, 2, 3]), [3, 2, 5, 4]);
