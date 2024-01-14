/*
  Vowels Strings

  You are given a 0-indexed array of string words and two integers left and right.
  A string is called a vowel string if it starts with a vowel character and ends with a vowel character where vowel characters are 'a', 'e', 'i', 'o', and 'u'.
  Return the number of vowel strings words[i] where i belongs to the inclusive range [left, right].

  Example:
  Input: ["are","amy","u"], 0, 2
  Output: 2
*/

function vowelsStrings(words, left, right) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  let counter = 0;

  for (let i = left; i <= right; i++) {
    const word = words[i];

    if (vowels.has(word[0]) && vowels.has(word.at(-1))) {
      counter++;
    }
  }

  return counter;
}

const assert = require('assert');
assert.equal(vowelsStrings(['are', 'amy', 'u'], 0, 2), 2);
