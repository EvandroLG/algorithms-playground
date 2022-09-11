/*
  Count Letters

  Given a string s, return the number of substrings that have only one distinct letter.

  Example:
  Input: "aaaba"
  Output: 8
*/

function countLetters(s) {
  if (!s.length) {
    return 0;
  }

  let counter = 0;

  for (let i = 0; i < s.length; i++) {
    counter++;

    for (let j = i + 1; j < s.length; j++) {
      if (s[i] !== s[j]) {
        break;
      }

      counter++;
    }
  }

  return counter;
}

const assert = require('assert');
assert.equal(countLetters('aaaba'), 8);
