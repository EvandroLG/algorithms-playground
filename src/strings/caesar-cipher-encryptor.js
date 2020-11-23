/*
  Caesar Cipher Encryptor

  Given a non-empty string of lowercase letters and a non-negative integer representing a key, write a function that returns a new string obtained by shifting every letter in the input string by k positions in the alphabet, where k is the key.
  Note that letters should "wrap" around the alphabet; in other words, the letter z shifted by one returns the letter a.

  Sample Input
  string = "xyz"
  key = 2

  Sample Output
  "zab"
*/

function convertCharacter(c, key) {
  const charCode = c.charCodeAt(0) + key;

  if (charCode >= 97 && charCode <= 122) {
    return String.fromCharCode(charCode);
  }

  return String.fromCharCode((charCode % 122) + 96);
}

function caesarCipherEncryptor(str, key) {
  const output = [];
  const newKey = key % 26;

  for (const c of str) {
    const newValue = convertCharacter(c, newKey);
    output.push(newValue);
  }

  return output.join('');
}

const assert = require('assert');

assert.equal(caesarCipherEncryptor('abc', 2), 'cde');
assert.equal(caesarCipherEncryptor('xyz', 2), 'zab');
assert.equal(caesarCipherEncryptor('abc', 26), 'abc');
assert.equal(
  caesarCipherEncryptor('iwufqnkqkqoolxzzlzihqfm', 25),
  'hvtepmjpjpnnkwyykyhgpel'
);
