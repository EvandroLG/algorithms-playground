/*
  Palindrome Check

  Write a function that takes in a non-empty string and that returns a boolean representing whether the string is a palindrome.
  A palindrome is defined as a string that's written the same forward and backward. Note that single-character strings are palindromes.

  Sample Input
  string = "abcdcba"

  Sample Output
  true // it's written the same forward and backward
*/

function palindromeCheck(str) {
  return str.split('').reverse().join('') === str;
}

const assert = require('assert');

assert.ok(palindromeCheck('abcdcba'));
assert.strictEqual(palindromeCheck('aabb'), false);
