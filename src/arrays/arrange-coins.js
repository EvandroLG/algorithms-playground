/*
  Arrange Coins

  You have n coins and you want to build a staircase with these coins.
  The staircase consists of k rows where the ith row has exactly i coins. The last row of the staircase may be incomplete.
  Given the integer n, return the number of complete rows of the staircase you will build.

  Example:
  Input: 5
  Output: 2
*/

function arrangeCoins() {
  let counter = 0;
  let i = 0;

  while (n) {
    counter++;
    i++;
    n = n - (i);
    if (n < 0) {
      return counter - 1;
    }
  }

  return counter;
}

const assert = require('assert');
assert.ok(arrangeCoins());
