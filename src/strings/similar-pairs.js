/*
  Similar Pairs

  You are given a 0-indexed string array words.
  Two strings are similar if they consist of the same characters.
  For example, "abca" and "cba" are similar since both consist of characters 'a', 'b', and 'c'.
  Return the number of pairs (i, j) such that 0 <= i < j <= word.length - 1 and the two strings words[i] and words[j] are similar.

  Example:
  Input: ['tars', 'rats', 'arts', 'star']
  Output: 2
*/

function similarPairs(words) {
  const sets = words.map((word) => new Set(word));
  let output = 0;

  for (let i = 0; i < words.length - 1; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if (compare(sets[i], sets[j])) {
        output++;
      }
    }
  }

  return output;
}

function compare(a, b) {
  if (a.size != b.size) {
    return false;
  }

  for (const key of a) {
    if (!b.has(key)) {
      return false;
    }
  }

  return true;
}

const assert = require('assert');
assert.equal(similarPairs(['aba', 'aabb', 'abcd', 'bac', 'aabc']), 2);
