/*
  Decode Message

  You are given the strings key and message, which represent a cipher key and a secret message, respectively.
  The steps to decode message are as follows:
  - Use the first appearance of all 26 lowercase English letters in key as the order of the substitution table.
  - Align the substitution table with the regular English alphabet.
  - Each letter in message is then substituted using the table.
  - Spaces ' ' are transformed to themselves.

  Example:
  Input: "eljuxhpwnyrdgtqkviszcfmabo", "zwx hnfx lqantp mnoeius ycgk vcnjrdb"
  Output: "the five boxing wizards jump quickly"
*/

function decodeMessage(key, message) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let idx = 0;
  const map = key.split('').reduce((acc, item) => {
    if (/[a-z]/.test(item) && !acc.hasOwnProperty(item)) {
      acc[item] = alphabet[idx];
      idx++;
    }

    return acc;
  }, {});

  const output = message.split('').reduce((acc, item) => {
    if (/\s/.test(item)) {
      acc.push(item);
    } else {
      const c = map[item];
      acc.push(c);
    }

    return acc;
  }, []);

  return output.join('');
}

const assert = require('assert');
assert.equal(
  decodeMessage(
    'eljuxhpwnyrdgtqkviszcfmabo',
    'zwx hnfx lqantp mnoeius ycgk vcnjrdb'
  ),
  'the five boxing wizards jump quickly'
);
