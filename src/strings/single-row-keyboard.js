/*
  Single Row Keyboard

  There is a special keyboard with all keys in a single row.
  Given a string keyboard of length 26 indicating the layout of the keyboard (indexed from 0 to 25). Initially, your finger is at index 0.
  To type a character, you have to move your finger to the index of the desired character.
  The time taken to move your finger from index i to index j is |i - j|.

  You want to type a string word. Write a function to calculate how much time it takes to type it with one finger.

  Example:
  Input: "abcdefghijklmnopqrstuvwxyz", "cba"
  Output: 4
*/

function singleRowKeyboard(keyboard, word) {
  const map = keyboard.split('').reduce((acc, item, idx) => {
    acc[item] = idx;
    return acc;
  }, {});

  const { result } = word.split('').reduce(
    (acc, item) => {
      const diff = Math.abs(acc.prev - map[item]);
      acc.prev = map[item];
      acc.result = acc.result + diff;
      return acc;
    },
    { result: 0, prev: 0 }
  );

  return result;
}

const assert = require('assert');
assert.equal(singleRowKeyboard('abcdefghijklmnopqrstuvwxyz', 'cba'), 4);
