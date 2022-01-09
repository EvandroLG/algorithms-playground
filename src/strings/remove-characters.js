/*
  Remove Characters

  Given a string contaning only `a`, `b` and `c`, remove all `b` and `ac`.

  Example:
  Input: "cabbaabcca"
  Output: "caa"
*/

function removeCharacters(s) {
  const output = s.split('');

  for (let i = 0; i < output.length; i++) {
    if (output[i] === 'b') {
      output.splice(i, 1);
      i = i - 2;
    } else if (output[i] === 'a' && output[i + 1] === 'c') {
      output.splice(i, 2);
      i = i - 2;
    }
  }

  return output.join('');
}

const assert = require('assert');
assert.equal(removeCharacters('cabbaabcca'), 'caa');
