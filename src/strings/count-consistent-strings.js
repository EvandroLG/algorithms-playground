/*
  Count Consistent Strings

  You are given a string allowed consisting of distinct characters and an array of strings words.
  A string is consistent if all characters in the string appear in the string allowed.
  Return the number of consistent strings in the array words.

  Example:
  Input: "ab", ["ad","bd","aaab","baa","badab"]
  Output: 2
*/

function countConsistentStrings(allowed, words) {
  const set = new Set(allowed);
  let counter = 0;

  for (const word of words) {
    if (isConsistent(word, set)) {
      counter++;
    }
  }

  return counter;
}

function isConsistent(word, set) {
  for (const c of word) {
    if (!set.has(c)) {
      return false;
    }
  }

  return true;
}

const assert = require('assert');
assert.equal(
  countConsistentStrings('ab', ['ad', 'bd', 'aaab', 'baa', 'badab']),
  2
);
