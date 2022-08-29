/*
  Are Sentences Similar

  We can represent a sentence as an array of words, for example, the sentence "I am happy with leetcode" can be represented as arr = ["I","am",happy","with","leetcode"].
  Given two sentences sentence1 and sentence2 each represented as a string array and given an array of string pairs similarPairs where similarPairs[i] = [xi, yi] indicates that the two words xi and yi are similar.
  Return true if sentence1 and sentence2 are similar, or false if they are not similar.
  Two sentences are similar if:
  - They have the same length (i.e., the same number of words)
  - sentence1[i] and sentence2[i] are similar.

  Example:
  Input: ["great","acting","skills"], ["fine","drama","talent"], [["great","fine"],["drama","acting"],["skills","talent"]]
  Output: true
*/

function areSentencesSimilar(sentence1, sentence2, similarPairs) {
  if (sentence1.length !== sentence2.length) {
    return false;
  }

  const similar = similarPairs.reduce((acc, pair) => {
    if (!acc.hasOwnProperty(pair[0])) {
      acc[pair[0]] = new Set();
    }

    if (!acc.hasOwnProperty(pair[1])) {
      acc[pair[1]] = new Set();
    }

    acc[pair[0]].add(pair[1]);
    acc[pair[1]].add(pair[0]);

    return acc;
  }, {});

  for (let i = 0; i < sentence1.length; i++) {
    if (sentence1[i] === sentence2[i]) {
      continue;
    }

    if (
      !similar.hasOwnProperty(sentence1[i]) ||
      !similar[sentence1[i]].has(sentence2[i])
    ) {
      return false;
    }
  }

  return true;
}

const assert = require('assert');
assert.ok(
  areSentencesSimilar(
    ['great', 'acting', 'skills'],
    ['fine', 'drama', 'talent'],
    [
      ['great', 'fine'],
      ['drama', 'acting'],
      ['skills', 'talent'],
    ]
  )
);
