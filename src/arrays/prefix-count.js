/*
  Prefix Count

  You are given an array of strings words and a string pref.
  Return the number of strings in words that contain pref as a prefix.
  A prefix of a string s is any leading contiguous substring of s.

  Example:
  Input: ["pay","attention","practice","attend"], "at"
  Output: 2
*/

function prefixCount(arr, prefix) {
  return arr.reduce((acc, item) => {
    if (containPrefix(prefix, item)) {
      acc++;
    }

    return acc;
  }, 0);
}

function containPrefix(prefix, item) {
  let p1 = 0;

  while (p1 < prefix.length) {
    if (item[p1] !== prefix[p1]) {
      return false;
    }

    p1++;
  }

  return true;
}

const assert = require('assert');
assert.equal(prefixCount(['pay', 'attention', 'practice', 'attend'], 'at'), 2);
