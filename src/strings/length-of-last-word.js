/*
  Length Of Last Word

  Given a string s consisting of some words separated by some number of spaces, return the length of the last word in the string.
  A word is a maximal substring consisting of non-space characters only.

  Example 1:
  Input: s = "Hello World"
  Output: 5
  Explanation: The words are "Hello" and "World", both of length 5.
*/

function lengthOfLastWord(str) {
  const trimmed = str.trim();
  const splitted = trimmed.split(' ');
  return splitted[splitted.length - 1].length;
}

const assert = require('assert');
assert.equal(lengthOfLastWord('   fly me   to   the moon  '), 4);
