/*
  Knapsack

  You are given 
𝑛
n
 items whose weights and values are known, as well as a knapsack to carry these items.
 The knapsack cannot carry more than a certain maximum weight, known as its capacity.
 You need to maximize the total value of the items in your knapsack, while ensuring that the sum of the weights of the selected items does not exceed the capacity of the knapsack.
 If there is no combination of weights whose sum is within the capacity constraint, return 

 Example:
 Input: 6, [1,2,3,5], [1,5,4,8]
 Output: 10
*/

function knapsack(capacity, weights, values) {
  const memo = {};

  return (function helper(currCapacity, n) {
    const key = `${currCapacity}-${n}`;

    if (memo.hasOwnProperty(key)) {
      return memo[key];
    }

    if (!currCapacity || !n) {
      return 0;
    }

    if (weights[n - 1] <= currCapacity) {
      memo[key] = Math.max(
        values[n - 1] + helper(currCapacity - weights[n - 1], n - 1),
        helper(currCapacity, n - 1)
      );
    } else {
      memo[key] = helper(currCapacity, n - 1);
    }

    return memo[key];
  })(capacity, weights.length);
}

const assert = require('assert');
assert.strictEqual(knapsack(6, [1, 2, 3, 5], [1, 5, 4, 8]), 10);
