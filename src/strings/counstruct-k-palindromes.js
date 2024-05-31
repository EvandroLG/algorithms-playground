/*
  Counstruct K Palindromes

  Given a string s and an integer k, return true if you can use all the characters in s to construct k palindrome strings or false otherwise.

  Example:
  Input: "annabelle", 2
*/

function counstructKPalindromes(s, k) {
  if (s.length < k) {
    return false;
  }

  const counter = getCounter(s);
  let odd = 0;

  for (const value of Object.values(counter)) {
    if (value % 2 !== 0) {
      odd++;
    }
  }

  return odd <= k;
}

function getCounter(s) {
  return s.split('').reduce((acc, c) => {
    if (!acc.hasOwnProperty(c)) {
      acc[c] = 0;
    }

    acc[c]++;

    return acc;
  }, {});
}

const assert = require('assert');
assert.ok(counstructKPalindromes('annabelle', 2));
