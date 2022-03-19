/*
  To Lower Case

  Given a string s, return the string after replacing every uppercase letter with the same lowercase letter.

  Example:
  Input: 'Hello'
  Output: 'hello'
*/

function toLowerCase(s) {
  const output = [];

  for (const c of s) {
    const code = c.charCodeAt(0);

    if (code >= 65 && code <= 90) {
      output.push(String.fromCharCode(code + 32));
    } else {
      output.push(c);
    }
  }

  return output.join('');
}

const assert = require('assert');
assert.equal(toLowerCase('Hello'), 'hello');
