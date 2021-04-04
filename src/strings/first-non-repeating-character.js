/*
  First Non Repeating Character

  Write a function that takes in a string of lowercase English-alphabet letters and returns the index of the string's first non-repeating character.
  The first non-repeating character is the first character in a string that occurs only once.
  If the input string doesn't have any non-repeating characters, your function should return -1.

  Sample Input
  string = "abcdcaf"

  Sample Output
  1 // The first non-repeating character is "b" and is found at index 1.
*/

function firstNonRepeatingCharacter(str) {
  const memo = new Map();

  for (let i = 0; i < str.length; i++) {
    const c = str[i];

    memo.set(c, {
      idx: i,
      isUniq: !memo.has(c),
    });
  }

  const keys = memo.keys();

  for (const key of keys) {
    if (memo.get(key).isUniq) {
      return memo.get(key).idx;
    }
  }

  return -1;
}

const assert = require('assert');
assert.equal(firstNonRepeatingCharacter('abcdcaf'), 1);
