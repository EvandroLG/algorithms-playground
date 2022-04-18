/*
  Maximum Population

  You are given a 2D integer array logs where each logs[i] = [birthi, deathi] indicates the birth and death years of the ith person.
  The population of some year x is the number of people alive during that year. The ith person is counted in year x's population if x is in the inclusive range [birthi, deathi - 1].

  Example:
  Input: [[1950,1961],[1960,1971],[1970,1981]]
  Output: 1960
*/

function maximumPopulation(logs) {
  const years = logs.reduce((acc, [birth, death]) => {
    for (let year = birth; year < death; year++) {
      if (!acc.hasOwnProperty(year)) {
        acc[year] = 0;
      }

      acc[year]++;
    }

    return acc;
  }, {});

  let max = -Infinity;
  let output = null;

  for (const [year, counter] of Object.entries(years)) {
    if (counter === max) {
      output = Math.min(+year, output);
    } else if (counter > max) {
      max = counter;
      output = +year;
    }
  }

  return output;
}

const assert = require('assert');
assert.equal(
  maximumPopulation([
    [1950, 1961],
    [1960, 1971],
    [1970, 1981],
  ]),
  1960
);
