/*
  Can Be Typed Words

  There is a malfunctioning keyboard where some letter keys do not work. All other keys on the keyboard work properly.
  Given a string text of words separated by a single space (no leading or trailing spaces) and a string brokenLetters of all distinct letter keys that are broken, return the number of words in text you can fully type using this keyboard.

  Example:
  Input: "hello world", "ad"
  Output: 1
*/

function canBeTypedWords(text, brokenLetters) {
  const set = new Set(brokenLetters);
  const words = text.split(' ');

  return words.reduce((acc, word) => {
    let canCreate = true;

    for (const c of word) {
      if (set.has(c)) {
        canCreate = false;
        break;
      }
    }

    if (canCreate) {
      acc++;
    }

    return acc;
  }, 0);
}

const assert = require('assert');
assert.equal(canBeTypedWords('hello world', 'ad'), 1);
