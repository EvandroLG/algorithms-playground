/*
  Keyboard Row

  Given an array of strings words, return the words that can be typed using letters of the alphabet on only one row of American keyboard.

  In the American keyboard:
  - the first row consists of the characters "qwertyuiop",
  - the second row consists of the characters "asdfghjkl", and
  - the third row consists of the characters "zxcvbnm".

  Example:
  Input: ["Hello","Alaska","Dad","Peace"]
  Output: ["Alaska","Dad"]
*/

const keyboard = [
  new Set('qwertyuiop'),
  new Set('asdfghjkl'),
  new Set('zxcvbnm'),
];

function keyboardRow(words) {
  const output = [];

  for (const word of words) {
    let idx = null;

    for (let i = 0; i < word.length; i++) {
      const c = word[i].toLowerCase();

      if (idx === null) {
        idx = findIdx(c);
        if (idx === undefined) {
          break;
        }
      }

      if (!keyboard[idx].has(c)) {
        break;
      }

      if (i === word.length - 1) {
        output.push(word);
      }
    }
  }

  return output;
}

function findIdx(c) {
  let idx = 0;

  while (idx < keyboard.length) {
    if (keyboard[idx].has(c)) {
      return idx;
    }

    idx++;
  }
}

const assert = require('assert');
assert.deepEqual(keyboardRow(['Hello', 'Alaska', 'Dad', 'Peace']), [
  'Alaska',
  'Dad',
]);
