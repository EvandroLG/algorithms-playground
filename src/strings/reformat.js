/*
  Reformat

  You are given an alphanumeric string s. (Alphanumeric string is a string consisting of lowercase English letters and digits).
  You have to find a permutation of the string where no letter is followed by another letter and no digit is followed by another digit.
  That is, no two adjacent characters have the same type.
  Return the reformatted string or return an empty string if it is impossible to reformat the string.

  Example:
  Input: "a0b1c"
  Output: "a0b1c"
*/

function reformat(s) {
  const digits = getDigits(s);
  const letters = getLetters(s);

  if (Math.abs(digits.length - letters.length) > 1) {
    return '';
  }

  return buildReformat(digits, letters);
}

function buildReformat(s1, s2) {
  if (s1.length < s2.length) {
    return buildReformat(s2, s1);
  }

  let p1 = 0;
  const output = [];

  while (p1 < s1.length) {
    output.push(s1[p1]);
    output.push(s2[p1]);
    p1++;
  }

  return output.join('');
}

function getDigits(s) {
  return s.split('').reduce((acc, item) => {
    if (/\d/.test(item)) {
      acc.push(item);
    }

    return acc;
  }, []);
}

function getLetters(s) {
  return s.split('').reduce((acc, item) => {
    if (/[a-z]/.test(item)) {
      acc.push(item);
    }

    return acc;
  }, []);
}

const assert = require('assert');
assert.equal(reformat('a0b1c'), 'a0b1c');
