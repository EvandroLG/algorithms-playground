/*
  Counter Asterisks

  You are given a string s, where every two consecutive vertical bars '|' are grouped into a pair. In other words, the 1st and 2nd '|' make a pair, the 3rd and 4th '|' make a pair, and so forth.
  Return the number of '*' in s, excluding the '*' between each pair of '|'.

  Example:
  Input: "yo|uar|e**|b|e***au|tifu|l"
  Output: 5
*/

function counterAsterisks(s) {
  const fragments = s.split('|');
  let counter = 0;
  let i = 0;

  while (i < fragments.length) {
    counter += getNumberOfAsterisks(fragments[i]);
    i += 2;
  }

  return counter;
}

function getNumberOfAsterisks(s) {
  return s.split('').reduce((acc, c) => {
    if (c === '*') {
      acc++;
    }

    return acc;
  }, 0);
}

const assert = require('assert');
assert.equal(counterAsterisks('yo|uar|e**|b|e***au|tifu|l'), 5);
