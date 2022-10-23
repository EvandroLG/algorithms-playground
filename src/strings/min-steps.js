/*
  Min Steps

  You are given two strings of the same length s and t.
  In one step you can choose any character of t and replace it with another character.
  Return the minimum number of steps to make t an anagram of s.
  An Anagram of a string is a string that contains the same characters with a different (or the same) ordering.

  Example:
  Input: "leetcode", "practice"
  Output: 5
*/

function minSteps(s1, s2) {
  const s1Counter = getCount(s1);
  const s2Counter = getCount(s2);
  let output = 0;

  for (const key of Object.keys(s1Counter)) {
    if (!s2Counter.hasOwnProperty(key)) {
      output += s1Counter[key];
    } else if (s2Counter[key] < s1Counter[key]) {
      const diff = Math.abs(s2Counter[key] - s1Counter[key]);
      output += diff;
    }
  }

  return output;
}

function getCount(s) {
  return s.split('').reduce((acc, c) => {
    if (!acc.hasOwnProperty(c)) {
      acc[c] = 0;
    }

    acc[c]++;

    return acc;
  }, {});
}

const assert = require('assert');
assert.equal(minSteps('leetcode', 'practice'), 5);
