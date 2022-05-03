/*
  Uncommon Words From Two Sentences

  A sentence is a string of single-space separated words where each word consists only of lowercase letters.
  A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.
  Given two sentences s1 and s2, return a list of all the uncommon words.

  Example:
  Input: "this apple is sweet", "this apple is sour"
  Output: ["sweet","sour"]
*/

function uncommonFromSentences(s1, s2) {
  const fragment1 = s1.split(' ');
  const fragment2 = s2.split(' ');
  const concatenated = fragment1.concat(fragment2);
  const counter = getCounter(concatenated);

  return Object.entries(counter).reduce((acc, [key, value]) => {
    if (value === 1) {
      acc.push(key);
    }

    return acc;
  }, []);
}

function getCounter(arr) {
  return arr.reduce((acc, item) => {
    if (!acc.hasOwnProperty(item)) {
      acc[item] = 0;
    }

    acc[item]++;

    return acc;
  }, {});
}

const assert = require('assert');
assert.deepEqual(
  uncommonFromSentences('this apple is sweet', 'this apple is sour'),
  ['sweet', 'sour']
);
