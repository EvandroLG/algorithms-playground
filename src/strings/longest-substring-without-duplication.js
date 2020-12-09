/*
  LongestSubstringWithoutDuplication

  Write a function that takes in a string and returns its longest substring without duplicate characters.
  You can assume that there will only be one longest substring without duplication.

  Sample Input
  string = "clementisacap"

  Sample Output
  "mentisac"
*/

function longestSubstringWithoutDuplication(str) {
  const letters = {};
  let start = 0;
  let largest = '';

  for (let i = 0; i < str.length; i++) {
    const c = str[i];

    if (!letters.hasOwnProperty(c) || letters[c] < start) {
      letters[c] = i;
      const substr = str.slice(start, i + 1);
      largest = largest.length > substr.length ? largest : substr;

      continue;
    }

    start = letters[c] + 1;
    letters[c] = i;
  }

  return largest;
}

const assert = require('assert');
assert.equal(longestSubstringWithoutDuplication('clementisacap'), 'mentisac');
