/*
  Merge Strings Alternately

  You are given two strings word1 and word2.
  Merge the strings by adding letters in alternating order, starting with word1.
  If a string is longer than the other, append the additional letters onto the end of the merged string.
  Return the merged string.

  Example:
  Input: "abc", "pqr"
  Output: "apbqcr"
*/

function mergeStringsAlternately(word1, word2) {
  let p1 = 0;
  let p2 = 0;
  const output = [];

  while (p2 < word2.length) {
    if (p1 < word1.length) {
      output.push(word1[p1]);
      p1++;
    }

    output.push(word2[p2]);
    p2++;
  }

  while (p1 < word1.length) {
    output.push(word1[p1]);
    p1++;
  }

  return output.join('');
}

const assert = require('assert');
assert.equal(mergeStringsAlternately('abc', 'pqr'), 'apbqcr');
