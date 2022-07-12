/*
  Jewels And Stones

  You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have.
  Each character in stones is a type of stone you have.
  You want to know how many of the stones you have are also jewels.
  Letters are case sensitive, so "a" is considered a different type of stone from "A".

  Example:
  Input: "aA", "aAAbbbb"
  Output: 3
*/

function jewelsAndStones(jewels, stones) {
  const counter = stones.split('').reduce((acc, c) => {
    if (!acc.hasOwnProperty(c)) {
      acc[c] = 0;
    }

    acc[c]++;

    return acc;
  }, {});

  return jewels.split('').reduce((acc, c) => {
    if (counter.hasOwnProperty(c)) {
      return acc + counter[c];
    }

    return acc;
  }, 0);
}

const assert = require('assert');
assert.equal(jewelsAndStones('aA', 'aAAbbbb'), 3);
