/*
  Fibonacci

  The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence.

  Example:
  Input: 4
  Output: 3
*/

function fibonacci(n, memo = {}) {
  if (n <= 0) {
    return 0;
  }

  if (n === 1) {
    return 1;
  }

  if (!memo.hasOwnProperty(n)) {
    memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  }

  return memo[n];
}

const assert = require('assert');
assert.equal(fibonacci(4), 3);
