/*
  Check If One String Swap Can Make Equal

  You are given two strings s1 and s2 of equal length.
  A string swap is an operation where you choose two indices in a string (not necessarily different) and swap the characters at these indices.
  Return true if it is possible to make both strings equal by performing at most one string swap on exactly one of the strings.

  Example:
  Input: "bank", "kanb"
  Output: true
*/

function areAlmostEqual(s1, s2) {
  let i = 0;
  let counter = 0;

  const cache1 = getCounter(s1);
  const cache2 = getCounter(s2);

  if (!compare(cache1, cache2)) {
    return false;
  }

  while (i < s1.length) {
    if (s1[i] !== s2[i]) {
      counter++;
    }

    i++;
  }

  return counter <= 2;
}

function getCounter(s) {
  return s.split('').reduce((acc, c) => {
    if (!acc.hasOwnProperty(c)) {
      acc[c] = 0;
    }

    acc[c]++;

    return acc;
  }, {});
}

function compare(cache1, cache2) {
  const keys = Object.keys(cache1);

  for (const key of keys) {
    if (!cache2.hasOwnProperty(key)) {
      return false;
    }

    if (cache1[key] !== cache2[key]) {
      return false;
    }
  }

  return true;
}

const assert = require('assert');
assert.ok(areAlmostEqual('bank', 'kanb'));
assert.ok(!areAlmostEqual('attack', 'defend'));
