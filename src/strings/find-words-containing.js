/*
  Find Words Containing

  You are given a 0-indexed array of strings words and a character x.
  Return an array of indices representing the words that contain the character x.
  Note that the returned array may be in any order.

  Example:
  Input: ["abc","bcd","aaaa","cbc"], "a"
  Output: [0, 2]
*/

function findWordsContaining(words, x) {
  const output = [];

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    if (word.includes(x)) {
      output.push(i);
    }
  }

  return output;
}

const assert = require('assert');
assert.deepEqual(findWordsContaining(['abc', 'bcd', 'aaaa', 'cbc'], 'a'), [
  0,
  2,
]);
