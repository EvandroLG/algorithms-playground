/*
  Longest Palindrome Substring

  Write a function that, given a string, returns its longest palindromic substring.
  A palindrome is defined as a string that's written the same forward and backward. Note that single-character strings are palindromes.
  You can assume that there will only be one longest palindromic substring.

  Sample Input
  string = "abaxyzzyxf"

  Sample Output
  "xyzzyx"
*/

function isPalindrome(str) {
  return str.split('').reverse().join('') === str;
}

function longestPalindromeSubstring(str) {
  let largestPalindrome = '';

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      const value = str.slice(i, j);

      if (isPalindrome(value) && value.length > largestPalindrome.length) {
        largestPalindrome = value;
      }
    }
  }

  return largestPalindrome;
}

const assert = require('assert');
assert.equal(longestPalindromeSubstring('abaxyzzyxf'), 'xyzzyx');
assert.equal(longestPalindromeSubstring('a'), 'a');

assert.equal(
  longestPalindromeSubstring('zzzzzzzzzzzzzzzzzzzz'),
  'zzzzzzzzzzzzzzzzzzzz'
);

assert.equal(
  longestPalindromeSubstring('zz2345abbbba5432zz'),
  'zz2345abbbba5432zz'
);
