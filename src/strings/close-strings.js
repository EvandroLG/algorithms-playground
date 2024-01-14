/*
  Close Strings

  Two strings are considered close if you can attain one from the other using the following operations:
  - Operation 1: Swap any two existing characters.
  - Operation 2: Transform every occurrence of one existing character into another existing character, and do the same with the other character.
  You can use the operations on either string as many times as necessary.
  Given two strings, word1 and word2, return true if word1 and word2 are close, and false otherwise.

  Example: 
  Input: "abc", "bca"
  Output: true
*/

function closeStrings(word1, word2) {
  if (word1.length !== word2.length) {
    return false;
  }

  const count1 = counter(word1);
  const count2 = counter(word2);

  return areEqual(count1, count2);
}

function counter(s) {
  return s.split('').reduce((acc, c) => {
    if (!acc.hasOwnProperty(c)) {
      acc[c] = 0;
    }

    acc[c]++;

    return acc;
  }, {});
}

function areEqual(c1, c2) {
  const keys1 = Object.keys(c1).sort((a, b) => a.localeCompare(b));
  const keys2 = Object.keys(c2).sort((a, b) => a.localeCompare(b));

  if (keys1.length !== keys2.length) {
    return false;
  }

  if (keys1.join('') !== keys2.join('')) {
    return false;
  }

  const values1 = Object.values(c1).sort((a, b) => a - b);
  const values2 = Object.values(c2).sort((a, b) => a - b);

  return values1.join('') === values2.join('');
}

const assert = require('assert');
assert.ok(closeStrings('abc', 'bca'));
