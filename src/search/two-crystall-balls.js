/*
  Two Crystall Balls

  Given two crystall balls that will break if dropped from high enough distance,
  determine the exact spot in which it will break in the most optmized way

  Example:
  Input: [false, false, false, true, true]
  Output: 3
*/

function twoCrystallBalls(breaks) {
  const jumps = Math.floor(Math.sqrt(breaks.length));
  let i = jumps;

  for (; i < breaks.length; i += jumps) {
    if (breaks[i]) {
      break;
    }
  }

  for (let j = 0; j < i; j++) {
    if (breaks[j]) {
      return j;
    }
  }

  return -1;
}

const assert = require('assert');
assert.equal(twoCrystallBalls([false, false, false, true, true]), 3);
