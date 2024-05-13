/*
  Find Permutations Differences

  You are given two strings s and t such that every character occurs at most once in s and t is a permutation of s.
  The permutation difference between s and t is defined as the sum of the absolute difference between the index of the occurrence of each character in s and the index of the occurrence of the same character in t.
  Return the permutation difference between s and t.

  Example:
  Input: 'abcde', 'edbac'
  Output: 12
*/

function findPermutationsDifferences(a, b) {
  const indexesA = getIndexes(a);
  const indexesB = getIndexes(b);
  const keys = Object.keys(indexesA);

  return keys.reduce((acc, key) => {
    return acc + Math.abs(indexesA[key] - indexesB[key]);
  }, 0);
}

function getIndexes(s) {
  return s.split('').reduce((acc, c, idx) => {
    acc[c] = idx;
    return acc;
  }, {});
}

const assert = require('assert');
assert.strictEqual(findPermutationsDifferences('abcde', 'edbac'), 12);
