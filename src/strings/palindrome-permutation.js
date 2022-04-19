/*
  Palindrome Permutation

  Given a string s, return true if a permutation of the string could form a palindrome.

  Example:
  Input: 'carerac'
  Output: true
*/

function palindromePermutation(s) {
  const counter = s.split('').reduce((acc, item) => {
    if (!acc.hasOwnProperty(item)) {
      acc[item] = 0;
    }

    acc[item]++;

    return acc;
  }, {});

  return (
    Object.entries(counter).reduce((acc, [_, value]) => {
      return (acc += value % 2);
    }, 0) <= 1
  );
}

const assert = require('assert');
assert.ok(palindromePermutation('carerac'));
