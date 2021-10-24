/*
  Longest Consecutive Sequence

  Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

  Example:
  Input: [100,4,200,1,3,2]
  Output: 4
*/

function longestConsecutiveSequence(arr) {
  const memo = new Set(arr);
  let longest = 0;

  for (const item of memo) {
    if (!memo.has(item - 1)) {
      let counter = 1;
      let value = item + 1;

      while (memo.has(value)) {
        counter++;
        value++;
      }

      longest = Math.max(longest, counter);
    }
  }

  return longest;
}

const assert = require('assert');
assert.equal(longestConsecutiveSequence([100, 4, 200, 1, 3, 2]), 4);
