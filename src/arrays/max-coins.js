/*
  Max Coins

  There are 3n piles of coins of varying size, you and your friends will take piles of coins as follows:
  - In each step, you will choose any 3 piles of coins (not necessarily consecutive).
  - Of your choice, Alice will pick the pile with the maximum number of coins.
  - You will pick the next pile with the maximum number of coins.
  - Your friend Bob will pick the last pile.
  - Repeat until there are no more piles of coins.
  Given an array of integers piles where piles[i] is the number of coins in the ith pile.
  Return the maximum number of coins that you can have.

  Example:
  Input: [9,8,7,6,5,1,2,3,4]
  Output: 18
*/

function maxCoins(arr) {
  const sorted = arr.slice().sort((a, b) => b - a);
  const size = sorted.length / 3;
  let result = 0;
  let idx = 1;

  for (let i = 0; i < size; i++) {
    result += sorted[idx];
    idx += 2;
  }

  return result;
}

const assert = require('assert');
assert.equal(maxCoins([9, 8, 7, 6, 5, 1, 2, 3, 4]), 18);
