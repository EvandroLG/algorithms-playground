/*
  Longest Common Prefix

  You are given two arrays with positive integers arr1 and arr2.
  A prefix of a positive integer is an integer formed by one or more of its digits, starting from its leftmost digit.
  For example, 123 is a prefix of the integer 12345, while 234 is not.
  A common prefix of two integers a and b is an integer c, such that c is a prefix of both a and b.
  For example, 5655359 and 56554 have a common prefix 565 while 1223 and 43456 do not have a common prefix.
  You need to find the length of the longest common prefix between all pairs of integers (x, y) such that x belongs to arr1 and y belongs to arr2.
  Return the length of the longest common prefix among all pairs.

  Example:
  Input: [1,10,100], [1000]
  Output: 3
*/

function longestCommonPrefix(arr1, arr2) {
  const set = buildAllPrefixes(arr1);
  let longest = 0;

  for (const item of arr2) {
    const s = '' + item;
    let sub = '';

    for (let i = 0; i < s.length; i++) {
      sub += s[i];

      if (set.has(sub)) {
        longest = Math.max(longest, sub.length);
      }
    }
  }

  return longest;
}

function buildAllPrefixes(arr) {
  const set = new Set();

  for (const item of arr) {
    const s = '' + item;
    let sub = '';

    for (let i = 0; i < s.length; i++) {
      sub += s[i];
      set.add(sub);
    }
  }

  return set;
}

const assert = require('assert');
assert.strictEqual(longestCommonPrefix([1, 10, 100], [1000]), 3);
