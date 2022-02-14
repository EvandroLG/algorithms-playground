/*
  Check If All Characters Have Equal Number Of Occurences

  Given a string s, return true if s is a good string, or false otherwise.
  A string s is good if all the characters that appear in s have the same number of occurrences (i.e., the same frequency).

  Example:
  Input: 'abacbc'
  Output: true

*/

function checkIfAllCharactersHaveEqualNumberOfOccurences(s) {
  const counter = s.split('').reduce((acc, c) => {
    if (!acc.hasOwnProperty(c)) {
      acc[c] = 0;
    }

    acc[c]++;

    return acc;
  }, new Map());

  const keys = Object.keys(counter);
  let value = counter[keys[0]];

  for (let i = 1; i < keys.length; i++) {
    const key = keys[i];

    if (value !== counter[key]) {
      return false;
    }
  }

  return true;
}

const assert = require('assert');
assert.ok(checkIfAllCharactersHaveEqualNumberOfOccurences('abacbc'));
