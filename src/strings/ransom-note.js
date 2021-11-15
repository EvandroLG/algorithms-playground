/*
  Ransom Note

  Given two stings ransomNote and magazine, return true if ransomNote can be constructed from magazine and false otherwise.
  Each letter in magazine can only be used once in ransomNote.

  Example:
  Input: 'aa', 'ab'
  Output: false
*/

function counter(s) {
  return s.split('').reduce((acc, c) => {
    if (acc.hasOwnProperty(c)) {
      acc[c]++;
    } else {
      acc[c] = 1;
    }

    return acc;
  }, {});
}

function ransomNote(ransomNote, magazine) {
  const counterRansomNote = counter(ransomNote);
  const counterMagazine = counter(magazine);

  const keys = Object.keys(counterRansomNote);

  for (const key of keys) {
    if (!counterMagazine.hasOwnProperty(key)) {
      return false;
    }

    if (counterRansomNote[key] > counterMagazine[key]) {
      return false;
    }
  }

  return true;
}

const assert = require('assert');
assert.ok(!ransomNote('aa', 'ab'));
assert.ok(ransomNote('aa', 'aab'));
