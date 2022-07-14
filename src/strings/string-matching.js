/*
  String Matching

  Given an array of string words. Return all strings in words which is substring of another word in any order.

  Example:
  Input: ["mass", "as", "hero", "superhero"]
  Output: ["as", "hero"]
*/

function stringMatching(words) {
  const output = [];

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (findMatch(words, word)) {
      output.push(word);
    }
  }

  return output;
}

function findMatch(words, target) {
  for (const word of words) {
    if (word === target) {
      continue;
    }

    if (word.includes(target)) {
      return true;
    }
  }

  return false;
}

const assert = require('assert');
assert.deepEqual(stringMatching(['mass', 'as', 'hero', 'superhero']), [
  'as',
  'hero',
]);
