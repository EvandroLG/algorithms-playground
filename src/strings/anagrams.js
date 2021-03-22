/*
  Anagrams

  Given two strings, write a function to determine if the second string is an anagram of the first.
  An anagram is a word, phrase or name formed by rearranging the letters to another.

  Examples:
  'aaz', 'zza' // false
  'anagram', 'nagaram' // true
*/

function counter(str) {
  const output = {};

  for (const c of str) {
    output[c] = (output[c] || 0) + 1;
  }

  return output;
}

function anagrams(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const counterOne = counter(str1);
  const counterTwo = counter(str2);
  const keysOne = Object.keys(counterOne);

  if (keysOne.length !== Object.keys(counterTwo).length) {
    return false;
  }

  for (const key of keysOne) {
    if (counterOne[key] !== counterTwo[key]) {
      return false;
    }
  }

  return true;
}

const assert = require('assert');

assert.ok(anagrams('anagram', 'nagaram'));
assert.ok(!anagrams('aaz', 'zza'));
