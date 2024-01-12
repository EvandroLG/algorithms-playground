/*
  Halves Are Alike

  You are given a string s of even length. Split this string into two halves of equal lengths, and let a be the first half and b be the second half.
  Two strings are alike if they have the same number of vowels ('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'). Notice that s contains uppercase and lowercase letters.
  Return true if a and b are alike. Otherwise, return false.

  Example:
  Input: "book"
  Output: true
*/

function halvesAreAlike(s) {
  const size = Math.round(s.length / 2);
  const a = s.slice(0, size);
  const b = s.slice(size);

  return counter(a) === counter(b);
}

const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
function isVowel(c) {
  return vowels.has(c.toLowerCase());
}

function counter(s) {
  return s.split('').reduce((acc, c) => {
    if (isVowel(c)) {
      acc++;
    }

    return acc;
  }, 0);
}

const assert = require('assert');
assert.ok(halvesAreAlike('book'));
