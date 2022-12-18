/*
  Is Strictly Palindromic

  An integer n is strictly palindromic if, for every base b between 2 and n - 2 (inclusive), the string representation of the integer n in base b is palindromic.
  Given an integer n, return true if n is strictly palindromic and false otherwise.
  A string is palindromic if it reads the same forward and backward.

  Example:
  Input: 9
  Output: false
*/

function isStrictlyPalindromic(n) {
  for (let i = 2; i <= n - 2; i++) {
    const result = n.toString(i);

    if (!isPalindromic(result)) {
      return false;
    }
  }

  return true;
}

function isPalindromic(s) {
  return s === s.split('').reverse().join('');
}

const assert = require('assert');
assert.ok(!isStrictlyPalindromic(9));
