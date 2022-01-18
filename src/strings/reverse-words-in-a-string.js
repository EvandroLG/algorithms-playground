/*
  Reverse Words In A String

  Given an input string s, reverse the order of the words.
  A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.
  Return a string of the words in reverse order concatenated by a single space.

  Example:
  Input: "the sky is blue"
  Output: "blue is sky the"
*/

function reverseWordsInAString(str) {
  return str
    .split(' ')
    .filter((c) => c.length)
    .reverse()
    .join(' ');
}

const assert = require('assert');
assert.equal(reverseWordsInAString('the sky is blue'), 'blue is sky the');
