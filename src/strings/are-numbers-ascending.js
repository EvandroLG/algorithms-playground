/*
  Are Numbers Ascending

  A sentence is a list of tokens separated by a single space with no leading or trailing spaces.
  Every token is either a positive number consisting of digits 0-9 with no leading zeros, or a word consisting of lowercase English letters.
  - For example, "a puppy has 2 eyes 4 legs" is a sentence with seven tokens: "2" and "4" are numbers and the other tokens such as "puppy" are words.
  Given a string s representing a sentence, you need to check if all the numbers in s are strictly increasing from left to right.
  Return true if so, or false otherwise.

  Example:
  Input: '1 box has 3 blue 4 red 6 green and 12 yellow marbles'
  Output: true
*/

function areNumbersAscending(s) {
  const fragments = s.split(' ');
  let prev = -Infinity;

  for (const word of fragments) {
    const n = +word;

    if (Number.isInteger(n)) {
      if (prev >= n) {
        return false;
      }

      prev = n;
    }
  }

  return true;
}

const assert = require('assert');
assert.ok(
  areNumbersAscending('1 box has 3 blue 4 red 6 green and 12 yellow marbles')
);
