/*
  AllUniqueCharacters
  Implement an algorithm to determine if a string has all unique characters. What if you can not use additional data structures?
*/

function allUniqueCharacters(str) {
  for (const c of str) {
    if (str.indexOf(c) !== str.lastIndexOf(c)) {
      return false;
    }
  }

  return true;
}

const assert = require('assert');
assert.ok(!allUniqueCharacters('lua is great!'));
assert.ok(!allUniqueCharacters('js is great!'));
