/*
  Truncate Sentence

  A sentence is a list of words that are separated by a single space with no leading or trailing spaces.
  Each of the words consists of only uppercase and lowercase English letters (no punctuation).

  Example:
  Input: "Hello how are you Contestant", 4
  Output: "Hello how are you"
*/

function truncateSentence(s, k) {
  const fragments = s.split(' ').reverse();
  const output = [];

  while (k--) {
    const word = fragments.pop();
    output.push(word);
  }

  return output.join(' ');
}

const assert = require('assert');
assert.equal(
  truncateSentence('Hello how are you Contestant', 4),
  'Hello how are you'
);
