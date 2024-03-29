/*
  Best Time To Buy And Sell Stock

  You are given an array prices where prices[i] is the price of a given stock on the ith day.
  You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
  Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

  Example:
  Input: [7,1,5,3,6,4]
  Output: 5
*/

function bestTimeToBuyAndSellStock(prices) {
  let min = Infinity;
  let max = 0;

  for (const price of prices) {
    if (price < min) {
      min = price;
      continue;
    }

    const diff = price - min;

    if (diff > max) {
      max = diff;
    }
  }

  return max;
}

const assert = require('assert');
assert.equal(bestTimeToBuyAndSellStock([7, 1, 5, 3, 6, 4]), 5);
