/*
  Make Palindrome

  You are given a 0-indexed string s consisting of only lowercase English letters.
  In one operation, you can change any character of s to any other character.
  Return true if you can make s a palindrome after performing exactly one or two operations, or return false otherwise.

  Example:
  Input: abcdba
  Output: true
*/

function makePalindrome(s) {
  let p1 = 0;
  let p2 = s.length - 1;
  let counter = 0;

  while (p1 < p2) {
    if (s[p1] !== s[p2]) {
      counter++;

      if (counter > 2) {
        return false;
      }
    }

    p1++;
    p2--;
  }

  return true;
}

const assert = require('assert');
assert.ok(makePalindrome('abcdba'));
