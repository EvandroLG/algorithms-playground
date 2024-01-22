/*
  License Key Formatting

  You are given a license key represented as a string s that consists of only alphanumeric characters and dashes. The string is separated into n + 1 groups by n dashes. You are also given an integer k.
  We want to reformat the string s such that each group contains exactly k characters, except for the first group, which could be shorter than k but still must contain at least one character. Furthermore, there must be a dash inserted between two groups, and you should convert all lowercase letters to uppercase.
  Return the reformatted license key.

  Example:
  Input: "2-5g-3-J", k = 2
  Output: "2-5G-3J"
*/

function licenseKeyFormatting(s, k) {
  const output = [];
  let tmp = [];

  for (let i = s.length - 1; i >= 0; i--) {
    const c = s[i];

    if (c === '-') {
      continue;
    }

    tmp.push(c);

    if (tmp.length === k) {
      const result = tmp.reverse().join('');
      output.push(result);
      tmp = [];
    }
  }

  if (tmp.length) {
    const result = tmp.reverse().join('');
    output.push(result);
  }

  return output.reverse().join('-').toUpperCase();
}

const assert = require('assert');
assert.equal(licenseKeyFormatting('2-5g-3-j', 2), '2-5G-3J');
