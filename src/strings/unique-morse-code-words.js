/*
  Unique Morse Code Words

  International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes, as follows:
  - 'a' maps to ".-",
  - 'b' maps to "-...",
  - 'c' maps to "-.-.", and so on.

  Given an array of strings words where each word can be written as a concatenation of the Morse code of each letter.

  Example:
  Input: ["gin","zen","gig","msg"]
  Output: 2
*/

function uniqueMorseCodeWords(words) {
  const set = new Set();

  for (const word of words) {
    const output = [];

    for (const c of word) {
      const idx = c.charCodeAt(0) - 97;
      const code = codes.at(idx);
      output.push(code);
    }

    set.add(output.join(''));
  }

  return set.size;
}

const assert = require('assert');
const codes = [
  '.-',
  '-...',
  '-.-.',
  '-..',
  '.',
  '..-.',
  '--.',
  '....',
  '..',
  '.---',
  '-.-',
  '.-..',
  '--',
  '-.',
  '---',
  '.--.',
  '--.-',
  '.-.',
  '...',
  '-',
  '..-',
  '...-',
  '.--',
  '-..-',
  '-.--',
  '--..',
];
assert.equal(uniqueMorseCodeWords(['gin', 'zen', 'gig', 'msg'], codes), 2);
