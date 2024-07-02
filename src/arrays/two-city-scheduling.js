/*
  Two City Scheduling

  A company is planning to interview 2n people. Given the array costs where costs[i] = [aCosti, bCosti], the cost of flying the ith person to city a is aCosti, and the cost of flying the ith person to city b is bCosti.
  Return the minimum cost to fly every person to a city such that exactly n people arrive in each city.

  Example:
  Input: [[10,20],[30,200],[400,50],[30,20]]
  Output: 110
*/

function twoCityScheduling(costs) {
  costs.sort((a, b) => {
    const diffA = a[0] - a[1];
    const diffB = b[0] - b[1];

    return diffA - diffB;
  });

  let result = 0;
  const half = costs.length / 2;

  for (let i = 0; i < half; i++) {
    result += costs[i][0];
  }

  for (let i = half; i < costs.length; i++) {
    result += costs[i][1];
  }

  return result;
}

const assert = require('assert');
assert.ok(
  twoCityScheduling([
    [10, 20],
    [30, 200],
    [400, 50],
    [30, 20],
  ]),
  110
);
