/*
  Sort Characters By Frequency

  Given a string s, sort it in decreasing order based on the frequency of the characters.
  The frequency of a character is the number of times it appears in the string.
  Return the sorted string. If there are multiple answers, return any of them.

  Example:
  Input: 'tree'
  Output: 'eert'
*/

function sortCharactersByFrequency(s) {
  const counter = s.split('').reduce((acc, c) => {
    if (!acc.hasOwnProperty(c)) {
      acc[c] = 1;
    } else {
      acc[c]++;
    }

    return acc;
  }, {});

  const keys = Object.keys(counter).sort((a, b) => counter[b] - counter[a]);

  return keys
    .reduce((acc, key) => {
      let i = counter[key];

      while (i) {
        acc.push(key);
        i--;
      }

      return acc;
    }, [])
    .join('');
}

const assert = require('assert');
assert.equal(sortCharactersByFrequency('tree'), 'eetr');
