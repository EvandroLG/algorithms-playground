/*
  Tribonacci

  The Tribonacci sequence Tn is defined as follows:
  T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.

  Example:
  Input: 25
  Output: 1389537
*/

function tribonacci(n, memo = {}) {
  if (n <= 0) {
    return 0;
  }

  if (n === 1) {
    return 1;
  }

  if (!memo.hasOwnProperty(n)) {
    memo[n] =
      tribonacci(n - 1, memo) +
      tribonacci(n - 2, memo) +
      tribonacci(n - 3, memo);
  }

  return memo[n];
}

const assert = require('assert');
assert.equal(tribonacci(25), 1389537);
