/*
  Maximum Product

  Given a string array words, return the maximum value of length(word[i]) * length(word[j]) where the two words do not share common letters.
  If no such two words exist, return 0.

  Example:
  Input: ["abcw","baz","foo","bar","xtfn","abcdef"]
  Output: 16
*/

function maxProduct(words) {
  let max = 0;

  for (let i = 0; i < words.length - 1; i++) {
    const word1 = words[i];

    for (let j = i + 1; j < words.length; j++) {
      const word2 = words[j];

      if (compare(word1, word2)) {
        max = Math.max(word1.length * word2.length, max);
      }
    }
  }

  return max;
}

function compare(word1, word2) {
  const letters1 = convertToSet(word1);
  const letters2 = convertToSet(word2);

  for (const c of letters1) {
    if (letters2.has(c)) {
      return false;
    }
  }

  return true;
}

function convertToSet(w) {
  return w.split('').reduce((acc, c) => {
    acc.add(c);
    return acc;
  }, new Set());
}

const assert = require('assert');
const words = ['abcw', 'baz', 'foo', 'bar', 'xtfn', 'abcdef'];

assert.equal(maxProduct(words), 16);
