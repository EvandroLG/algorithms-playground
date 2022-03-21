/*
  Is Alien Sorted

  In an alien language, surprisingly, they also use English lowercase letters, but possibly in a different order.
  The order of the alphabet is some permutation of lowercase letters.
  Given a sequence of words written in the alien language, and the order of the alphabet, return true if and only if the given words are sorted lexicographically in this alien language.

  Example:
  Input: ["hello","leetcode"], "hlabcdefgijkmnopqrstuvwxyz"
  Output: true
*/

function isAlienSorted(words, order) {
  const map = order.split('').reduce((acc, item, idx) => {
    acc[item] = idx;
    return acc;
  }, {});

  for (let i = 0; i < words.length - 1; i++) {
    for (let j = 0; j < words[i].length; j++) {
      if (j >= words[i + 1].length) {
        return false;
      }

      if (words[i][j] !== words[i + 1][j]) {
        if (map[words[i][j]] > map[words[i + 1][j]]) {
          return false;
        }

        break;
      }
    }
  }

  return true;
}

const assert = require('assert');
assert.ok(isAlienSorted(['hello', 'leetcode'], 'hlabcdefgijkmnopqrstuvwxyz'));
