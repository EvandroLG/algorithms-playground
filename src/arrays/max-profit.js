/*
  Max Profit

  You are given an array prices where prices[i] is the price of a given stock on the ith day.
  You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
  Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

  Example:
  Input: [7,1,5,3,6,4]
  Output: 5
*/

function maxProfit(prices) {
  let p1 = 0;
  let p2 = 1;
  let max = 0;

  while (p2 < prices.length) {
    if (prices[p1] > prices[p2]) {
      p1 = p2;
    } else {
      max = Math.max(max, prices[p2] - prices[p1]);
    }

    p2++;
  }

  return max;
}

const assert = require('assert');
assert.strictEqual(maxProfit([7, 1, 5, 3, 6, 4]), 5);
