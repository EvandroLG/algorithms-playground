/*
  Count Characters

  You are given an array of strings words and a string chars.
  A string is good if it can be formed by characters from chars (each character can only be used once).
  Return the sum of lengths of all good strings in words.

  Example:
  Input: ["cat","bt","hat","tree"], "atach"
  Output: 6
*/

function countCharacters(words, chars) {
  const counter = buildCounter(chars);
  let result = 0;

  for (const word of words) {
    const copy = { ...counter };
    let found = true;

    for (const c of word) {
      if (!copy[c]) {
        found = false;
        break;
      }

      copy[c]--;
    }

    if (found) {
      result += word.length;
    }
  }

  return result;
}

function buildCounter(s) {
  const fragments = s.split('');

  return fragments.reduce((acc, item) => {
    if (!acc.hasOwnProperty(item)) {
      acc[item] = 0;
    }

    acc[item]++;

    return acc;
  }, {});
}

const assert = require('assert');
assert.equal(countCharacters(['cat', 'bt', 'hat', 'tree'], 'atach'), 6);
