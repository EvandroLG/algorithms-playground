/*
  Next Greatest Letter

  You are given an array of characters letters that is sorted in non-decreasing order, and a character target.
  There are at least two different characters in letters.
  Return the smallest character in letters that is lexicographically greater than target.
  If such a character does not exist, return the first character in letters.

  Example:
  Input: ["c","f","j"], target = "c"
  Output: "f"
*/

function nextGreatestLetter(letters, target) {
  let smallest = null;

  for (const letter of letters) {
    if (!smallest) {
      if (letter > target) {
        smallest = letter;
      }
    } else if (smallest > letter) {
      smallest = letter;
    }
  }

  return smallest ?? letters[0];
}

const assert = require('assert');
assert.strictEqual(nextGreatestLetter(['c', 'f', 'j'], 'c'), 'f');
