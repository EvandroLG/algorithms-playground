/*
  Palindrome Substrings

  Given a string s, return the number of palindromic substrings in it.
  A string is a palindrome when it reads the same backward as forward.
  A substring is a contiguous sequence of characters within the string.

  Example:
  Input: "aaa"
  Output: 6
*/

function palindromeSubstrings(s) {
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    count++;

    for (let j = i + 2; j <= s.length; j++) {
      if (isPalindrome(s.slice(i, j))) {
        count++;
      }
    }
  }

  return count;
}

function isPalindrome(s) {
  return s === s.split('').reverse().join('');
}

const assert = require('assert');
assert.equal(palindromeSubstrings('aaa'), 6);
