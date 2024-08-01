/*
  Ice Cream Parlor

  Two friends like to pool their money and go to the ice cream parlor. They always choose two distinct flavors and they spend all of their money.
  Given a list of prices for the flavors of ice cream, select the two that will cost all of the money they have.

  Example:
  Input: 6, [1, 3, 4, 5, 6, 7, 9]
  Output: [1, 4]
*/

function iceCreamParlor(total, arr) {
  const memo = {};

  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    const idx = total - value;

    if (memo.hasOwnProperty(idx)) {
      return [memo[idx] + 1, i + 1];
    }

    memo[value] = i;
  }

  return [];
}

const assert = require('assert');
assert.deepStrictEqual(iceCreamParlor(6, [1, 3, 4, 5, 6, 7, 9]), [1, 4]);
