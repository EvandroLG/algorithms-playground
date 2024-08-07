/*
  Valid Palindrome

  Given a string s, return true if the s can be palindrome after deleting at most one character from it.

  Example:
  Input: "abca"
  Output: true
*/

function validPalindrome(s) {
  let p1 = 0;
  let p2 = s.length - 1;

  while (p1 < p2) {
    if (s[p1] !== s[p2]) {
      return isPalindrome(s, p1, p2 - 1) || isPalindrome(s, p1 + 1, p2);
    }

    p1++;
    p2--;
  }

  return true;
}

function isPalindrome(s, i, j) {
  while (i < j) {
    if (s[i] !== s[j]) {
      return false;
    }

    i++;
    j--;
  }

  return true;
}

const assert = require('assert');
assert.ok(validPalindrome('abca'));
