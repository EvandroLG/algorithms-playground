/*
  Count Words

  Given two string arrays words1 and words2, return the number of strings that appear exactly once in each of the two arrays.

  Example:
  Input: ["leetcode","is","amazing","as","is"], ["amazing","leetcode","is"]
  Output: 2
*/

function countWords(words1, words2) {
  const c1 = count(words1);
  const c2 = count(words2);
  const keys = Object.keys(c1);
  let counter = 0;

  for (const key of keys) {
    if (c1[key] === 1 && c2[key] === 1) {
      counter++;
    }
  }

  return counter;
}

function count(arr) {
  return arr.reduce((acc, c) => {
    if (!acc.hasOwnProperty(c)) {
      acc[c] = 0;
    }

    acc[c]++;

    return acc;
  }, {});
}

const assert = require('assert');
assert.equal(
  countWords(
    ['leetcode', 'is', 'amazing', 'as', 'is'],
    ['amazing', 'leetcode', 'is']
  ),
  2
);
