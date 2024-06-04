/*
  Better Compression

  You are given a string compressed representing a compressed version of a string.
  The format is a character followed by its frequency.
  For example, "a3b1a1c2" is a compressed version of the string "aaabacc".
  We seek a better compression with the following conditions:
  1. Each character should appear only once in the compressed version.
  2. The characters should be in alphabetical order.
  Return the better compression of compressed.

  Example:
  Input: "a3c9b2c1"
  Output: "a3b2c10"
*/

function betterCompression(compressed) {
  const counter = getCounter(compressed);
  const keys = Object.keys(counter).sort((a, b) => a.localeCompare(b));
  const output = [];

  for (const key of keys) {
    output.push(key, counter[key]);
  }

  return output.join('');
}

function getCounter(s) {
  const map = {};
  let p1 = 0;
  let p2 = 1;

  while (p2 < s.length) {
    if (!map.hasOwnProperty(s[p1])) {
      map[s[p1]] = 0;
    }

    let value = '';

    while (/\d/.test(s[p2])) {
      value += s[p2];
      p2++;
    }

    map[s[p1]] += Number(value);
    p1 = p2;
    p2 = p2 + 1;
  }

  return map;
}

const assert = require('assert');
assert.strictEqual(betterCompression('a3c9b2c1'), 'a3b2c10');
