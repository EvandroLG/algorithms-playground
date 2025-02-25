/*
  Is Anagram With Unicode Valid

  Given two strings, s and t, determine if t is an anagram of s. A string is an anagram of another if they contain the same characters, but possibly in a different order.
  The input strings may or may not contain Unicode characters.

  Example:
  Input: "école", "colée"
  Output: true
*/

function isAnagramWithUnicodeValid(a, b) {
  const normalizedA = a.normalize('NFC');
  const normalizedB = b.normalize('NFC');
  const c1 = count(normalizedA);
  const c2 = count(normalizedB);

  return equal(c1, c2);
}

function count(s) {
  return s.split('').reduce((acc, item) => {
    const code = item.charCodeAt(0);

    if (!acc.hasOwnProperty(code)) {
      acc[code] = 0;
    }

    acc[code]++;

    return acc;
  }, {});
}

function equal(c1, c2) {
  const k1 = Object.keys(c1);
  const k2 = Object.keys(c2);

  if (k1.length !== k2.length) {
    return false;
  }

  for (const k of k1) {
    if (c1[k] !== c2[k]) {
      return false;
    }
  }

  return true;
}

const assert = require('assert');
assert.ok(isAnagramWithUnicodeValid('école', 'colée'));
assert.ok(isAnagramWithUnicodeValid('你好', '好你'));
assert.ok(isAnagramWithUnicodeValid('déjà', 'déjà'));
assert.ok(!isAnagramWithUnicodeValid('déjà', 'dàjà'));
