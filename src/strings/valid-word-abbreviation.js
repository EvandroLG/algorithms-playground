/*
  Valid Word Abbreviation

  A string can be abbreviated by replacing any number of non-adjacent, non-empty substrings with their lengths. The lengths should not have leading zeros.
  Given a string word and an abbreviation abbr, return whether the string matches the given abbreviation.

  Example:
  Input: "internationalization", "i12iz4n"
  Output: true
*/

function validWordAbbreviation(word, abbr) {
  if (word === abbr) {
    return true;
  }

  if (abbr.length > word.length) {
    return false;
  }

  let p1 = 0;
  let p2 = 0;

  while (p1 < word.length || p2 < abbr.length) {
    if (word[p1] === abbr[p2]) {
      p1++;
      p2++;

      continue;
    }

    if (!isNumber(abbr[p2])) {
      return false;
    }

    if (abbr[p2] === '0') {
      return false;
    }

    const [size, lastIdx] = getSizeAndLastIdx(abbr, p2);

    if (p1 + size > word.length) {
      return false;
    }

    p1 += size;
    p2 = lastIdx;
  }

  return true;
}

function isNumber(c) {
  return /\d/.test(c);
}

function getSizeAndLastIdx(s, i) {
  const output = [];

  while (isNumber(s[i])) {
    output.push(s[i]);
    i++;
  }

  return [Number(output.join('')), i];
}

const assert = require('assert');
assert.ok(validWordAbbreviation('internationalization', 'i12iz4n'));
