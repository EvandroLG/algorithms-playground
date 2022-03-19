/*
  Decrypt String From Alphabet To Integer

  You are given a string s formed by digits and '#'.
  We want to map s to English lowercase characters as follows:
  - Characters ('a' to 'i') are represented by ('1' to '9') respectively.
  - Characters ('j' to 'z') are represented by ('10#' to '26#') respectively.

  Return the string formed after mapping.

  Example:
  Input: '10#11#12'
  Output: 'jkab'
*/

function decryptStringFromAlphabetToInteger(s) {
  const output = [];

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === '#') {
      const c = getCharacter(s.slice(i - 2, i));
      output.push(c);
      i -= 2;
    } else {
      const c = getCharacter(s[i]);
      output.push(c);
    }
  }

  return output.reverse().join('');
}

function getCharacter(c) {
  if (c.at(-1) === '#') {
    return String.from(105 + Number(c.slice(0, -1)));
  }

  return String.fromCharCode(96 + Number(c));
}

const assert = require('assert');
assert.equal(decryptStringFromAlphabetToInteger('10#11#12'), 'jkab');
