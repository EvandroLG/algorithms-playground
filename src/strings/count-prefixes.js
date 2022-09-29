/*
  Count Prefixes

  You are given a string array words and a string s, where words[i] and s comprise only of lowercase English letters.
  Return the number of strings in words that are a prefix of s.
  A prefix of a string is a substring that occurs at the beginning of the string.
  A substring is a contiguous sequence of characters within a string.

  Example:
  Input: ["a","b","c","ab","bc","abc"], "abc"
  Output: 3
*/

function countPrefixes(words, s) {
  let count = 0;

  for (const word of words) {
    if (hasPrefix(word, s)) {
      count++;
    }
  }

  return count;
}

function hasPrefix(word, s) {
  let p1 = 0;

  while (p1 < word.length) {
    if (word[p1] !== s[p1]) {
      return false;
    }

    p1++;
  }

  return true;
}

const assert = require('assert');
assert.equal(countPrefixes(['a', 'b', 'c', 'ab', 'bc', 'abc'], 'abc'), 3);
