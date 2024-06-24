/*
  Find Poised Duration

  Our hero Teemo is attacking an enemy Ashe with poison attacks! When Teemo attacks Ashe, Ashe gets poisoned for a exactly duration seconds.
  If Teemo attacks again before the poison effect ends, the timer for it is reset, and the poison effect will end duration seconds after the new attack.
  You are given a non-decreasing integer array timeSeries, where timeSeries[i] denotes that Teemo attacks Ashe at second timeSeries[i], and an integer duration.

  Example:
  Input: timeSeries = [1, 4], duration = 2
  Output: 4
*/

function findPoisedDuration(timeSeries, duration) {
  let total = 0;

  for (let i = 0; i < timeSeries.length; i++) {
    if (i === 0) {
      total += duration;
    } else {
      const curr = timeSeries[i];
      const prev = timeSeries[i - 1];
      const diff = curr - prev;

      if (diff >= duration) {
        total += duration;
      } else {
        total += diff;
      }
    }
  }

  return total;
}

const assert = require('assert');
assert.strictEqual(findPoisedDuration([1, 2, 3, 4, 5], 1), 5);
