/*
  Final Prices

  Given the array prices where prices[i] is the price of the ith item in a shop.
  There is a special discount for items in the shop, if you buy the ith item, then you will receive a discount equivalent to prices[j] where j is the minimum index such that j > i and prices[j] <= prices[i], otherwise, you will not receive any discount at all.
  Return an array where the ith element is the final price you will pay for the ith item of the shop considering the special discount.

  Example:
  Input: [8,4,6,2,3]
  Output: [4,2,4,2,3]
*/

function finalPrices(prices) {
  let p1 = 0;
  let p2 = 1;
  const output = [];

  while (p1 < prices.length) {
    if (p2 === prices.length) {
      output.push(prices[p1]);
      p1++;
      p2 = p1 + 1;
      continue;
    }

    if (prices[p1] >= prices[p2]) {
      const result = prices[p1] - prices[p2];
      output.push(result);
      p1++;
      p2 = p1 + 1;
    } else {
      p2++;
    }
  }

  return output;
}

const assert = require('assert');
assert.deepEqual(finalPrices([8, 4, 6, 2, 3]), [4, 2, 4, 2, 3]);
