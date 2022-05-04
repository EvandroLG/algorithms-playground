/*
  First Palindrome

  Given an array of strings words, return the first palindromic string in the array.
  If there is no such string, return an empty string "".
  A string is palindromic if it reads the same forward and backward.

  Example:
  Input: ["abc","car","ada","racecar","cool"]
  Output: "ada"
*/

function firstPalindrome(words) {
  for (const word of words) {
    if (isPalindrome(word)) {
      return word;
    }
  }

  return '';
}

function isPalindrome(s) {
  return s.split('').reverse().join('') === s;
}

const assert = require('assert');
assert.equal(firstPalindrome(['abc', 'car', 'ada', 'racecar', 'cool']), 'ada');
