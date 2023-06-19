/*
  Make Smallest Palindrome

  You are given a string s consisting of lowercase English letters, and you are allowed to perform operations on it.
  In one operation, you can replace a character in s with another lowercase English letter.
  Your task is to make s a palindrome with the minimum number of operations possible.
  If there are multiple palindromes that can be made using the minimum number of operations, make the lexicographically smallest one.
  A string a is lexicographically smaller than a string b (of the same length) if in the first position where a and b differ, string a has a letter that appears earlier in the alphabet than the corresponding letter in b.
  Return the resulting palindrome string.

  Example:
  Input: "egcfe"
  Output: "efcfe"
*/

function makeSmallestPalindrome(s) {
  let p1 = 0;
  let p2 = s.length - 1;
  let output = [];

  while (p1 < p2) {
    if (s[p1] !== s[p2]) {
      const c = getSmaller(s[p1], s[p2]);

      output[p1] = c;
      output[p2] = c;
    } else {
      output[p1] = s[p1];
      output[p2] = s[p2];
    }

    p1++;
    p2--;
  }

  if (s.length % 2 === 1) {
    output[p1] = s[p1];
  }

  return output.join('');
}

function getSmaller(a, b) {
  if (a.localeCompare(b) === 1) {
    return b;
  }

  return a;
}

const assert = require('assert');
assert.equal(makeSmallestPalindrome('egcfe'), 'efcfe');
