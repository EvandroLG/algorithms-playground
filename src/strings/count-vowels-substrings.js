/*
  Count Vowels Substrings

  Given a string word, return the number of vowel substrings in word.

  Example:
  Input: "aeiouu"
  Output: 2
*/

function countVowelsSubstrings(word) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  let result = 0;

  for (let i = 0; i < word.length - 1; i++) {
    const countVowels = new Set();

    if (!vowels.has(word[i])) {
      continue;
    } else {
      countVowels.add(word[i]);
    }

    for (let j = i + 1; j < word.length; j++) {
      if (!vowels.has(word[j])) {
        countVowels.clear();
        break;
      } else {
        countVowels.add(word[j]);

        if (countVowels.size === vowels.size) {
          result++;
        }
      }
    }
  }

  return result;
}

const assert = require('assert');
assert.equal(countVowelsSubstrings('aeiouu'), 2);
