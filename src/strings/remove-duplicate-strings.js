/*
  RemoveDuplicateStrings
  Create a function that takes a string and returns a new string with duplicate words removed

  Input:
  "this is a test test string"

  Output:
  "this is a test string"
*/

function isWhiteSpace(c) {
  return /\s/.test(c);
}

function removeDuplicateStrings(str) {
  const memo = new Set();

  return str
    .split(' ')
    .reduce((acc, cur) => {
      if (!memo.has(cur)) {
        memo.add(cur);
        acc.push(cur);
      }

      return acc;
    }, [])
    .join(' ');
}

const assert = require('assert');
//assert.equal(removeDuplicateCharacters('language'), 'langue');
assert.equal(
  removeDuplicateStrings('this is is a test test string'),
  'this is a test string'
);
