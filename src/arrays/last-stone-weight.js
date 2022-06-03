/*
  Last Stone Weight

  You are given an array of integers stones where stones[i] is the weight of the ith stone.
  Suppose the heaviest two stones have weights x and y with x <= y. The result of this smash is:
  - If x == y, both stones are destroyed, and
  - If x != y, the stone of weight x is destroyed, and the stone of weight y has new weight y - x.
  At the end of the game, there is at most one stone left. If there are no stones left, return 0.

  Example:
  Input: [2,7,4,1,8,1]
  Output: 1
*/

function lastStoneWeight(stones) {
  const sorted = stones.slice().sort((a, b) => a - b);

  while (sorted.length > 1) {
    const first = sorted.pop();
    const last = sorted.pop();
    const diff = first - last;

    if (!diff) {
      continue;
    }

    sorted.push(diff);
    sorted.sort((a, b) => a - b);
  }

  return sorted[0] ?? 0;
}

const assert = require('assert');
assert.equal(lastStoneWeight([2, 7, 4, 1, 8, 1]), 1);
