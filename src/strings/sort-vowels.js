/*
  Sort Vowels

  Given a 0-indexed string s, permute s to get a new string t such that:
  All consonants remain in their original places. More formally, if there is an index i with 0 <= i < s.length such that s[i] is a consonant, then t[i] = s[i].
  The vowels must be sorted in the nondecreasing order of their ASCII values. More formally, for pairs of indices i, j with 0 <= i < j < s.length such that s[i] and s[j] are vowels, then t[i] must not have a higher ASCII value than t[j].
  Return the resulting string.
  The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in lowercase or uppercase. Consonants comprise all letters that are not vowels.

  Example:
  Input: "lEetcOde"
  Output: "lEOtcede"
*/

function sortVowels(s) {
  const output = [];
  const vowels = getVowels(s);
  const sorted = sort(vowels);

  for (const c of s) {
    if (isVowel(c)) {
      output.push(sorted.pop());
    } else {
      output.push(c);
    }
  }

  return output.join('');
}

const set = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
function isVowel(c) {
  return set.has(c);
}

function getVowels(s) {
  return s.split('').reduce((acc, item) => {
    if (isVowel(item)) {
      acc.push(item);
    }

    return acc;
  }, []);
}

function sort(arr) {
  return arr.sort((a, b) => b.charCodeAt(0) - a.charCodeAt(0));
}

const assert = require('assert');
assert.equal(sortVowels('lEetcOde'), 'lEOtcede');
