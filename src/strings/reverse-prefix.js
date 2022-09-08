/*
  Reverse Prefix

  Given a 0-indexed string word and a character ch, reverse the segment of word that starts at index 0 and ends at the index of the first occurrence of ch (inclusive).
  If the character ch does not exist in word, do nothing.

  Example:
  Input: abcdefd, d
  Output: dcbaefd
*/

function reversePrefix(word, ch) {
  let idx = -1;
  let found = false;

  for (const c of word) {
    idx++;

    if (c === ch) {
      found = true;
      break;
    }
  }

  if (!found) {
    return word;
  }

  const reversed = word
    .slice(0, idx + 1)
    .split('')
    .reverse()
    .join('');

  return reversed + word.slice(idx + 1);
}

const assert = require('assert');
assert.equal(reversePrefix('abcdefd', 'd'), 'dcbaefd');
