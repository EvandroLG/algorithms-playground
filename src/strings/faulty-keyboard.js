/*
  Faulty Keyboard

  Your laptop keyboard is faulty, and whenever you type a character 'i' on it, it reverses the string that you have written. Typing other characters works as expected.
  You are given a 0-indexed string s, and you type each character of s using your faulty keyboard.
  Return the final string that will be present on your laptop screen.

  Example:
  Input: "string"
  Output: "rtsng"
*/

function faultyKeyboard(s) {
  const output = [];

  for (const c of s) {
    if (c === 'i') {
      output.reverse();
    } else {
      output.push(c);
    }
  }

  return output.join('');
}

const assert = require('assert');
assert.equal(faultyKeyboard('string'), 'rtsng');
