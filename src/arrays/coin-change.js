/*
  Coin Change

  You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.
  Return the number of combinations that make up that amount. If that amount of money cannot be made up by any combination of the coins, return 0.
  You may assume that you have an infinite number of each kind of coin.

  Example:
  Input: 5, [1,2,5]
  Output: 4
*/

function coinChange(amount, coins, memo = [], set = new Set()) {
  if (amount < 0) {
    return 0;
  }

  if (amount === 0) {
    const key = JSON.stringify(memo.sort((a, b) => a - b));

    if (set.has(key)) {
      return 0;
    }

    set.add(key);
    return 1;
  }

  const results = [];

  for (const coin of coins) {
    results.push(coinChange(amount - coin, coins, [...memo, coin], set));
  }

  return results.reduce((acc, item) => acc + item);
}

const assert = require('assert');
assert.equal(coinChange(5, [1, 2, 5]), 4);
