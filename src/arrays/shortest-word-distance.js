/*
  Shortest Word Distance

  Given an array of strings wordsDict and two different strings that already exist in the array word1 and word2, return the shortest distance between these two words in the list.

  Example:
  Input: ["practice", "makes", "perfect", "coding", "makes"], "makes", "coding"
  Output: 1
*/

function shortestWordDistance(wordsDict, word1, word2) {
  const memo = wordsDict.reduce((acc, item, idx) => {
    if (!acc.hasOwnProperty(item)) {
      acc[item] = [];
    }

    acc[item].push(idx);

    return acc;
  }, {});

  let result = Infinity;

  for (const idx of memo[word1]) {
    for (const idx2 of memo[word2]) {
      result = Math.min(result, Math.abs(idx - idx2));
    }
  }

  return result;
}

const assert = require('assert');
assert.equal(
  shortestWordDistance(
    ['practice', 'makes', 'perfect', 'coding', 'makes'],
    'makes',
    'coding'
  ),
  1
);
