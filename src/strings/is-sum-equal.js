/*
  Is Sum Equal

  The letter value of a letter is its position in the alphabet starting from 0 (i.e. 'a' -> 0, 'b' -> 1, 'c' -> 2, etc.).
  The numerical value of some string of lowercase English letters s is the concatenation of the letter values of each letter in s, which is then converted into an integer.
  You are given three strings firstWord, secondWord, and targetWord, each consisting of lowercase English letters 'a' through 'j' inclusive.
  Return true if the summation of the numerical values of firstWord and secondWord equals the numerical value of targetWord, or false otherwise.

  Example:
  Input: "acb", "cba", "cdb"
  Output: true
*/

function isSumEqual(firstWord, secondWord, targetWord) {
  const sumFirst = sum(firstWord);
  const sumSecond = sum(secondWord);
  const result = sumFirst + sumSecond;

  return result === sum(targetWord);
}

function sum(word) {
  return +word.split('').reduce((acc, c) => acc + getCode(c), '');
}

function getCode(c) {
  return c.charCodeAt(0) - 97;
}

const assert = require('assert');
assert.ok(isSumEqual('acb', 'cba', 'cdb'));
