/*
  Daily Temperatures

  Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature.
  If there is no future day for which this is possible, keep answer[i] == 0 instead.

  Example:
  Input: [73,74,75,71,69,72,76,73]
  Output: [1,1,4,2,1,1,0,0]
*/

function dailyTemperatures(temperatures) {
  const output = [];

  for (let i = 0; i < temperatures.length - 1; i++) {
    let found = false;
    let counter = 0;

    for (let j = i + 1; j < temperatures.length; j++) {
      counter++;

      if (temperatures[i] < temperatures[j]) {
        output.push(counter);
        found = true;
        break;
      }
    }

    if (!found) {
      output.push(0);
    }
  }

  output.push(0);

  return output;
}

const assert = require('assert');
assert.ok(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]), [
  1,
  1,
  4,
  2,
  1,
  1,
  0,
  0,
]);
