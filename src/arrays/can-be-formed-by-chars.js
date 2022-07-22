/*
  Can Be Formed By Chars

  You are given an array of strings words and a string chars.
  A string is good if it can be formed by characters from chars (each character can only be used once).
  Return the sum of lengths of all good strings in words.

  Example:
  Input: ["cat","bt","hat","tree"], "atach"
  Output: 6
*/

function canBeFormedByChars(words, chars) {
  let size = 0;
  const arr = chars.split('');

  for (const word of words) {
    if (canBeFormed(arr.slice(), word)) {
      size += word.length;
    }
  }

  return size;
}

function canBeFormed(chars, word) {
  const fragments = word.split('');

  while (fragments.length) {
    const c = fragments.pop();
    const idx = chars.indexOf(c);

    if (idx === -1) {
      return false;
    } else {
      chars.splice(idx, 1);
    }
  }

  return true;
}

const assert = require('assert');
assert.equal(canBeFormedByChars(['cat', 'bt', 'hat', 'tree'], 'atach'), 6);
