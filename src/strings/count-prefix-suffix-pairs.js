/*
  Count Prefix Suffix Pairs

  You are given a 0-indexed string array words.
  Let's define a boolean function isPrefixAndSuffix that takes two strings, str1 and str2:
  - isPrefixAndSuffix(str1, str2) returns true if str1 is both a prefix and a suffix of str2, and false otherwise.
  For example, isPrefixAndSuffix("aba", "ababa") is true because "aba" is a prefix of "ababa" and also a suffix, but isPrefixAndSuffix("abc", "abcd") is false.
  Return an integer denoting the number of index pairs (i, j) such that i < j, and isPrefixAndSuffix(words[i], words[j]) is true.

  Example:
  Input: ["a","aba","ababa","aa"]
  Output: 4
*/

function countPrefixSuffixPairs(words) {
  let counter = 0;

  for (let i = 0; i < words.length - 1; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if (isPrefixAndSufix(words[i], words[j])) {
        counter++;
      }
    }
  }

  return counter;
}

function isPrefixAndSufix(a, b) {
  const prefix = b.slice(0, a.length);

  if (prefix !== a) {
    return false;
  }

  const sufix = b.slice(a.length * -1);

  if (sufix !== a) {
    return false;
  }

  return true;
}

const assert = require('assert');
assert.strictEqual(countPrefixSuffixPairs(['a', 'aba', 'ababa', 'aa']), 4);
